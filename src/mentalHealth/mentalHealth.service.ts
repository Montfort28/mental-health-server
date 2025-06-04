import { PrismaClient, Prisma } from '@prisma/client';
import { PrismaMentalHealthMetric, MentalHealthMetricProcessed, MoodTrend } from './mentalHealth.types';

const prisma = new PrismaClient();

export class MentalHealthService {
  private convertMetric(metric: PrismaMentalHealthMetric): MentalHealthMetricProcessed {
    let activities: string[] = [];
    try {
      const parsedActivities = typeof metric.activities === 'string'
        ? JSON.parse(metric.activities)
        : metric.activities;
      activities = Array.isArray(parsedActivities) ? parsedActivities : [];
    } catch (e) {
      console.error('Error parsing activities:', e);
    }

    return {
      id: metric.id,
      userId: metric.userId,
      metricDate: metric.metricDate,
      mood: metric.mood,
      anxietyLevel: metric.anxietyLevel ?? undefined,
      stressLevel: metric.stressLevel ?? undefined,
      notes: metric.notes ?? undefined,
      activities,
      createdAt: metric.createdAt
    };
  }

  async getUserMetrics(userId: number): Promise<MentalHealthMetricProcessed[]> {
    const metrics = await prisma.mentalHealthMetric.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });
    return metrics.map(m => this.convertMetric(m as PrismaMentalHealthMetric));
  }

  async getMoodTrends(userId: number, days: number = 30): Promise<MoodTrend[]> {
    const metrics = await prisma.mentalHealthMetric.findMany({
      where: {
        userId,
        createdAt: {
          gte: new Date(Date.now() - days * 24 * 60 * 60 * 1000)
        }
      },
      orderBy: { createdAt: 'asc' }
    });

    const trends = new Map<string, {
      moods: number[];
      anxiety: number[];
      stress: number[];
    }>();

    metrics.forEach((metric: PrismaMentalHealthMetric) => {
      const date = metric.createdAt.toISOString().split('T')[0];
      if (!trends.has(date)) {
        trends.set(date, { moods: [], anxiety: [], stress: [] });
      }
      const dayData = trends.get(date)!;
      dayData.moods.push(metric.mood);
      if (metric.anxietyLevel) dayData.anxiety.push(metric.anxietyLevel);
      if (metric.stressLevel) dayData.stress.push(metric.stressLevel);
    });

    return Array.from(trends.entries()).map(([date, data]) => ({
      date: new Date(date),
      averageMood: data.moods.reduce((a, b) => a + b, 0) / data.moods.length,
      averageAnxiety: data.anxiety.length
        ? data.anxiety.reduce((a, b) => a + b, 0) / data.anxiety.length
        : undefined,
      averageStress: data.stress.length
        ? data.stress.reduce((a, b) => a + b, 0) / data.stress.length
        : undefined
    }));
  }

  async getStreak(userId: number): Promise<number> {
    const metrics = await prisma.mentalHealthMetric.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });

    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < metrics.length; i++) {
      const metricDate = new Date(metrics[i].createdAt);
      metricDate.setHours(0, 0, 0, 0);

      const expectedDate = new Date(today);
      expectedDate.setDate(today.getDate() - i);

      if (metricDate.getTime() === expectedDate.getTime()) {
        streak++;
      } else {
        break;
      }
    }

    return streak;
  }

  async getAchievements(userId: number): Promise<string[]> {
    const metrics = await prisma.mentalHealthMetric.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    }) as PrismaMentalHealthMetric[];

    const achievements: string[] = [];

    // Streak achievements
    const streak = await this.getStreak(userId);
    if (streak >= 3) achievements.push('streak-3');
    if (streak >= 7) achievements.push('streak-7');
    if (streak >= 30) achievements.push('streak-30');

    // Positive mood achievements
    const positiveMoods = metrics.filter(m => m.mood >= 7).length;
    if (positiveMoods >= 5) achievements.push('positive-mood');

    // Activity tracking achievements
    const daysWithActivities = new Set(
      metrics
        .map(m => {
          try {
            const activities = typeof m.activities === 'string'
              ? JSON.parse(m.activities)
              : m.activities;
            return Array.isArray(activities) && activities.length > 0
              ? m.createdAt.toISOString().split('T')[0]
              : null;
          } catch {
            return null;
          }
        })
        .filter((date): date is string => date !== null)
    ).size;
    if (daysWithActivities >= 5) achievements.push('self-care');

    // Journaling achievements
    const daysWithNotes = new Set(
      metrics
        .filter(m => m.notes && m.notes.length > 0)
        .map(m => m.createdAt.toISOString().split('T')[0])
    ).size;
    if (daysWithNotes >= 7) achievements.push('journaling');

    // Mindfulness achievements
    const mindfulnessSessions = metrics
      .map(m => {
        try {
          const activities = typeof m.activities === 'string'
            ? JSON.parse(m.activities)
            : m.activities;
          return Array.isArray(activities) && activities.includes('Meditation');
        } catch {
          return false;
        }
      })
      .filter(Boolean)
      .length;
    if (mindfulnessSessions >= 3) achievements.push('mindfulness-beginner');

    // Emotional awareness achievement
    const uniqueMoods = new Set(metrics.map(m => m.mood));
    if (uniqueMoods.size >= 10) achievements.push('emotional-awareness');

    return achievements;
  }

  async addMetric(userId: number, data: {
    mood: number;
    anxietyLevel?: number;
    stressLevel?: number;
    notes?: string;
    activities?: string[];
  }): Promise<MentalHealthMetricProcessed> {
    const metric = await prisma.mentalHealthMetric.create({
      data: {
        userId,
        metricDate: new Date(),
        mood: data.mood,
        anxietyLevel: data.anxietyLevel ?? null,
        stressLevel: data.stressLevel ?? null,
        notes: data.notes ?? null,
        activities: data.activities ? JSON.stringify(data.activities) : '[]',
        createdAt: new Date()
      }
    });

    return this.convertMetric(metric as PrismaMentalHealthMetric);
  }

  async trackMindfulnessSession(userId: number, duration: number): Promise<void> {
    await prisma.mentalHealthMetric.create({
      data: {
        userId,
        metricDate: new Date(),
        mood: 0, // Neutral mood as this is just for tracking mindfulness
        activities: JSON.stringify(['Meditation']),
        notes: `Completed a ${duration} minute mindfulness session`,
        anxietyLevel: null,
        stressLevel: null
      }
    });
  }
}

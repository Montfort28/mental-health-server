import { PrismaClient } from '@prisma/client';
import { MentalHealthMetric, MoodTrend } from './mentalHealth.types';

const prisma = new PrismaClient();

export class MentalHealthService {
  async getUserMetrics(userId: number): Promise<MentalHealthMetric[]> {
    return prisma.mentalHealthMetric.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });
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

    metrics.forEach((metric: MentalHealthMetric) => {
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
    });

    const achievements: string[] = [];

    // Streak achievements
    const streak = await this.getStreak(userId);
    if (streak >= 3) achievements.push('streak-3');
    if (streak >= 7) achievements.push('streak-7');
    if (streak >= 30) achievements.push('streak-30');

    // Positive mood achievements
    const positiveMoods = metrics.filter((m: MentalHealthMetric) => m.mood >= 7).length;
    if (positiveMoods >= 5) achievements.push('positive-mood');

    // Activity tracking achievements
    const daysWithActivities = new Set(
      metrics
        .filter((m: MentalHealthMetric) => m.activities && m.activities.length > 0)
        .map((m: MentalHealthMetric) => m.createdAt.toISOString().split('T')[0])
    ).size;
    if (daysWithActivities >= 5) achievements.push('self-care');

    // Journaling achievements
    const daysWithNotes = new Set(
      metrics
        .filter((m: MentalHealthMetric) => m.notes && m.notes.length > 0)
        .map((m: MentalHealthMetric) => m.createdAt.toISOString().split('T')[0])
    ).size;
    if (daysWithNotes >= 7) achievements.push('journaling');

    // Mindfulness achievements
    const mindfulnessSessions = metrics
      .filter((m: MentalHealthMetric) => m.activities && m.activities.includes('Meditation'))
      .length;
    if (mindfulnessSessions >= 3) achievements.push('mindfulness-beginner');

    // Emotional awareness achievement
    const uniqueMoods = new Set(metrics.map((m: MentalHealthMetric) => m.mood));
    if (uniqueMoods.size >= 10) achievements.push('emotional-awareness');

    return achievements;
  }

  async getAchievementProgress(userId: number): Promise<Array<{ id: string; progress: number }>> {
    const metrics = await prisma.mentalHealthMetric.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });

    const streak = await this.getStreak(userId);
    const progress: Array<{ id: string; progress: number }> = [];

    // Calculate progress for streak achievements
    progress.push({ id: 'streak-3', progress: Math.min((streak / 3) * 100, 100) });
    progress.push({ id: 'streak-7', progress: Math.min((streak / 7) * 100, 100) });
    progress.push({ id: 'streak-30', progress: Math.min((streak / 30) * 100, 100) });

    // Calculate progress for positive mood achievement
    const positiveMoods = metrics.filter((m: MentalHealthMetric) => m.mood >= 7).length;
    progress.push({ id: 'positive-mood', progress: Math.min((positiveMoods / 5) * 100, 100) });

    // Calculate progress for activity tracking
    const daysWithActivities = new Set(
      metrics
        .filter((m: MentalHealthMetric) => m.activities && m.activities.length > 0)
        .map((m: MentalHealthMetric) => m.createdAt.toISOString().split('T')[0])
    ).size;
    progress.push({ id: 'self-care', progress: Math.min((daysWithActivities / 5) * 100, 100) });

    // Calculate progress for journaling
    const daysWithNotes = new Set(
      metrics
        .filter((m: MentalHealthMetric) => m.notes && m.notes.length > 0)
        .map((m: MentalHealthMetric) => m.createdAt.toISOString().split('T')[0])
    ).size;
    progress.push({ id: 'journaling', progress: Math.min((daysWithNotes / 7) * 100, 100) });

    // Calculate progress for mindfulness
    const mindfulnessSessions = metrics
      .filter((m: MentalHealthMetric) => m.activities && m.activities.includes('Meditation'))
      .length;
    progress.push({ id: 'mindfulness-beginner', progress: Math.min((mindfulnessSessions / 3) * 100, 100) });

    // Calculate progress for emotional awareness
    const uniqueMoods = new Set(metrics.map((m: MentalHealthMetric) => m.mood));
    progress.push({ id: 'emotional-awareness', progress: Math.min((uniqueMoods.size / 10) * 100, 100) });

    return progress;
  }

  async trackMindfulnessSession(userId: number, duration: number): Promise<void> {
    await prisma.mentalHealthMetric.create({
      data: {
        userId,
        metricDate: new Date(),
        mood: 0, // Neutral mood as this is just for tracking mindfulness
        activities: ['Meditation'],
        notes: `Completed a ${duration} minute mindfulness session`,
        anxietyLevel: 0,
        stressLevel: 0
      }
    });
  }

  async addMetric(userId: number, data: {
    mood: number;
    anxietyLevel?: number;
    stressLevel?: number;
    notes?: string;
    activities?: string[];
  }): Promise<MentalHealthMetric> {
    const metric = await prisma.mentalHealthMetric.create({
      data: {
        userId,
        metricDate: new Date(),
        mood: data.mood,
        anxietyLevel: data.anxietyLevel,
        stressLevel: data.stressLevel,
        notes: data.notes,
        activities: data.activities ? JSON.stringify(data.activities) : '[]',
        createdAt: new Date()
      }
    });

    return {
      ...metric,
      activities: JSON.parse(metric.activities as string) as string[]
    };
  }
}

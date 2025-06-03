"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MentalHealthService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class MentalHealthService {
    async getUserMetrics(userId) {
        return prisma.mentalHealthMetric.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' }
        });
    }
    async getMoodTrends(userId, days = 30) {
        const metrics = await prisma.mentalHealthMetric.findMany({
            where: {
                userId,
                createdAt: {
                    gte: new Date(Date.now() - days * 24 * 60 * 60 * 1000)
                }
            },
            orderBy: { createdAt: 'asc' }
        });
        const trends = new Map();
        metrics.forEach((metric) => {
            const date = metric.createdAt.toISOString().split('T')[0];
            if (!trends.has(date)) {
                trends.set(date, { moods: [], anxiety: [], stress: [] });
            }
            const dayData = trends.get(date);
            dayData.moods.push(metric.mood);
            if (metric.anxietyLevel)
                dayData.anxiety.push(metric.anxietyLevel);
            if (metric.stressLevel)
                dayData.stress.push(metric.stressLevel);
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
    async getStreak(userId) {
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
            }
            else {
                break;
            }
        }
        return streak;
    }
    async getAchievements(userId) {
        const metrics = await prisma.mentalHealthMetric.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' }
        });
        const achievements = [];
        const streak = await this.getStreak(userId);
        if (streak >= 3)
            achievements.push('streak-3');
        if (streak >= 7)
            achievements.push('streak-7');
        if (streak >= 30)
            achievements.push('streak-30');
        const positiveMoods = metrics.filter((m) => m.mood >= 7).length;
        if (positiveMoods >= 5)
            achievements.push('positive-mood');
        const daysWithActivities = new Set(metrics
            .filter((m) => m.activities && m.activities.length > 0)
            .map((m) => m.createdAt.toISOString().split('T')[0])).size;
        if (daysWithActivities >= 5)
            achievements.push('self-care');
        const daysWithNotes = new Set(metrics
            .filter((m) => m.notes && m.notes.length > 0)
            .map((m) => m.createdAt.toISOString().split('T')[0])).size;
        if (daysWithNotes >= 7)
            achievements.push('journaling');
        const mindfulnessSessions = metrics
            .filter((m) => m.activities && m.activities.includes('Meditation'))
            .length;
        if (mindfulnessSessions >= 3)
            achievements.push('mindfulness-beginner');
        const uniqueMoods = new Set(metrics.map((m) => m.mood));
        if (uniqueMoods.size >= 10)
            achievements.push('emotional-awareness');
        return achievements;
    }
    async getAchievementProgress(userId) {
        const metrics = await prisma.mentalHealthMetric.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' }
        });
        const streak = await this.getStreak(userId);
        const progress = [];
        progress.push({ id: 'streak-3', progress: Math.min((streak / 3) * 100, 100) });
        progress.push({ id: 'streak-7', progress: Math.min((streak / 7) * 100, 100) });
        progress.push({ id: 'streak-30', progress: Math.min((streak / 30) * 100, 100) });
        const positiveMoods = metrics.filter((m) => m.mood >= 7).length;
        progress.push({ id: 'positive-mood', progress: Math.min((positiveMoods / 5) * 100, 100) });
        const daysWithActivities = new Set(metrics
            .filter((m) => m.activities && m.activities.length > 0)
            .map((m) => m.createdAt.toISOString().split('T')[0])).size;
        progress.push({ id: 'self-care', progress: Math.min((daysWithActivities / 5) * 100, 100) });
        const daysWithNotes = new Set(metrics
            .filter((m) => m.notes && m.notes.length > 0)
            .map((m) => m.createdAt.toISOString().split('T')[0])).size;
        progress.push({ id: 'journaling', progress: Math.min((daysWithNotes / 7) * 100, 100) });
        const mindfulnessSessions = metrics
            .filter((m) => m.activities && m.activities.includes('Meditation'))
            .length;
        progress.push({ id: 'mindfulness-beginner', progress: Math.min((mindfulnessSessions / 3) * 100, 100) });
        const uniqueMoods = new Set(metrics.map((m) => m.mood));
        progress.push({ id: 'emotional-awareness', progress: Math.min((uniqueMoods.size / 10) * 100, 100) });
        return progress;
    }
    async trackMindfulnessSession(userId, duration) {
        await prisma.mentalHealthMetric.create({
            data: {
                userId,
                metricDate: new Date(),
                mood: 0,
                activities: ['Meditation'],
                notes: `Completed a ${duration} minute mindfulness session`,
                anxietyLevel: 0,
                stressLevel: 0
            }
        });
    }
    async addMetric(userId, data) {
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
            activities: JSON.parse(metric.activities)
        };
    }
}
exports.MentalHealthService = MentalHealthService;
//# sourceMappingURL=mentalHealth.service.js.map
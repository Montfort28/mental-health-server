import prisma from '../lib/prisma';
import type { BreathingSession, CreateBreathingSessionDto } from './breathing.types';

export class BreathingService {
    async createSession(userId: number, data: CreateBreathingSessionDto): Promise<BreathingSession> {
        if (!userId) {
            throw new Error('User ID is required');
        }
        if (!data.pattern || data.duration === undefined || data.cycles === undefined) {
            throw new Error('Pattern name, duration, and cycles are required');
        }

        const validStressLevel = (level: number | undefined): boolean => {
            return level === undefined || (level >= 1 && level <= 6);
        };

        if (!validStressLevel(data.stressLevel)) {
            throw new Error('Stress level must be between 1 and 6');
        }

        try {
            const session = await prisma.breathingSession.create({
                data: {
                    userId,
                    pattern: data.pattern,
                    duration: Math.max(1, Math.round(data.duration)),
                    completed: true,
                    cycles: Math.max(0, Math.round(data.cycles)),
                    stressLevel: data.stressLevel ?? null,
                    notes: data.notes?.trim() || null,
                    createdAt: new Date()
                }
            });

            return session;
        } catch (error) {
            console.error('Error creating breathing session:', error);
            throw new Error('Failed to create breathing session');
        }
    }

    async getUserSessions(userId: number): Promise<BreathingSession[]> {
        if (!userId) {
            throw new Error('User ID is required');
        }

        try {
            const sessions = await prisma.breathingSession.findMany({
                where: { userId },
                orderBy: { createdAt: 'desc' }
            });

            return sessions;
        } catch (error) {
            console.error('Error fetching user sessions:', error);
            throw new Error('Failed to fetch user sessions');
        }
    }

    async getSessionStats(userId: number): Promise<{
        totalSessions: number;
        totalMinutes: number;
        averageStressReduction: number | null;
    }> {
        if (!userId) {
            throw new Error('User ID is required');
        }

        try {
            const sessions = await prisma.breathingSession.findMany({
                where: {
                    userId,
                    stressLevel: { not: null }
                },
                select: {
                    duration: true,
                    stressLevel: true
                }
            });

            const totalSessions = sessions.length;
            const totalMinutes = sessions.reduce((acc, session) => acc + Math.round(session.duration / 60), 0);

            let averageStressReduction: number | null = null;
            const sessionsWithStressLevels = sessions.filter(
                (s): s is (typeof s & { stressLevel: number }) => s.stressLevel !== null
            );

            if (sessionsWithStressLevels.length > 0) {
                const totalReduction = sessionsWithStressLevels.reduce(
                    (acc, session) => acc + (6 - session.stressLevel), // Assuming max stress level is 6
                    0
                );
                averageStressReduction = Number((totalReduction / sessionsWithStressLevels.length).toFixed(2));
            }

            return {
                totalSessions,
                totalMinutes,
                averageStressReduction
            };
        } catch (error) {
            console.error('Error fetching session stats:', error);
            throw new Error('Failed to fetch session stats');
        }
    }
}

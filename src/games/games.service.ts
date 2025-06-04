import prisma from '../lib/prisma';
import { GameProgress, GameProgressCreate } from './games.types';

export class GamesService {
    async saveProgress(userId: number, data: GameProgressCreate): Promise<GameProgress> {
        return prisma.gameProgress.create({
            data: {
                userId,
                ...data
            }
        });
    }

    async getProgress(userId: number, gameType?: string): Promise<GameProgress[]> {
        return prisma.gameProgress.findMany({
            where: {
                userId,
                ...(gameType ? { gameType } : {})
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
    }

    async getStats(userId: number) {
        const allProgress = await prisma.gameProgress.findMany({
            where: { userId }
        });

        const gamesPlayed = allProgress.length;
        const totalTimeSpent = allProgress.reduce((sum, p) => sum + p.timeSpent, 0);
        const totalScore = allProgress.reduce((sum, p) => sum + p.score, 0);
        const completedGames = allProgress.filter(p => p.completed).length;

        return {
            gamesPlayed,
            totalTimeSpent,
            averageScore: gamesPlayed > 0 ? totalScore / gamesPlayed : 0,
            completionRate: gamesPlayed > 0 ? (completedGames / gamesPlayed) * 100 : 0
        };
    }
}

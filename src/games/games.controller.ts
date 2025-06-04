import { Response } from 'express';
import { AuthRequest } from '../auth/auth.middleware';
import { GamesService } from './games.service';

export class GamesController {
    constructor(private gamesService: GamesService) { }

    async saveProgress(req: AuthRequest, res: Response) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return res.status(401).json({ message: 'User not authenticated' });
            }

            const progress = await this.gamesService.saveProgress(userId, req.body);
            return res.status(201).json(progress);
        } catch (error) {
            console.error('Error saving game progress:', error);
            return res.status(500).json({ message: 'Failed to save game progress' });
        }
    }

    async getProgress(req: AuthRequest, res: Response) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return res.status(401).json({ message: 'User not authenticated' });
            }

            const { gameType } = req.query;
            const progress = await this.gamesService.getProgress(
                userId,
                typeof gameType === 'string' ? gameType : undefined
            );
            return res.json(progress);
        } catch (error) {
            console.error('Error fetching game progress:', error);
            return res.status(500).json({ message: 'Failed to fetch game progress' });
        }
    }

    async getStats(req: AuthRequest, res: Response) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return res.status(401).json({ message: 'User not authenticated' });
            }

            const stats = await this.gamesService.getStats(userId);
            return res.json(stats);
        } catch (error) {
            console.error('Error fetching game stats:', error);
            return res.status(500).json({ message: 'Failed to fetch game stats' });
        }
    }
}

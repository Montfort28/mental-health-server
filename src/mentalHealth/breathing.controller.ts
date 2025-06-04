import { Response } from 'express';
import { AuthRequest } from '../auth/auth.middleware';
import { BreathingService } from './breathing.service';
import { CreateBreathingSessionDto } from './breathing.types';

export class BreathingController {
    constructor(private breathingService: BreathingService) { }

    async createSession(req: AuthRequest, res: Response) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return res.status(401).json({ message: 'User not authenticated' });
            }

            const sessionData: CreateBreathingSessionDto = req.body;
            const session = await this.breathingService.createSession(userId, sessionData);
            return res.status(201).json(session);
        } catch (error) {
            console.error('Error creating breathing session:', error);
            return res.status(500).json({ message: 'Failed to create breathing session' });
        }
    }

    async getUserSessions(req: AuthRequest, res: Response) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return res.status(401).json({ message: 'User not authenticated' });
            }

            const sessions = await this.breathingService.getUserSessions(userId);
            return res.json(sessions);
        } catch (error) {
            console.error('Error fetching breathing sessions:', error);
            return res.status(500).json({ message: 'Failed to fetch breathing sessions' });
        }
    }

    async getSessionStats(req: AuthRequest, res: Response) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return res.status(401).json({ message: 'User not authenticated' });
            }

            const stats = await this.breathingService.getSessionStats(userId);
            return res.json(stats);
        } catch (error) {
            console.error('Error fetching breathing session stats:', error);
            return res.status(500).json({ message: 'Failed to fetch breathing session stats' });
        }
    }
}

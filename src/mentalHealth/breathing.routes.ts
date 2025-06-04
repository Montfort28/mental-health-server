import { Router } from 'express';
import { BreathingController } from './breathing.controller';
import { BreathingService } from './breathing.service';
import { authenticateJWT } from '../auth/auth.middleware';

const router = Router();
const breathingService = new BreathingService();
const breathingController = new BreathingController(breathingService);

// Create a new breathing session
router.post(
    '/sessions',
    authenticateJWT,
    (req, res) => breathingController.createSession(req, res)
);

// Get user's breathing sessions
router.get(
    '/sessions',
    authenticateJWT,
    (req, res) => breathingController.getUserSessions(req, res)
);

// Get user's breathing session stats
router.get(
    '/sessions/stats',
    authenticateJWT,
    (req, res) => breathingController.getSessionStats(req, res)
);

export default router;

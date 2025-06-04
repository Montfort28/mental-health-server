import { Router } from 'express';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { authenticateJWT } from '../auth/auth.middleware';

const router = Router();
const gamesService = new GamesService();
const gamesController = new GamesController(gamesService);

// Save game progress
router.post(
    '/progress',
    authenticateJWT,
    (req, res) => gamesController.saveProgress(req, res)
);

// Get game progress
router.get(
    '/progress',
    authenticateJWT,
    (req, res) => gamesController.getProgress(req, res)
);

// Get game stats
router.get(
    '/stats',
    authenticateJWT,
    (req, res) => gamesController.getStats(req, res)
);

export default router;

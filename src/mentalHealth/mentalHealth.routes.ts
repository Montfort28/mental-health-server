// mentalHealth/mentalHealth.routes.ts
import { Router } from 'express';
import { MentalHealthService } from './mentalHealth.service';
import { authenticateJWT } from '../auth/auth.middleware';
import { mentalHealthMetricSchema, validate } from '../Validation/schemas';
import { MentalHealthController } from './mentalHealth.controller';


const router = Router();
const mentalHealthService = new MentalHealthService();
const mentalHealthController = new MentalHealthController(mentalHealthService);

// Get user's mental health metrics
router.get(
    '/metrics',
    authenticateJWT,
    (req, res) => mentalHealthController.getUserMetrics(req, res)
);

// Add new mental health metric
router.post(
    '/metrics',
    authenticateJWT,
    validate(mentalHealthMetricSchema),
    (req, res) => mentalHealthController.addMetric(req, res)
);

// Get mood trends
router.get(
    '/trends',
    authenticateJWT,
    (req, res) => mentalHealthController.getMoodTrends(req, res)
);

export default router;
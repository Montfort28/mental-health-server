"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MentalHealthController = void 0;
class MentalHealthController {
    constructor(mentalHealthService) {
        this.mentalHealthService = mentalHealthService;
    }
    async getUserMetrics(req, res) {
        try {
            const user = req.user;
            if (!(user === null || user === void 0 ? void 0 : user.userId)) {
                return res.status(401).json({ error: 'User not authenticated' });
            }
            const metrics = await this.mentalHealthService.getUserMetrics(user.userId);
            return res.json(metrics);
        }
        catch (error) {
            console.error('Error fetching mental health metrics:', error);
            return res.status(500).json({ error: 'Failed to fetch mental health metrics' });
        }
    }
    async addMetric(req, res) {
        try {
            const user = req.user;
            if (!(user === null || user === void 0 ? void 0 : user.userId)) {
                return res.status(401).json({ error: 'User not authenticated' });
            }
            const metric = await this.mentalHealthService.addMetric(user.userId, req.body);
            return res.status(201).json(metric);
        }
        catch (error) {
            console.error('Error adding mental health metric:', error);
            return res.status(500).json({ error: 'Failed to add mental health metric' });
        }
    }
    async getMoodTrends(req, res) {
        try {
            const user = req.user;
            if (!(user === null || user === void 0 ? void 0 : user.userId)) {
                return res.status(401).json({ error: 'User not authenticated' });
            }
            const days = req.query.days ? parseInt(req.query.days) : 30;
            if (isNaN(days) || days < 1 || days > 365) {
                return res.status(400).json({ error: 'Invalid days parameter. Must be between 1 and 365.' });
            }
            const trends = await this.mentalHealthService.getMoodTrends(user.userId, days);
            return res.json(trends);
        }
        catch (error) {
            console.error('Error fetching mood trends:', error);
            return res.status(500).json({ error: 'Failed to fetch mood trends' });
        }
    }
}
exports.MentalHealthController = MentalHealthController;
//# sourceMappingURL=mentalHealth.controller.js.map
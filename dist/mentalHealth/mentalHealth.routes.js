"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mentalHealth_service_1 = require("./mentalHealth.service");
const auth_middleware_1 = require("../auth/auth.middleware");
const schemas_1 = require("../Validation/schemas");
const mentalHealth_controller_1 = require("./mentalHealth.controller");
const router = (0, express_1.Router)();
const mentalHealthService = new mentalHealth_service_1.MentalHealthService();
const mentalHealthController = new mentalHealth_controller_1.MentalHealthController(mentalHealthService);
router.get('/metrics', auth_middleware_1.authenticateJWT, (req, res) => mentalHealthController.getUserMetrics(req, res));
router.post('/metrics', auth_middleware_1.authenticateJWT, (0, schemas_1.validate)(schemas_1.mentalHealthMetricSchema), (req, res) => mentalHealthController.addMetric(req, res));
router.get('/trends', auth_middleware_1.authenticateJWT, (req, res) => mentalHealthController.getMoodTrends(req, res));
exports.default = router;
//# sourceMappingURL=mentalHealth.routes.js.map
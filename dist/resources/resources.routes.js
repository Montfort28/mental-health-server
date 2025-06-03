"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resources_service_1 = require("./resources.service");
const resources_controller_1 = require("./resources.controller");
const router = (0, express_1.Router)();
const resourceService = new resources_service_1.ResourceService();
const resourcesController = new resources_controller_1.ResourcesController(resourceService);
router.get('/', (req, res) => resourcesController.getAllResources(req, res));
router.get('/search', (req, res) => resourcesController.searchResources(req, res));
router.get('/type/:type', (req, res) => resourcesController.getResourcesByType(req, res));
router.post('/', (req, res) => resourcesController.createResource(req, res));
exports.default = router;
//# sourceMappingURL=resources.routes.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const garden_controller_1 = require("./garden.controller");
const garden_service_1 = require("./garden.service");
const auth_middleware_1 = require("../auth/auth.middleware");
const router = (0, express_1.Router)();
const gardenService = new garden_service_1.GardenService();
const gardenController = new garden_controller_1.GardenController(gardenService);
router.get('/', auth_middleware_1.authenticateJWT, (req, res) => gardenController.getGardenElements(req, res));
router.post('/', auth_middleware_1.authenticateJWT, (req, res) => gardenController.addGardenElement(req, res));
router.patch('/:id', auth_middleware_1.authenticateJWT, (req, res) => gardenController.updateGardenElement(req, res));
router.delete('/:id', auth_middleware_1.authenticateJWT, (req, res) => gardenController.deleteGardenElement(req, res));
exports.default = router;
//# sourceMappingURL=garden.routes.js.map
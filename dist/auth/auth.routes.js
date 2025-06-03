"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const auth_middleware_1 = require("./auth.middleware");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/register', auth_controller_1.register);
router.post('/login', auth_controller_1.login);
router.get('/verify-email', auth_controller_1.verifyEmail);
router.post('/request-password-reset', auth_controller_1.requestPasswordReset);
router.post('/reset-password', auth_controller_1.resetPassword);
router.get('/me', auth_middleware_1.authenticateJWT, auth_controller_1.getCurrentUser);
//# sourceMappingURL=auth.routes.js.map
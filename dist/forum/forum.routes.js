"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const forum_controller_1 = require("./forum.controller");
const auth_middleware_1 = require("../auth/auth.middleware");
const router = (0, express_1.Router)();
const forumController = new forum_controller_1.ForumController();
router.get('/posts', (req, res) => forumController.getPosts(req, res));
router.post('/posts', auth_middleware_1.authenticateJWT, (req, res) => forumController.createPost(req, res));
router.post('/posts/:postId/comments', auth_middleware_1.authenticateJWT, (req, res) => forumController.addComment(req, res));
router.get('/categories', (req, res) => forumController.getCategories(req, res));
exports.default = router;
//# sourceMappingURL=forum.routes.js.map
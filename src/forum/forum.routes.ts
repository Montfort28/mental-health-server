// forum/forum.routes.ts
import { Router } from 'express';
import { ForumController } from './forum.controller';
import { authenticateJWT } from '../auth/auth.middleware';

const router = Router();
const forumController = new ForumController();

// Get all forum posts (with optional category filter)
router.get(
  '/posts',
  (req, res) => forumController.getPosts(req, res)
);

// Create a new forum post
router.post(
  '/posts',
  authenticateJWT,
  (req, res) => forumController.createPost(req, res)
);

// Add a comment to a post
router.post(
  '/posts/:postId/comments',
  authenticateJWT,
  (req, res) => forumController.addComment(req, res)
);

// Get all forum categories
router.get(
  '/categories',
  (req, res) => forumController.getCategories(req, res)
);

export default router;
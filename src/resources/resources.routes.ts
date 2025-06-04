// resources/resources.routes.ts
import { Router } from 'express';
import { ResourceService } from './resources.service';
import { ResourcesController } from './resources.controller';
import { authenticateJWT } from '../auth/auth.middleware';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();
const resourceService = new ResourceService(prisma);
const resourcesController = new ResourcesController(resourceService);

// Get all resources
router.get(
  '/',
  authenticateJWT,
  (req, res) => resourcesController.getAllResources(req, res)
);

// Search resources with filters
router.get(
  '/search',
  authenticateJWT,
  (req, res) => resourcesController.searchResources(req, res)
);

// Get resources by type
router.get(
  '/type/:type',
  authenticateJWT,
  (req, res) => resourcesController.getResourcesByType(req, res)
);

// Get resources by category
router.get(
  '/category/:category',
  authenticateJWT,
  (req, res) => resourcesController.getResourcesByCategory(req, res)
);

// Get bookmarked resources
router.get(
  '/bookmarked',
  authenticateJWT,
  (req, res) => resourcesController.getBookmarkedResources(req, res)
);

// Bookmark a resource
router.post(
  '/:resourceId/bookmark',
  authenticateJWT,
  (req, res) => resourcesController.bookmarkResource(req, res)
);

// Remove bookmark
router.delete(
  '/:resourceId/bookmark',
  authenticateJWT,
  (req, res) => resourcesController.removeBookmark(req, res)
);

export default router;
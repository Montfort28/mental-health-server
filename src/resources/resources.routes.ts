// resources/resources.routes.ts
import { Router } from 'express';
import { ResourceService } from './resources.service';
import { ResourcesController } from './resources.controller';

const router = Router();
const resourceService = new ResourceService();
const resourcesController = new ResourcesController(resourceService);

// Get all resources
router.get(
  '/',
  (req, res) => resourcesController.getAllResources(req, res)
);

// Search resources
router.get(
  '/search',
  (req, res) => resourcesController.searchResources(req, res)
);

// Get resources by type
router.get(
  '/type/:type',
  (req, res) => resourcesController.getResourcesByType(req, res)
);

// Create new resource (you might want to add admin authentication here)
router.post(
  '/',
  (req, res) => resourcesController.createResource(req, res)
);

export default router;
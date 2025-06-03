import { Router } from 'express';
import { GardenController } from './garden.controller';
import { GardenService } from './garden.service';
import { authenticateJWT } from '../auth/auth.middleware';

const router = Router();
const gardenService = new GardenService();
const gardenController = new GardenController(gardenService);

// Get all garden elements for the authenticated user
router.get(
  '/',
  authenticateJWT,
  (req, res) => gardenController.getGardenElements(req, res)
);

// Add a new garden element
router.post(
  '/',
  authenticateJWT,
  (req, res) => gardenController.addGardenElement(req, res)
);

// Update a garden element
router.patch(
  '/:id',
  authenticateJWT,
  (req, res) => gardenController.updateGardenElement(req, res)
);

// Delete a garden element
router.delete(
  '/:id',
  authenticateJWT,
  (req, res) => gardenController.deleteGardenElement(req, res)
);

export default router;

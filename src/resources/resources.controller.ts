// resources/resources.controller.ts
import { Request, Response } from 'express';
import { ResourceService } from './resources.service';
import { ResourceType } from './resources.types';

export class ResourcesController {
  constructor(private resourceService: ResourceService) {}
  async getAllResources(_req: Request, res: Response) {
    try {
      const resources = await this.resourceService.getAllResources();
      return res.json(resources);
    } catch (error) {
      console.error('Error fetching resources:', error);
      return res.status(500).json({ error: 'Failed to fetch resources' });
    }
  }

  async getResourcesByType(req: Request, res: Response) {
    try {
      const { type } = req.params;
      
      // Validate resource type
      if (!Object.values(ResourceType).includes(type as ResourceType)) {
        return res.status(400).json({ 
          error: 'Invalid resource type',
          validTypes: Object.values(ResourceType)
        });
      }

      const resources = await this.resourceService.getResourcesByType(type as ResourceType);
      return res.json(resources);
    } catch (error) {
      console.error('Error fetching resources by type:', error);
      return res.status(500).json({ error: 'Failed to fetch resources by type' });
    }
  }

  async createResource(req: Request, res: Response) {
    try {
      const resource = await this.resourceService.createResource(req.body);
      return res.status(201).json(resource);
    } catch (error) {
      console.error('Error creating resource:', error);
      return res.status(500).json({ error: 'Failed to create resource' });
    }
  }

  async searchResources(req: Request, res: Response) {
    try {
      const { q } = req.query;
      
      if (!q || typeof q !== 'string') {
        return res.status(400).json({ error: 'Search query is required' });
      }

      if (q.trim().length < 2) {
        return res.status(400).json({ error: 'Search query must be at least 2 characters long' });
      }

      const resources = await this.resourceService.searchResources(q.trim());
      return res.json(resources);
    } catch (error) {
      console.error('Error searching resources:', error);
      return res.status(500).json({ error: 'Failed to search resources' });
    }
  }
}
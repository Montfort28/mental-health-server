// resources/resources.controller.ts
import { Request, Response } from 'express';
import { ResourceService } from './resources.service';
import { ResourceType, ResourceCategory, ResourceDifficulty } from '@prisma/client';

// Extend Request type to include authenticated user
interface AuthenticatedRequest extends Request {
    user?: {
        id: number;
        email: string;
    };
}

export class ResourcesController {
    constructor(private resourceService: ResourceService) { }

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

    async getResourcesByCategory(req: Request, res: Response) {
        try {
            const { category } = req.params;

            if (!Object.values(ResourceCategory).includes(category as ResourceCategory)) {
                return res.status(400).json({
                    error: 'Invalid resource category',
                    validCategories: Object.values(ResourceCategory)
                });
            }

            const resources = await this.resourceService.getResourcesByCategory(category as ResourceCategory);
            return res.json(resources);
        } catch (error) {
            console.error('Error fetching resources by category:', error);
            return res.status(500).json({ error: 'Failed to fetch resources by category' });
        }
    }

    async searchResources(req: Request, res: Response) {
        try {
            const { q: query, type, category, difficulty, duration } = req.query;

            if (!query || typeof query !== 'string' || query.trim().length < 2) {
                return res.status(400).json({ error: 'Search query must be at least 2 characters long' });
            }

            if (type && !Object.values(ResourceType).includes(type as ResourceType)) {
                return res.status(400).json({
                    error: 'Invalid resource type',
                    validTypes: Object.values(ResourceType)
                });
            }

            if (category && !Object.values(ResourceCategory).includes(category as ResourceCategory)) {
                return res.status(400).json({
                    error: 'Invalid resource category',
                    validCategories: Object.values(ResourceCategory)
                });
            }

            const filters = {
                searchQuery: query.trim(),
                type: type as ResourceType | undefined,
                category: category as ResourceCategory | undefined,
                difficulty: difficulty as ResourceDifficulty | undefined,
                duration: duration ? parseInt(duration as string) : undefined
            };

            const resources = await this.resourceService.getFilteredResources(filters);
            return res.json(resources);
        } catch (error) {
            console.error('Error searching resources:', error);
            return res.status(500).json({ error: 'Failed to search resources' });
        }
    }

    async bookmarkResource(req: AuthenticatedRequest, res: Response) {
        try {
            const { resourceId } = req.params;
            const userId = req.user?.id;

            if (!userId) {
                return res.status(401).json({ error: 'User must be authenticated' });
            }

            await this.resourceService.addBookmark(userId, parseInt(resourceId));
            return res.status(200).json({ message: 'Resource bookmarked successfully' });
        } catch (error) {
            console.error('Error bookmarking resource:', error);
            return res.status(500).json({ error: 'Failed to bookmark resource' });
        }
    }

    async removeBookmark(req: AuthenticatedRequest, res: Response) {
        try {
            const { resourceId } = req.params;
            const userId = req.user?.id;

            if (!userId) {
                return res.status(401).json({ error: 'User must be authenticated' });
            }

            await this.resourceService.removeBookmark(userId, parseInt(resourceId));
            return res.status(200).json({ message: 'Bookmark removed successfully' });
        } catch (error) {
            console.error('Error removing bookmark:', error);
            return res.status(500).json({ error: 'Failed to remove bookmark' });
        }
    }

    async getBookmarkedResources(req: AuthenticatedRequest, res: Response) {
        try {
            const userId = req.user?.id;

            if (!userId) {
                return res.status(401).json({ error: 'User must be authenticated' });
            }

            const resources = await this.resourceService.getBookmarkedResources(userId);
            return res.json(resources);
        } catch (error) {
            console.error('Error fetching bookmarked resources:', error);
            return res.status(500).json({ error: 'Failed to fetch bookmarked resources' });
        }
    }

}
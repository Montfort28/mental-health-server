"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcesController = void 0;
const resources_types_1 = require("./resources.types");
class ResourcesController {
    constructor(resourceService) {
        this.resourceService = resourceService;
    }
    async getAllResources(_req, res) {
        try {
            const resources = await this.resourceService.getAllResources();
            return res.json(resources);
        }
        catch (error) {
            console.error('Error fetching resources:', error);
            return res.status(500).json({ error: 'Failed to fetch resources' });
        }
    }
    async getResourcesByType(req, res) {
        try {
            const { type } = req.params;
            if (!Object.values(resources_types_1.ResourceType).includes(type)) {
                return res.status(400).json({
                    error: 'Invalid resource type',
                    validTypes: Object.values(resources_types_1.ResourceType)
                });
            }
            const resources = await this.resourceService.getResourcesByType(type);
            return res.json(resources);
        }
        catch (error) {
            console.error('Error fetching resources by type:', error);
            return res.status(500).json({ error: 'Failed to fetch resources by type' });
        }
    }
    async createResource(req, res) {
        try {
            const resource = await this.resourceService.createResource(req.body);
            return res.status(201).json(resource);
        }
        catch (error) {
            console.error('Error creating resource:', error);
            return res.status(500).json({ error: 'Failed to create resource' });
        }
    }
    async searchResources(req, res) {
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
        }
        catch (error) {
            console.error('Error searching resources:', error);
            return res.status(500).json({ error: 'Failed to search resources' });
        }
    }
}
exports.ResourcesController = ResourcesController;
//# sourceMappingURL=resources.controller.js.map
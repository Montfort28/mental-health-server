"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GardenController = void 0;
class GardenController {
    constructor(gardenService) {
        this.gardenService = gardenService;
    }
    async getGardenElements(req, res) {
        var _a;
        try {
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
            if (!userId) {
                return res.status(401).json({ message: 'User not authenticated' });
            }
            const elements = await this.gardenService.getGardenElements(userId);
            return res.json(elements);
        }
        catch (error) {
            console.error('Error fetching garden elements:', error);
            return res.status(500).json({ message: 'Failed to fetch garden elements' });
        }
    }
    async addGardenElement(req, res) {
        var _a;
        try {
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
            if (!userId) {
                return res.status(401).json({ message: 'User not authenticated' });
            }
            const element = await this.gardenService.addGardenElement(userId, req.body);
            return res.status(201).json(element);
        }
        catch (error) {
            console.error('Error adding garden element:', error);
            return res.status(500).json({ message: 'Failed to add garden element' });
        }
    }
    async updateGardenElement(req, res) {
        var _a;
        try {
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
            if (!userId) {
                return res.status(401).json({ message: 'User not authenticated' });
            }
            const { id } = req.params;
            const elementId = parseInt(id, 10);
            if (isNaN(elementId)) {
                return res.status(400).json({ message: 'Invalid element ID' });
            }
            const element = await this.gardenService.updateGardenElement(userId, elementId, req.body);
            if (!element) {
                return res.status(404).json({ message: 'Garden element not found' });
            }
            return res.json(element);
        }
        catch (error) {
            console.error('Error updating garden element:', error);
            return res.status(500).json({ message: 'Failed to update garden element' });
        }
    }
    async deleteGardenElement(req, res) {
        var _a;
        try {
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
            if (!userId) {
                return res.status(401).json({ message: 'User not authenticated' });
            }
            const { id } = req.params;
            const elementId = parseInt(id, 10);
            if (isNaN(elementId)) {
                return res.status(400).json({ message: 'Invalid element ID' });
            }
            const success = await this.gardenService.deleteGardenElement(userId, elementId);
            if (!success) {
                return res.status(404).json({ message: 'Garden element not found' });
            }
            return res.status(204).send();
        }
        catch (error) {
            console.error('Error deleting garden element:', error);
            return res.status(500).json({ message: 'Failed to delete garden element' });
        }
    }
}
exports.GardenController = GardenController;
//# sourceMappingURL=garden.controller.js.map
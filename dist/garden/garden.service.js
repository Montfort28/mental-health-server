"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GardenService = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
class GardenService {
    mapPrismaToGardenElement(element) {
        return {
            id: element.id,
            userId: element.userId,
            type: element.type,
            name: element.name,
            description: element.description,
            plantedDate: element.plantedDate,
            lastWateredDate: element.lastWateredDate,
            growthStage: element.growthStage,
            healthStatus: element.healthStatus,
            positionX: element.positionX,
            positionY: element.positionY,
            createdAt: element.createdAt,
            updatedAt: element.updatedAt
        };
    }
    async getGardenElements(userId) {
        const elements = await prisma_1.default.gardenElement.findMany({
            where: { userId }
        });
        return elements.map(this.mapPrismaToGardenElement);
    }
    async addGardenElement(userId, element) {
        var _a;
        const now = new Date();
        const created = await prisma_1.default.gardenElement.create({
            data: {
                userId,
                type: element.type,
                name: element.name,
                description: (_a = element.description) !== null && _a !== void 0 ? _a : null,
                plantedDate: now,
                lastWateredDate: now,
                positionX: element.position.x,
                positionY: element.position.y,
                healthStatus: 'healthy',
                growthStage: 1,
                createdAt: now,
                updatedAt: now
            }
        });
        return this.mapPrismaToGardenElement(created);
    }
    async updateGardenElement(userId, elementId, updates) {
        var _a, _b;
        const data = {};
        if (updates.name !== undefined) {
            data.name = updates.name;
        }
        if (updates.description !== undefined) {
            data.description = updates.description;
        }
        if (updates.growthStage !== undefined) {
            data.growthStage = updates.growthStage;
        }
        if (updates.healthStatus !== undefined) {
            data.healthStatus = updates.healthStatus;
        }
        if (((_a = updates.position) === null || _a === void 0 ? void 0 : _a.x) !== undefined) {
            data.positionX = updates.position.x;
        }
        if (((_b = updates.position) === null || _b === void 0 ? void 0 : _b.y) !== undefined) {
            data.positionY = updates.position.y;
        }
        if (Object.keys(data).length === 0) {
            return null;
        }
        data.updatedAt = new Date();
        const updated = await prisma_1.default.gardenElement.update({
            where: {
                id: elementId,
                userId
            },
            data
        });
        return this.mapPrismaToGardenElement(updated);
    }
    async deleteGardenElement(userId, elementId) {
        try {
            await prisma_1.default.gardenElement.delete({
                where: {
                    id: elementId,
                    userId
                }
            });
            return true;
        }
        catch (error) {
            return false;
        }
    }
}
exports.GardenService = GardenService;
//# sourceMappingURL=garden.service.js.map
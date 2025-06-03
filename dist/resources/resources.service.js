"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceService = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
class ResourceService {
    mapResourceToType(dbResource) {
        var _a, _b, _c;
        return {
            id: dbResource.id,
            title: dbResource.title,
            type: (_a = dbResource.type) !== null && _a !== void 0 ? _a : undefined,
            content: (_b = dbResource.content) !== null && _b !== void 0 ? _b : undefined,
            url: (_c = dbResource.url) !== null && _c !== void 0 ? _c : undefined,
            createdAt: dbResource.createdAt
        };
    }
    async getAllResources() {
        const resources = await prisma_1.default.resource.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return resources.map(this.mapResourceToType);
    }
    async getResourcesByType(type) {
        const resources = await prisma_1.default.resource.findMany({
            where: { type },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return resources.map(this.mapResourceToType);
    }
    async createResource(data) {
        const resource = await prisma_1.default.resource.create({
            data
        });
        return this.mapResourceToType(resource);
    }
    async searchResources(query) {
        const resources = await prisma_1.default.resource.findMany({
            where: {
                OR: [
                    { title: { contains: query } },
                    { content: { contains: query } }
                ]
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return resources.map(this.mapResourceToType);
    }
}
exports.ResourceService = ResourceService;
//# sourceMappingURL=resources.service.js.map
import { PrismaClient, ResourceDifficulty, Prisma } from '@prisma/client';
import { Resource, ResourceType, ResourceCategory, CreateResourceDTO } from './types';

export class ResourceService {
  constructor(private readonly prisma: PrismaClient) { }

  private mapResourceToType(dbResource: any): Resource {
    return {
      ...dbResource,
      type: dbResource.type as ResourceType,
      category: dbResource.category as ResourceCategory,
      difficulty: dbResource.difficulty as ResourceDifficulty,
      tags: dbResource.tags ? dbResource.tags.split(',') : [],
      isBookmarked: Array.isArray(dbResource.bookmarkedBy) && dbResource.bookmarkedBy.length > 0
    };
  }

  async getAllResources(): Promise<Resource[]> {
    const resources = await this.prisma.resource.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        bookmarkedBy: true
      }
    });
    return resources.map(this.mapResourceToType);
  }

  async getResourceById(id: number): Promise<Resource | null> {
    const resource = await this.prisma.resource.findUnique({
      where: { id },
      include: {
        bookmarkedBy: true
      }
    });
    return resource ? this.mapResourceToType(resource) : null;
  }

  async getResourcesByType(type: ResourceType): Promise<Resource[]> {
    const resources = await this.prisma.resource.findMany({
      where: { type },
      orderBy: { createdAt: 'desc' },
      include: {
        bookmarkedBy: true
      }
    });
    return resources.map(this.mapResourceToType);
  }

  async getResourcesByCategory(category: ResourceCategory): Promise<Resource[]> {
    const resources = await this.prisma.resource.findMany({
      where: { category },
      orderBy: { createdAt: 'desc' },
      include: {
        bookmarkedBy: true
      }
    });
    return resources.map(this.mapResourceToType);
  }

  async createResource(data: CreateResourceDTO): Promise<Resource> {
    const resource = await this.prisma.resource.create({
      data: {
        title: data.title,
        description: data.description,
        type: data.type,
        content: data.content,
        category: data.category,
        thumbnail: data.thumbnail,
        duration: data.duration,
        difficulty: data.difficulty?.toUpperCase() as ResourceDifficulty,
        tags: Array.isArray(data.tags) ? data.tags.join(',') : '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      include: {
        bookmarkedBy: true
      }
    });
    return this.mapResourceToType(resource);
  }

  async searchResources(query: string): Promise<Resource[]> {
    const resources = await this.prisma.resource.findMany({
      where: {
        OR: [
          { title: { contains: query } },
          { description: { contains: query } },
          { tags: { contains: query } }
        ]
      },
      orderBy: { createdAt: 'desc' },
      include: {
        bookmarkedBy: true
      }
    });
    return resources.map(this.mapResourceToType);
  }

  async getFilteredResources(filters: {
    searchQuery?: string;
    type?: ResourceType;
    category?: ResourceCategory;
    difficulty?: ResourceDifficulty;
    duration?: number;
  }): Promise<Resource[]> {
    const { searchQuery, type, category, difficulty, duration } = filters;
    const where: Prisma.ResourceWhereInput = {};

    if (searchQuery) {
      where.OR = [
        { title: { contains: searchQuery } },
        { description: { contains: searchQuery } },
        { tags: { contains: searchQuery } }
      ];
    }

    if (type) where.type = type;
    if (category) where.category = category;
    if (difficulty) where.difficulty = difficulty;
    if (duration) where.duration = duration;

    const resources = await this.prisma.resource.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: {
        bookmarkedBy: true
      }
    });

    return resources.map(this.mapResourceToType);
  }

  async addBookmark(userId: number, resourceId: number): Promise<void> {
    await this.prisma.resourceBookmark.create({
      data: {
        userId,
        resourceId
      }
    });
  }

  async removeBookmark(userId: number, resourceId: number): Promise<void> {
    await this.prisma.resourceBookmark.deleteMany({
      where: {
        userId,
        resourceId
      }
    });
  }

  async getBookmarkedResources(userId: number): Promise<Resource[]> {
    const resources = await this.prisma.resource.findMany({
      where: {
        bookmarkedBy: {
          some: {
            userId
          }
        }
      },
      include: {
        bookmarkedBy: true
      }
    });
    return resources.map(resource => ({
      ...this.mapResourceToType(resource),
      isBookmarked: true
    }));
  }
}

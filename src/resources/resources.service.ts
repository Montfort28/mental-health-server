import prisma from '../lib/prisma';
import { CreateResourceDto, Resource, ResourceType } from './resources.types';

export class ResourceService {
  private mapResourceToType(dbResource: any): Resource {
    return {
      id: dbResource.id,
      title: dbResource.title,
      type: dbResource.type ?? undefined,
      content: dbResource.content ?? undefined,
      url: dbResource.url ?? undefined,
      createdAt: dbResource.createdAt
    };
  }

  async getAllResources(): Promise<Resource[]> {
    const resources = await prisma.resource.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return resources.map(this.mapResourceToType);
  }

  async getResourcesByType(type: ResourceType): Promise<Resource[]> {
    const resources = await prisma.resource.findMany({
      where: { type },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return resources.map(this.mapResourceToType);
  }

  async createResource(data: CreateResourceDto): Promise<Resource> {
    const resource = await prisma.resource.create({
      data
    });

    return this.mapResourceToType(resource);
  }

  async searchResources(query: string): Promise<Resource[]> {
    const resources = await prisma.resource.findMany({
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

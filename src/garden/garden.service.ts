import { GardenElement, CreateGardenElementDto, UpdateGardenElementDto } from './garden.types';
import prisma from '../lib/prisma';

export class GardenService {
  private mapPrismaToGardenElement(element: any): GardenElement {
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

  async getGardenElements(userId: number): Promise<GardenElement[]> {
    const elements = await prisma.gardenElement.findMany({
      where: { userId }
    });
    return elements.map(this.mapPrismaToGardenElement);
  }

  async addGardenElement(userId: number, element: CreateGardenElementDto): Promise<GardenElement> {
    const now = new Date();
    const created = await prisma.gardenElement.create({
      data: {
        userId,
        type: element.type,
        name: element.name,
        description: element.description ?? null,
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

  async updateGardenElement(
    userId: number,
    elementId: number,
    updates: UpdateGardenElementDto
  ): Promise<GardenElement | null> {
    const data: any = {};

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

    if (updates.position?.x !== undefined) {
      data.positionX = updates.position.x;
    }

    if (updates.position?.y !== undefined) {
      data.positionY = updates.position.y;
    }

    if (Object.keys(data).length === 0) {
      return null;
    }

    data.updatedAt = new Date();

    const updated = await prisma.gardenElement.update({
      where: {
        id: elementId,
        userId
      },
      data
    });
    return this.mapPrismaToGardenElement(updated);
  }

  async deleteGardenElement(userId: number, elementId: number): Promise<boolean> {
    try {
      await prisma.gardenElement.delete({
        where: {
          id: elementId,
          userId
        }
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}

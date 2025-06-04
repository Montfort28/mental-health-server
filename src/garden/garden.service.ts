import { GardenElement, CreateGardenElementDto, UpdateGardenElementDto } from './garden.types';
import prisma from '../lib/prisma';

export class GardenService {
  private mapPrismaToGardenElement(element: any): GardenElement {
    return {
      id: element.id,
      userId: element.userId,
      type: element.type,
      name: element.name,
      description: element.description || '',
      plantedDate: element.plantedDate,
      lastWateredDate: element.lastWateredDate,
      growthStage: element.growthStage,
      healthStatus: element.healthStatus.replace('-', '_') as 'healthy' | 'needs_attention' | 'wilting',
      positionX: element.positionX,
      positionY: element.positionY,
      createdAt: element.createdAt,
      updatedAt: element.updatedAt,
      moodHistory: element.moodHistory || [],
      activityHistory: element.activityHistory || []
    };
  }

  private async calculateGrowth(userId: number, elementId: number): Promise<number> {
    // Get recent mental health metrics
    const recentMetrics = await prisma.mentalHealthMetric.findMany({
      where: {
        userId,
        createdAt: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // Last 7 days
        }
      }
    });

    // Get recent journal entries
    const recentJournals = await prisma.journalEntry.findMany({
      where: {
        userId,
        createdAt: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        }
      }
    });

    // Calculate growth based on various factors
    let growthScore = 0;

    // Mental health metrics contribution
    recentMetrics.forEach(metric => {
      growthScore += metric.mood; // Base growth from mood
      if (metric.gratitude) growthScore += 2; // Bonus for gratitude
      if (metric.activities) {
        const activities = JSON.parse(metric.activities as string);
        growthScore += activities.length; // Growth from activities
      }
    });

    // Journal entries contribution
    growthScore += recentJournals.length * 3; // Bonus for consistent journaling

    // Get current growth stage
    const element = await prisma.gardenElement.findUnique({
      where: { id: elementId }
    });

    const currentStage = element?.growthStage || 0;
    const newStage = Math.min(Math.floor(currentStage + (growthScore / 50)), 5); // Max 5 stages

    return newStage;
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
      data.healthStatus = updates.healthStatus.replace('-', '_');
    }

    if (updates.position !== undefined) {
      if (updates.position.x !== undefined) {
        data.positionX = updates.position.x;
      }
      if (updates.position.y !== undefined) {
        data.positionY = updates.position.y;
      }
    }

    if (updates.moodHistory !== undefined) {
      data.moodHistory = updates.moodHistory;
    }

    if (updates.activityHistory !== undefined) {
      data.activityHistory = updates.activityHistory;
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
        moodHistory: [],
        activityHistory: [],
        createdAt: now,
        updatedAt: now
      }
    });
    return this.mapPrismaToGardenElement(created);
  }

  async waterPlant(userId: number, elementId: number): Promise<GardenElement | null> {
    const element = await prisma.gardenElement.findFirst({
      where: { id: elementId, userId }
    });

    if (!element) return null;

    const newGrowthStage = await this.calculateGrowth(userId, elementId);

    const updated = await prisma.gardenElement.update({
      where: { id: elementId },
      data: {
        lastWateredDate: new Date(),
        growthStage: newGrowthStage,
        healthStatus: 'healthy'
      }
    });

    return this.mapPrismaToGardenElement(updated);
  }
}

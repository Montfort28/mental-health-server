import { Prisma } from '@prisma/client';

export interface MentalHealthMetric {
  id: number;
  userId: number;
  metricDate: Date;
  mood: number;
  anxietyLevel: number | null;
  stressLevel: number | null;
  notes: string | null;
  activities: string | null;
  createdAt: Date;
}

export interface MentalHealthMetricProcessed {
  id: number;
  userId: number;
  metricDate: Date;
  mood: number;
  anxietyLevel?: number;
  stressLevel?: number;
  notes?: string;
  activities: string[];
  createdAt: Date;
}

export interface CreateMentalHealthMetricDto {
  mood: number;
  anxietyLevel?: number;
  stressLevel?: number;
  notes?: string;
}

export interface MoodTrend {
  date: Date;
  averageMood: number;
  averageAnxiety?: number;
  averageStress?: number;
}

export interface PrismaMentalHealthMetric {
  id: number;
  userId: number;
  metricDate: Date;
  mood: number;
  anxietyLevel: number | null;
  stressLevel: number | null;
  notes: string | null;
  activities: Prisma.JsonValue;
  createdAt: Date;
}

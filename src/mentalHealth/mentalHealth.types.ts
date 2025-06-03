export interface MentalHealthMetric {
  id: number;
  userId: number;
  metricDate: Date;
  mood: number;
  anxietyLevel?: number;
  stressLevel?: number;
  notes?: string;
  activities?: string[];
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

export interface GardenElement {
  id: number;
  userId: number;
  type: 'plant' | 'tree' | 'flower';
  name: string;
  description: string | null;
  plantedDate: Date;
  lastWateredDate: Date;
  growthStage: number;
  healthStatus: 'healthy' | 'needs_attention' | 'wilting';
  positionX: number;
  positionY: number;
  createdAt: Date;
  updatedAt: Date;
  moodHistory?: number[];
  activityHistory?: string[];
}

export interface CreateGardenElementDto {
  type: 'plant' | 'tree' | 'flower';
  name: string;
  description?: string;
  position: {
    x: number;
    y: number;
  };
}

export interface UpdateGardenElementDto {
  name?: string;
  description?: string;
  growthStage?: number;
  healthStatus?: 'healthy' | 'needs_attention' | 'wilting';
  position?: {
    x: number;
    y: number;
  };
  moodHistory?: number[];
  activityHistory?: string[];
}

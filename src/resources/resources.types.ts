export interface Resource {
  id: number;
  title: string;
  type?: ResourceType;
  category: ResourceCategory;
  subCategory: string;
  content?: string;
  url?: string;
  createdAt: Date;
  updatedAt: Date;
  bookmarkedBy?: number[]; // Array of user IDs
}

export interface CreateResourceDto {
  title: string;
  type?: ResourceType;
  category: ResourceCategory;
  subCategory: string;
  content?: string;
  url?: string;
}

export enum ResourceType {
  ARTICLE = 'article',
  MEDITATION = 'meditation',
  EXERCISE = 'exercise',
  VIDEO = 'video',
  AUDIO = 'audio',
  INTERACTIVE = 'interactive'
}

export enum ResourceCategory {
  MENTAL_HEALTH = 'Mental Health',
  COPING = 'Coping',
  CRISIS = 'Crisis',
  SELF_CARE = 'Self-Care',
  PROFESSIONAL = 'Professional',
  EDUCATIONAL = 'Educational'
}

export interface ResourceProgress {
  userId: number;
  resourceId: number;
  progress: number;
  completedAt?: Date;
}

export interface BookmarkResourceDto {
  userId: number;
  resourceId: number;
}

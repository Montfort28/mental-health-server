import { ResourceType, ResourceCategory, ResourceDifficulty } from '@prisma/client';

export { ResourceType, ResourceCategory, ResourceDifficulty };

export interface Resource {
    id: number;
    title: string;
    description: string;
    type: ResourceType;
    content?: string;
    category: ResourceCategory;
    thumbnail?: string;
    duration?: number;
    difficulty?: ResourceDifficulty;
    tags: string;
    createdAt: Date;
    updatedAt: Date;
    isBookmarked?: boolean;
    progress?: number;
}

export interface CreateResourceDTO {
    title: string;
    description: string;
    type: ResourceType;
    content?: string;
    category: ResourceCategory;
    thumbnail?: string;
    duration?: number;
    difficulty?: ResourceDifficulty;
    tags: string[];
}

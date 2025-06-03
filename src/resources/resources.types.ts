export interface Resource {
  id: number;
  title: string;
  type?: string;
  content?: string;
  url?: string;
  createdAt: Date;
}

export interface CreateResourceDto {
  title: string;
  type?: string;
  content?: string;
  url?: string;
}

export enum ResourceType {
  ARTICLE = 'article',
  MEDITATION = 'meditation',
  EXERCISE = 'exercise',
  VIDEO = 'video',
  AUDIO = 'audio'
}

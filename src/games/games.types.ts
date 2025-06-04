export interface GameProgress {
    id: number;
    userId: number;
    gameType: string;
    score: number;
    timeSpent: number;
    completed: boolean;
    metadata: any;
    createdAt: Date;
    updatedAt: Date;
}

export interface GameProgressCreate {
    gameType: string;
    score: number;
    timeSpent: number;
    completed: boolean;
    metadata?: any;
}

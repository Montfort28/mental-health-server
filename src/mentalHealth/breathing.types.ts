export interface BreathingSession {
    id: number;
    userId: number;
    pattern: string;
    duration: number;
    completed: boolean;
    cycles: number;
    stressLevel: number | null;
    notes: string | null;
    createdAt: Date;
}

export interface CreateBreathingSessionDto {
    pattern: string;
    duration: number;
    cycles: number;
    stressLevel?: number;
    notes?: string;
}

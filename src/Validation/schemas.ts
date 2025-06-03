// validation/schemas.ts
import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

// Auth validation schemas
export const registerSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters long')
    .regex(/(?=.*[a-z])/, 'Password must contain at least one lowercase letter')
    .regex(/(?=.*[A-Z])/, 'Password must contain at least one uppercase letter')
    .regex(/(?=.*\d)/, 'Password must contain at least one number')
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password is required')
});

export const resetPasswordSchema = z.object({
  userId: z.number(),
  newPassword: z.string().min(8, 'Password must be at least 8 characters long')
});

// Mental Health validation schemas
export const mentalHealthMetricSchema = z.object({
  mood: z.number().min(1).max(10),
  anxietyLevel: z.number().min(1).max(10).optional(),
  stressLevel: z.number().min(1).max(10).optional(),
  notes: z.string().max(1000).optional(),
  activities: z.array(z.string()).optional()
});

// Forum validation schemas
export const createPostSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
  content: z.string().min(1, 'Content is required').max(5000, 'Content too long'),
  isAnonymous: z.boolean().default(true),
  categoryId: z.number().optional()
});

export const createCommentSchema = z.object({
  content: z.string().min(1, 'Content is required').max(1000, 'Comment too long'),
  isAnonymous: z.boolean().default(true)
});

// Garden validation schemas
export const createGardenElementSchema = z.object({
  type: z.enum(['plant', 'tree', 'flower']),
  name: z.string().min(1, 'Name is required').max(100),
  description: z.string().max(500).optional(),
  positionX: z.number().min(0).max(1000),
  positionY: z.number().min(0).max(1000)
});

export const updateGardenElementSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  description: z.string().max(500).optional(),
  growthStage: z.number().min(1).max(5).optional(),
  healthStatus: z.enum(['healthy', 'needs_attention', 'wilting']).optional(),
  positionX: z.number().min(0).max(1000).optional(),
  positionY: z.number().min(0).max(1000).optional()
});

// Resource validation schemas
export const createResourceSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200),
  type: z.string().max(50).optional(),
  content: z.string().max(10000).optional(),
  url: z.string().url().optional()
});

// Validation middleware function
export const validate = (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.parseAsync(req.body);
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
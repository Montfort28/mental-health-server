"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.createResourceSchema = exports.updateGardenElementSchema = exports.createGardenElementSchema = exports.createCommentSchema = exports.createPostSchema = exports.mentalHealthMetricSchema = exports.resetPasswordSchema = exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
exports.registerSchema = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email format'),
    password: zod_1.z.string().min(8, 'Password must be at least 8 characters long')
        .regex(/(?=.*[a-z])/, 'Password must contain at least one lowercase letter')
        .regex(/(?=.*[A-Z])/, 'Password must contain at least one uppercase letter')
        .regex(/(?=.*\d)/, 'Password must contain at least one number')
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email format'),
    password: zod_1.z.string().min(1, 'Password is required')
});
exports.resetPasswordSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    newPassword: zod_1.z.string().min(8, 'Password must be at least 8 characters long')
});
exports.mentalHealthMetricSchema = zod_1.z.object({
    mood: zod_1.z.number().min(1).max(10),
    anxietyLevel: zod_1.z.number().min(1).max(10).optional(),
    stressLevel: zod_1.z.number().min(1).max(10).optional(),
    notes: zod_1.z.string().max(1000).optional(),
    activities: zod_1.z.array(zod_1.z.string()).optional()
});
exports.createPostSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, 'Title is required').max(200, 'Title too long'),
    content: zod_1.z.string().min(1, 'Content is required').max(5000, 'Content too long'),
    isAnonymous: zod_1.z.boolean().default(true),
    categoryId: zod_1.z.number().optional()
});
exports.createCommentSchema = zod_1.z.object({
    content: zod_1.z.string().min(1, 'Content is required').max(1000, 'Comment too long'),
    isAnonymous: zod_1.z.boolean().default(true)
});
exports.createGardenElementSchema = zod_1.z.object({
    type: zod_1.z.enum(['plant', 'tree', 'flower']),
    name: zod_1.z.string().min(1, 'Name is required').max(100),
    description: zod_1.z.string().max(500).optional(),
    positionX: zod_1.z.number().min(0).max(1000),
    positionY: zod_1.z.number().min(0).max(1000)
});
exports.updateGardenElementSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).max(100).optional(),
    description: zod_1.z.string().max(500).optional(),
    growthStage: zod_1.z.number().min(1).max(5).optional(),
    healthStatus: zod_1.z.enum(['healthy', 'needs_attention', 'wilting']).optional(),
    positionX: zod_1.z.number().min(0).max(1000).optional(),
    positionY: zod_1.z.number().min(0).max(1000).optional()
});
exports.createResourceSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, 'Title is required').max(200),
    type: zod_1.z.string().max(50).optional(),
    content: zod_1.z.string().max(10000).optional(),
    url: zod_1.z.string().url().optional()
});
const validate = (schema) => async (req, res, next) => {
    try {
        await schema.parseAsync(req.body);
        return next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
};
exports.validate = validate;
//# sourceMappingURL=schemas.js.map
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumController = void 0;
const forumService = __importStar(require("./forum.service"));
const prisma_1 = __importDefault(require("../lib/prisma"));
class ForumController {
    async getPosts(req, res) {
        try {
            const categoryId = req.query.categoryId ? parseInt(req.query.categoryId) : undefined;
            if (categoryId && isNaN(categoryId)) {
                return res.status(400).json({ error: 'Invalid category ID' });
            }
            const posts = await forumService.getPosts(categoryId);
            return res.json(posts);
        }
        catch (error) {
            console.error('Error fetching forum posts:', error);
            return res.status(500).json({ error: 'Failed to fetch forum posts' });
        }
    }
    async createPost(req, res) {
        var _a;
        try {
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
            if (!userId) {
                return res.status(401).json({ error: 'User not authenticated' });
            }
            const { title, content, isAnonymous = true, categoryId } = req.body;
            if (!title || !content) {
                return res.status(400).json({ error: 'Title and content are required' });
            }
            if (categoryId && isNaN(parseInt(categoryId))) {
                return res.status(400).json({ error: 'Invalid category ID' });
            }
            const createPostDto = {
                title,
                content,
                isAnonymous,
                categoryId: categoryId ? parseInt(categoryId) : undefined
            };
            const post = await forumService.createPost(userId, createPostDto);
            return res.status(201).json(post);
        }
        catch (error) {
            console.error('Error creating forum post:', error);
            return res.status(500).json({ error: 'Failed to create forum post' });
        }
    }
    async addComment(req, res) {
        var _a;
        try {
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
            if (!userId) {
                return res.status(401).json({ error: 'User not authenticated' });
            }
            const { postId } = req.params;
            const postIdNum = parseInt(postId);
            if (isNaN(postIdNum)) {
                return res.status(400).json({ error: 'Invalid post ID' });
            }
            const { content, isAnonymous = true } = req.body;
            if (!content) {
                return res.status(400).json({ error: 'Content is required' });
            }
            const createCommentDto = {
                content,
                isAnonymous
            };
            const comment = await forumService.addComment(userId, postIdNum, createCommentDto);
            return res.status(201).json(comment);
        }
        catch (error) {
            console.error('Error adding comment:', error);
            return res.status(500).json({ error: 'Failed to add comment' });
        }
    }
    async getCategories(_req, res) {
        try {
            const categories = await prisma_1.default.forumCategory.findMany({
                orderBy: { name: 'asc' }
            });
            return res.json(categories);
        }
        catch (error) {
            console.error('Error fetching forum categories:', error);
            return res.status(500).json({ error: 'Failed to fetch forum categories' });
        }
    }
}
exports.ForumController = ForumController;
//# sourceMappingURL=forum.controller.js.map
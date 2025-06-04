// forum/forum.controller.ts
import { Request, Response } from 'express';
import { AuthRequest } from '../auth/auth.middleware';
import * as forumService from './forum.service';
import prisma from '../lib/prisma';

export class ForumController {
    async getPosts(req: Request, res: Response) {
        try {
            const categoryId = req.query.categoryId ? parseInt(req.query.categoryId as string) : undefined;

            if (categoryId && isNaN(categoryId)) {
                return res.status(400).json({ error: 'Invalid category ID' });
            }

            const posts = await forumService.getPosts(categoryId);
            return res.json(posts);
        } catch (error) {
            console.error('Error fetching forum posts:', error);
            return res.status(500).json({ error: 'Failed to fetch forum posts' });
        }
    }

    async createPost(req: AuthRequest, res: Response) {
        try {
            const userId = req.user?.userId;
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
        } catch (error) {
            console.error('Error creating forum post:', error);
            return res.status(500).json({ error: 'Failed to create forum post' });
        }
    }

    async addComment(req: AuthRequest, res: Response) {
        try {
            const userId = req.user?.userId;
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
        } catch (error) {
            console.error('Error adding comment:', error);
            return res.status(500).json({ error: 'Failed to add comment' });
        }
    }
    async getCategories(_req: Request, res: Response) {
        try {
            const categories = await prisma.forumCategory.findMany({
                orderBy: { name: 'asc' }
            });
            return res.json(categories);
        } catch (error) {
            console.error('Error fetching forum categories:', error);
            return res.status(500).json({ error: 'Failed to fetch forum categories' });
        }
    }
}
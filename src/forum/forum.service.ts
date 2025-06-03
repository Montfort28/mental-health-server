import prisma from '../lib/prisma';
import { ForumPost, ForumComment, CreatePostDto, CreateCommentDto } from './forum.types';
import type { PrismaClient } from '@prisma/client';

type CommentWithUser = {
  id: number;
  postId: number;
  userId: number | null;
  content: string;
  isAnonymous: boolean;
  createdAt: Date;
  user: { id: number; email: string } | null;
};

type PostResponse = Awaited<ReturnType<PrismaClient['forumPost']['findMany']>>[0] & {
  user: { id: number; email: string } | null;
  category: { id: number; name: string } | null;
  comments: CommentWithUser[];
};

export async function getPosts(categoryId?: number): Promise<ForumPost[]> {
  const posts = await prisma.forumPost.findMany({
    where: categoryId ? { categoryId } : undefined,
    include: {
      user: {
        select: {
          id: true,
          email: true
        }
      },
      category: true,
      comments: {
        include: {
          user: {
            select: {
              id: true,
              email: true
            }
          }
        }
      }
    }
  });

  return posts.map((post: PostResponse): ForumPost => ({
    id: post.id,
    title: post.title,
    content: post.content,
    isAnonymous: post.isAnonymous,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
    userId: post.userId ?? undefined,
    categoryId: post.categoryId ?? undefined,
    user: post.user ?? undefined,
    category: post.category ?? undefined,
    comments: post.comments.map((comment: CommentWithUser): ForumComment => ({
      id: comment.id,
      postId: comment.postId,
      content: comment.content,
      isAnonymous: comment.isAnonymous,
      createdAt: comment.createdAt,
      userId: comment.userId ?? undefined,
      user: comment.user ?? undefined
    }))
  }));
}

export async function createPost(userId: number, createPostDto: CreatePostDto): Promise<ForumPost> {
  const createdPost = await prisma.forumPost.create({
    data: {
      title: createPostDto.title,
      content: createPostDto.content,
      isAnonymous: createPostDto.isAnonymous,
      categoryId: createPostDto.categoryId,
      userId
    },
    include: {
      user: {
        select: {
          id: true,
          email: true
        }
      },
      category: true,
      comments: {
        include: {
          user: {
            select: {
              id: true,
              email: true
            }
          }
        }
      }
    }
  });

  return {
    id: createdPost.id,
    title: createdPost.title,
    content: createdPost.content,
    isAnonymous: createdPost.isAnonymous,
    createdAt: createdPost.createdAt,
    updatedAt: createdPost.updatedAt,
    userId: createdPost.userId ?? undefined,
    categoryId: createdPost.categoryId ?? undefined,
    user: createdPost.user ?? undefined,
    category: createdPost.category ?? undefined,
    comments: createdPost.comments.map((comment: CommentWithUser): ForumComment => ({
      id: comment.id,
      postId: comment.postId,
      content: comment.content,
      isAnonymous: comment.isAnonymous,
      createdAt: comment.createdAt,
      userId: comment.userId ?? undefined,
      user: comment.user ?? undefined
    }))
  };
}

export async function addComment(userId: number, postId: number, createCommentDto: CreateCommentDto): Promise<ForumComment> {
  const createdComment = await prisma.forumComment.create({
    data: {
      content: createCommentDto.content,
      isAnonymous: createCommentDto.isAnonymous,
      userId,
      postId
    },
    include: {
      user: {
        select: {
          id: true,
          email: true
        }
      }
    }
  });

  return {
    id: createdComment.id,
    postId: createdComment.postId,
    content: createdComment.content,
    isAnonymous: createdComment.isAnonymous,
    createdAt: createdComment.createdAt,
    userId: createdComment.userId ?? undefined,
    user: createdComment.user ?? undefined
  };
}

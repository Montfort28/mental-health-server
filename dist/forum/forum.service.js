"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPosts = getPosts;
exports.createPost = createPost;
exports.addComment = addComment;
const prisma_1 = __importDefault(require("../lib/prisma"));
async function getPosts(categoryId) {
    const posts = await prisma_1.default.forumPost.findMany({
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
    return posts.map((post) => {
        var _a, _b, _c, _d;
        return ({
            id: post.id,
            title: post.title,
            content: post.content,
            isAnonymous: post.isAnonymous,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt,
            userId: (_a = post.userId) !== null && _a !== void 0 ? _a : undefined,
            categoryId: (_b = post.categoryId) !== null && _b !== void 0 ? _b : undefined,
            user: (_c = post.user) !== null && _c !== void 0 ? _c : undefined,
            category: (_d = post.category) !== null && _d !== void 0 ? _d : undefined,
            comments: post.comments.map((comment) => {
                var _a, _b;
                return ({
                    id: comment.id,
                    postId: comment.postId,
                    content: comment.content,
                    isAnonymous: comment.isAnonymous,
                    createdAt: comment.createdAt,
                    userId: (_a = comment.userId) !== null && _a !== void 0 ? _a : undefined,
                    user: (_b = comment.user) !== null && _b !== void 0 ? _b : undefined
                });
            })
        });
    });
}
async function createPost(userId, createPostDto) {
    var _a, _b, _c, _d;
    const createdPost = await prisma_1.default.forumPost.create({
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
        userId: (_a = createdPost.userId) !== null && _a !== void 0 ? _a : undefined,
        categoryId: (_b = createdPost.categoryId) !== null && _b !== void 0 ? _b : undefined,
        user: (_c = createdPost.user) !== null && _c !== void 0 ? _c : undefined,
        category: (_d = createdPost.category) !== null && _d !== void 0 ? _d : undefined,
        comments: createdPost.comments.map((comment) => {
            var _a, _b;
            return ({
                id: comment.id,
                postId: comment.postId,
                content: comment.content,
                isAnonymous: comment.isAnonymous,
                createdAt: comment.createdAt,
                userId: (_a = comment.userId) !== null && _a !== void 0 ? _a : undefined,
                user: (_b = comment.user) !== null && _b !== void 0 ? _b : undefined
            });
        })
    };
}
async function addComment(userId, postId, createCommentDto) {
    var _a, _b;
    const createdComment = await prisma_1.default.forumComment.create({
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
        userId: (_a = createdComment.userId) !== null && _a !== void 0 ? _a : undefined,
        user: (_b = createdComment.user) !== null && _b !== void 0 ? _b : undefined
    };
}
//# sourceMappingURL=forum.service.js.map
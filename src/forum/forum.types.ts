export interface ForumPost {
  id: number;
  userId?: number;
  categoryId?: number;
  title: string;
  content: string;
  isAnonymous: boolean;
  createdAt: Date;
  updatedAt: Date;
  user?: {
    id: number;
    email: string;
  };
  category?: {
    id: number;
    name: string;
  };
  comments: ForumComment[];
}

export interface ForumComment {
  id: number;
  postId: number;
  userId?: number;
  content: string;
  isAnonymous: boolean;
  createdAt: Date;
  user?: {
    id: number;
    email: string;
  };
}

export interface CreatePostDto {
  title: string;
  content: string;
  categoryId?: number;
  isAnonymous: boolean;
}

export interface CreateCommentDto {
  content: string;
  isAnonymous: boolean;
}

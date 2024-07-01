import { Article, Comment, User } from '@prisma/client';

export type JWTPayloadType = {
  isAdmin: boolean;
  username: string;
  id: number;
};

export type CommentWithUser = Comment & { user: User };
export type SingleArtcile = Article & { comment: CommentWithUser[] };

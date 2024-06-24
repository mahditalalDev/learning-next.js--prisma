export interface NewArticleDto {
  title: string;
  description: string;
}
export interface UpdateArticleDto {
  title?: string;
  description?: string;
}
export interface RegisterUserTdo {
  username: string;
  email: string;
  password: string;
}
export interface LoginUserTdo {
  email: string;
  password: string;
}
export interface UpdateProfileTdo {
  username?: string;
  email?: string;
  password?: string;
}
export interface CreateCommentDto {
  text: string;
  articleId: number;
}
export interface UpdateCommentDto {
  text: string;
}

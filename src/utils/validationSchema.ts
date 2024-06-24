import { z } from 'zod';

export const createArticleSchema = z.object({
  title: z
    .string({
      required_error: 'title is reguried',
      invalid_type_error: 'title should be with type string',
    })
    .min(2, 'title most be more than 2 chracter')
    .max(200),
  description: z
    .string({
      required_error: 'description is reguried',
      invalid_type_error: 'description should be with type string',
    })
    .min(10, { message: 'description should be at min 10 character' }),
});
export const registerUserSchema = z.object({
  username: z.string().min(5).max(15),
  email: z.string().email(),
  password: z.string().min(5),
});
export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});
export const createCommentSchema = z.object({
  text: z.string().min(5).max(500),
  articleId: z.number(),
});
export const updateCommentSchema=z.object({
  text: z.string().min(5).max(500),
})

import { DOMAIN } from '@/utils/contstants';
import { Article, Comment } from '@prisma/client';
import { SingleArtcile } from '@/utils/types';
import axios from 'axios';
// get articles by page number
export async function getArticles(
  pageNumber: string | undefined,
): Promise<Article[]> {
  const response = await fetch(
    `${DOMAIN}/api/articles?pageNumber=${pageNumber}`,
  );
  if (!response.ok) {
    throw new Error('failed to fetch');
  }
  return response.json();
}
// get count of all articles
export async function getArticlesCount(): Promise<number> {
  const response = await fetch(`${DOMAIN}/api/articles/count`);
  if (!response.ok) {
    throw new Error('failed to get articles count');
  }
  const { count } = (await response.json()) as { count: number };
  return count;
}

// get articles by page search
export async function getArticlesSearch(title: string): Promise<Article[]> {
  console.log('the title from api calls is ', title);

  const response = await fetch(
    `${DOMAIN}/api/articles/search?title=${title}`,
    // /                   api/articles/search?title=value
  );
  console.log(response);
  if (!response.ok) {
    throw new Error('failed to fetch');
  }
  return response.json();
}
//get single article by id
export async function getSingleArticle(
  articleId: number,
): Promise<SingleArtcile> {
  const response = await fetch(`${DOMAIN}/api/articles/${articleId}`);
  if (!response.ok) {
    throw new Error('error getting the post data');
  }
  return response.json();
}

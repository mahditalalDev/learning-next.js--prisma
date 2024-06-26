import { Article } from '@prisma/client';
// get articles by page number
export async function getArticles(
  pageNumber: string | undefined,
): Promise<Article[]> {
  const response = await fetch(
    `http://localhost:3000/api/articles?pageNumber=${pageNumber}`,
  );
  if (!response.ok) {
    throw new Error('failed to fetch');
  }
  return response.json();
}
// get count of all articles
export async function getArticlesCount(): Promise<number> {
  const response = await fetch(`http://localhost:3000/api/articles/count`);
  if (!response.ok) {
    throw new Error('failed to get articles count');
  }
  const { count } = (await response.json()) as { count: number };
  return count;
}

// get articles by page search
export async function getArticlesSearch(title: string): Promise<Article[]> {
  const response = await fetch(
    `http://localhost:3000/api/articles/search?title=${title}`,
    // /                   api/articles/search?title=value
  );
  console.log(response);
  if (!response.ok) {
    throw new Error('failed to fetch');
  }
  return response.json();
}

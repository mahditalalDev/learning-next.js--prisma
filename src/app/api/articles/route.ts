import { NextRequest, NextResponse } from 'next/server';
import { articles } from '@/utils/data';
import { Article } from '@/utils/types';
import { createArticleSchema } from '@/utils/validationSchema';
import { NewArticleDto } from '@/utils/dtos';

/**
 * @method GET
 * @route ~/api/articles
 * @description get all articles
 * @access public
 */

export function GET(reg: NextRequest) {
  return NextResponse.json(articles, { status: 200 });
}

/**
 * @method POST
 * @route ~/api/articles
 * @description add new acrticle
 * @access public
 */

export async function POST(reg: NextRequest) {
  const body = (await reg.json()) as NewArticleDto;

  const validation = createArticleSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { message: validation.error.errors[0].message },
      { status: 400 },
    );
  }

  const newArticle: Article = {
    title: body.title,
    body: body.body,
    id: articles.length + 1,
    userId: 200,
  };
  articles.push(newArticle);
  return NextResponse.json(newArticle, { status: 201 });
}

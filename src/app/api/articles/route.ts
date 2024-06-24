import { NextRequest, NextResponse } from 'next/server';
import { createArticleSchema } from '@/utils/validationSchema';
import { NewArticleDto } from '@/utils/dtos';
import { Article } from '@prisma/client';
import prisma from '@/utils/db';
import { verifyToken } from '@/utils/verifyToken';
import { request } from 'http';

/**
 * @method GET
 * @route ~/api/articles
 * @description get articles by page number
 * @access public
 */

export async function GET(request: NextRequest) {
  try {
    const pageNumber = request.nextUrl.searchParams.get('pageNumber') || '1';
    const pageSize = 6; // Number of articles per page

    console.log(`Fetching articles for page number: ${pageNumber}`);
    const articles = await prisma.article.findMany({
      skip: pageSize * (parseInt(pageNumber) - 1),
      take: pageSize,
    });

    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

/**
 * @method POST
 * @route ~/api/articles
 * @description add new acrticle
 * @access private only admin can add new article
 */

export async function POST(request: NextRequest) {
  try {
    const userFromToken = verifyToken(request);
    if (userFromToken === null || userFromToken.isAdmin === false) {
      return NextResponse.json({message:"only admin can create article"}, {status:403});
    }
    const body = (await request.json()) as NewArticleDto;
    const validation = createArticleSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 },
      );
    }

    const newArticle: Article = await prisma.article.create({
      data: { title: body.title, description: body.description },
    });

    return NextResponse.json(newArticle, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'server error' }, { status: 500 });
  }
}

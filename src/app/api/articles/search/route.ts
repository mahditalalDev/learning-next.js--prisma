import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/db';

/**
 * @method GET
 * @route ~/api/articles/search?title=value
 * @description get articles by search
 * @access public
 */
export async function GET(req: NextRequest) {
  try {
    const searchText = req.nextUrl.searchParams.get('title');
    let articles;
    if (searchText) {
      articles = await prisma.article.findMany({
        where: {
          title: {
            startsWith: searchText,
            mode: 'insensitive',
          },
        },
      });
    } else {
      articles = await prisma.article.findMany({ take: 6 });
    }
    return NextResponse.json(articles, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'internal server error' },
      { status: 500 },
    );
  }
}

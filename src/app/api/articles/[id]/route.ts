import { NextRequest, NextResponse } from 'next/server';
import { UpdateArticleDto } from '@/utils/dtos';
import prisma from '@/utils/db';
import { verifyToken } from '@/utils/verifyToken';
import { request } from 'http';

interface SingleArticleParam {
  params: { id: string };
}

/**
 * @method GET
 * @route ~/api/articles/:id
 * @description get single article
 * @access public
 */

export async function GET(reg: NextRequest, props: SingleArticleParam) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: parseInt(props.params.id) },
    });
    if (!article) {
      return NextResponse.json(
        { message: 'article not found' },
        { status: 404 },
      );
    }
    return NextResponse.json(article, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'server error' }, { status: 500 });
  }
}
/**
 * @method PUT
 * @route ~/api/articles/:id
 * @description update single article
 * @access private only admin can update article
 */

export async function PUT(request: NextRequest, props: SingleArticleParam) {
  try {
    const userFromToken = verifyToken(request);
    if (userFromToken === null || userFromToken.isAdmin === false) {
      return NextResponse.json(
        { message: 'only admin can update the article' },
        { status: 403 },
      );
    }
    const article = await prisma.article.findUnique({
      where: { id: parseInt(props.params.id) },
    });
    if (!article) {
      return NextResponse.json(
        { message: 'article not found' },
        { status: 404 },
      );
    }
    const body = (await request.json()) as UpdateArticleDto;
    const updateArticle = await prisma.article.update({
      where: {
        id: parseInt(props.params.id),
      },
      data: {
        title: body.title,
        description: body.description,
      },
    });

    return NextResponse.json(updateArticle, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'server error' }, { status: 500 });
  }
}
/**
 * @method DELETE
 * @route ~/api/articles/:id
 * @description delete single article
 * @access private only admin can delete the single article
 */

export async function DELETE(request: NextRequest, props: SingleArticleParam) {
  try {
    const userFromToken = verifyToken(request);
    if (userFromToken === null || userFromToken.isAdmin === false) {
      return NextResponse.json(
        { message: 'only admin can delete the article' },
        { status: 403 },
      );
    }

    const article = await prisma.article.findUnique({
      where: { id: parseInt(props.params.id) },
    });
    if (!article) {
      return NextResponse.json(
        { message: 'article not found' },
        { status: 404 },
      );
    }
    const deleteUser = await prisma.article.delete({
      where: {
        id: parseInt(props.params.id),
      },
    });
    return NextResponse.json(deleteUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'server error' }, { status: 500 });
  }
}

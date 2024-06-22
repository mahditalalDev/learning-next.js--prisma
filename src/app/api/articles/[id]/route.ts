import { NextRequest, NextResponse } from 'next/server';
import { UpdateArticleDto } from '@/utils/dtos';
import prisma from '@/utils/db';

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
 * @access public
 */

export async function PUT(reg: NextRequest, props: SingleArticleParam) {
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
    const body = (await reg.json()) as UpdateArticleDto;
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
 * @access public
 */

export async function DELETE(reg: NextRequest, props: SingleArticleParam) {
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

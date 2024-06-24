import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/db';
import { verifyToken } from '@/utils/verifyToken';
import { CreateCommentDto } from '@/utils/dtos';
import { createCommentSchema } from '@/utils/validationSchema';

/**
 * @method POST
 * @route ~/api/users/comments
 * @description add new comment
 * @access private
 */

export async function POST(request: NextRequest, props: any) {
  try {
    const user = verifyToken(request);
    if (!user) {
      return NextResponse.json(
        { message: 'no token detected ,Unotherized' },
        { status: 403 },
      );
    }
    const body = (await request.json()) as CreateCommentDto;
    const validation = createCommentSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: 'inputs not valid' },
        { status: 400 },
      );
    }
    const newComment = await prisma.comment.create({
      data: {
        text: body.text,
        articleId: body.articleId,
        userId: user.id,
      },
    });
    return NextResponse.json(newComment, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'internal server error' },
      { status: 500 },
    );
  }
}

/**
 * @method GET
 * @route ~/api/users/comments
 * @description get all comments
 * @access private only admin
 */

export async function GET(request: NextRequest, props: any) {
  try {
    const user = verifyToken(request);
    if (user === null || user.isAdmin === false) {
      return NextResponse.json(
        { message: 'only admin,access denied' },
        { status: 403 },
      );
    }
    const allComments = await prisma.comment.findMany();

    return NextResponse.json(allComments, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'internal server error' },
      { status: 500 },
    );
  }
}

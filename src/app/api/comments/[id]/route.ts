import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/db';
import { verifyToken } from '@/utils/verifyToken';
import { UpdateCommentDto } from '@/utils/dtos';
import { updateCommentSchema } from '@/utils/validationSchema';

/**
 * @method PUT
 * @route ~/api/users/comments/:id    id refers to articleId
 * @description add new comment
 * @access private user can add new comment
 */
interface CommentProps {
  params: { id: string };
}
export async function PUT(request: NextRequest, { params }: CommentProps) {
  try {
    const comment = await prisma.comment.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (comment === null) {
      return NextResponse.json(
        { message: 'you trying to update comment not exit' },
        { status: 404 },
      );
    }
    const userFromToken = verifyToken(request);
    if (userFromToken === null) {
      return NextResponse.json({ message: 'Token Not Found' }, { status: 403 });
    }
    if (userFromToken.id != comment.userId) {
      return NextResponse.json(
        { message: 'Only the owner can update their comment.' },
        { status: 403 },
      );
    }
    const body = (await request.json()) as UpdateCommentDto;
    const validation = updateCommentSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 },
      );
    }

    const updatedComment = await prisma.comment.update({
      where: { id: parseInt(params.id) },
      data: { text: body.text },
    });
    return NextResponse.json(updatedComment, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'internal server error' },
      { status: 500 },
    );
  }
}
/**
 * @method DELETE
 * @route ~/api/users/comments/:id    id refers to articleId
 * @description delete comment
 * @access private admin and user can add delete comment
 */
export async function DELETE(request: NextRequest, { params }: CommentProps) {
  try {
    const comment = await prisma.comment.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!comment) {
      return NextResponse.json(
        { message: 'comment not found' },
        { status: 404 },
      );
    }
    const userFromToken = verifyToken(request);
    if (userFromToken === null) {
      return NextResponse.json({ message: 'invalid token' }, { status: 403 });
    }
    if (userFromToken.id === comment.userId || userFromToken.isAdmin === true) {
      const deletedComment = await prisma.comment.delete({
        where: { id: parseInt(params.id) },
      });
      return NextResponse.json(deletedComment, { status: 200 });
    }
    return NextResponse.json(
      { message: 'only user himself can delete his comment' },
      { status: 403 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'internal server error' },
      { status: 500 },
    );
  }
}

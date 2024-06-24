import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/db';
import jwt from 'jsonwebtoken';
import { JWTPayloadType } from '@/utils/types';
import { verifyToken } from '@/utils/verifyToken';

interface props {
  params: { id: string };
}
/**
 * @method DELETE
 * @route ~/api/users/profile/:id
 * @description delete user account
 * @access private
 */
export async function DELETE(request: NextRequest, { params }: props) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!user) {
      return NextResponse.json({ message: 'user not found' }, { status: 404 });
    }
    const userFromToken = verifyToken(request);

    if (userFromToken === null) {
      return NextResponse.json(
        { message: 'not token provided,access denied' },
        { status: 401 },
      );
    }
    if (userFromToken.id === user.id) {
      await prisma.user.delete({ where: { id: parseInt(params.id) } });
      return NextResponse.json(
        { message: 'your profile account has been deleted' },
        { status: 200 },
      );
    }
    return NextResponse.json(
      { message: 'only user himself can delete his profile,forbidden' },
      { status: 403 },
    );
  } catch (error) {
    return NextResponse.json({ message: 'server error' }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/db';
import bcrypt from 'bcryptjs';
import { verifyToken } from '@/utils/verifyToken';
import { UpdateProfileTdo } from '@/utils/dtos';

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
/**
 * @method GET
 * @route ~/api/users/profile/:id
 * @description get profile by id
 * @access private
 */
export async function GET(request: NextRequest, { params }: props) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
      select: {
        id: true,
        email: true,
        username: true,
        createdAt: true,
        isAdmin: true,
      },
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
      return NextResponse.json(user, { status: 200 });
    }
    return NextResponse.json(
      { message: 'only user himself can get his profile info,forbidden' },
      { status: 403 },
    );
  } catch (error) {
    return NextResponse.json({ message: 'server error' }, { status: 500 });
  }
}

/**
 * @method GET
 * @route ~/api/users/profile/:id
 * @description update  profile by id
 * @access private
 */

export async function PUT(request: NextRequest, { params }: props) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!user) {
      return NextResponse.json({ message: 'User Not Found' }, { status: 404 });
    }
    const userFromToken = verifyToken(request);
    if (userFromToken === null) {
      return NextResponse.json(
        { message: 'no provided token ' },
        { status: 401 },
      );
    }

    if (userFromToken.id === user.id) {
      const body = (await request.json()) as UpdateProfileTdo;
      if (body.password) {
        const salt = await bcrypt.genSalt(10);
        body.password = await bcrypt.hash(body.password, salt);
      }
      const updatedUser = await prisma.user.update({
        where: { id: parseInt(params.id) },
        data: {
          username: body.username,
          email: body.email,
          password: body.password,
        },
        select: {
          username: true,
          email: true,
          createdAt: true,
          isAdmin: true,
        },
      });
      return NextResponse.json(updatedUser, { status: 200 });
    }
    return NextResponse.json(
      { message: 'only user himself can update his profile,forebidden' },
      { status: 403 },
    );
  } catch (error) {
    return NextResponse.json({ message: 'server error' }, { status: 500 });
  }
}

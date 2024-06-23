import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/db';
import { RegisterUserTdo } from '@/utils/dtos';
import { registerUserSchema } from '@/utils/validationSchema';
import bcrypt from 'bcryptjs';

/**
 * @method POST
 * @route ~/api/users/register
 * @description add new user  ==>create new account
 * @access public
 */

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as RegisterUserTdo;
    console.log(body);
    const validation = registerUserSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 },
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (user) {
      return NextResponse.json(
        { message: 'this user already registerd' },
        { status: 400 },
      );
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(body.password, salt);
    const newUser = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hashPassword,
      },
      select: {
        username: true,
        id: true,
        isAdmin: true,
      },
    });
    //Todo generate token
    const token = null;
    return NextResponse.json({...newUser,token}, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'server error' }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/db';
import { LoginUserTdo } from '@/utils/dtos';
import { loginUserSchema } from '@/utils/validationSchema';
import bcrypt from 'bcryptjs';
import { setCookie } from '@/utils/generateToken';
/**
 * @method POST
 * @route ~/api/users/login
 * @description login user
 * @access public
 */

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LoginUserTdo;
    const validation = loginUserSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 },
      );
    }

    const user = await prisma.user.findUnique({ where: { email: body.email } });
    if (!user) {
      return NextResponse.json(
        { message: 'you dont have account ,signup' },
        { status: 400 },
      );
    }
    const isPasswordMatch = await bcrypt.compare(body.password, user.password);
    if (!isPasswordMatch) {
      return NextResponse.json(
        { message: 'invalid password' },
        { status: 400 },
      );
    }
    const cookie = setCookie({
      id: user.id,
      username: user.username,
      isAdmin: user.isAdmin,
    });
    return NextResponse.json(
      { message: 'authinticated' },
      { status: 200, headers: { 'Set-Cookie': cookie } },
    );
  } catch (error) {
    return NextResponse.json({ message: 'server error' }, { status: 500 });
  }
}

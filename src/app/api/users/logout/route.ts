import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
/**
 * @method GET
 * @route ~/api/users/logout
 * @description logout user
 * @access public
 */

export function GET(request: NextRequest) {
  try {
    cookies().delete('JwtToken');
    return NextResponse.json(
      { message: 'logout successfully' },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'internal server error' },
      { status: 500 },
    );
  }
}

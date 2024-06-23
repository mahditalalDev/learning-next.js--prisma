import { NextRequest, NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const jwtToken = request.cookies.get('JwtToken');
  const token = jwtToken?.value as string;

  if (!token) {
    return NextResponse.json(
      { message: 'not token provided,access denied from middleware' },
      { status: 401 },
    );
  }
  //   return NextResponse.redirect(new URL('/home', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/api/users/profile/:path*'],
};

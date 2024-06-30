import { JWTPayloadType } from './types';
import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

export function verifyToken(request: NextRequest): JWTPayloadType | null {
  try {
    const jwtToken = request.cookies.get('JwtToken');
    const authToken = jwtToken?.value as string;
    const privateKey = process.env.JWT_SECRET as string;
    const userFromToken = jwt.verify(authToken, privateKey) as JWTPayloadType;
    return userFromToken;
  } catch (error) {
    return null;
  }
}
export function verifyTokenForPage(token: string): JWTPayloadType | null {
  try {
    const privateKey = process.env.JWT_SECRET as string;
    const userPayload = jwt.verify(token, privateKey) as JWTPayloadType;
    if (!userPayload) return null;

    return userPayload;
  } catch (error) {
    return null;
  }
}

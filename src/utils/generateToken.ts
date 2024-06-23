import jwt from 'jsonwebtoken';
import { JWTPayloadType } from './types';
import { serialize } from 'cookie';

// generate token
export function generateJWT(jwtPayload: JWTPayloadType): string {
  const privateKey = process.env.JWT_SECRET as string;
  const token = jwt.sign(jwtPayload, privateKey, {
    expiresIn: '1d',
  });
  return token;
}
//set cookie with jwt
export function setCookie(jwtPayload: JWTPayloadType): string {
  const token = generateJWT(jwtPayload);
  const cookie = serialize('JwtToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', //development http,production true
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 * 30, //30days
  });
  return cookie;
}

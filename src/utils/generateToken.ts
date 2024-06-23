import jwt from 'jsonwebtoken';
import { JWTPayloadType } from './types';
export function generateJWT(jwtPayload: JWTPayloadType): string {
  const privateKey = process.env.JWT_SECRET as string;
  const token = jwt.sign(jwtPayload, privateKey, {
    expiresIn: '1d',
  });
  return token;
}

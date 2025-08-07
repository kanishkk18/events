import { compare, hash } from 'bcryptjs';
import env from './env';
import type { AUTH_PROVIDER } from '../types';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { config } from './config'

export async function hashPassword(password: string) {
  return await hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return await compare(password, hashedPassword);
}

function getAuthProviders() {
  return env.authProviders?.split(',') || [];
}

export function isAuthProviderEnabled(provider: AUTH_PROVIDER) {
  return getAuthProviders().includes(provider);
}

export function authProviderEnabled() {
  return {
    github: isAuthProviderEnabled('github'),
    google: isAuthProviderEnabled('google'),
    email: isAuthProviderEnabled('email'),
    saml: isAuthProviderEnabled('saml'),
    credentials: isAuthProviderEnabled('credentials'),
  };
}

export type AccessTokenPayload = {
  userId: string
}

export const hashValue = async (value: string, saltRounds: number = 10) =>
  await bcrypt.hash(value, saltRounds)

export const compareValue = async (value: string, hashedValue: string) =>
  await bcrypt.compare(value, hashedValue)

export const signJwtToken = (payload: AccessTokenPayload) => {
  const token = jwt.sign(payload, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRES_IN,
    audience: ["user"],
  })

  const decodedToken = jwt.decode(token) as jwt.JwtPayload | null
  const expiresAt = decodedToken?.exp ? decodedToken.exp * 1000 : null

  return {
    token,
    expiresAt,
  }
}

export const verifyJwtToken = (token: string): AccessTokenPayload => {
  return jwt.verify(token, config.JWT_SECRET, {
    audience: ["user"],
  }) as AccessTokenPayload 
}
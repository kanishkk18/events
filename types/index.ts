export type AUTH_PROVIDER = 'github' | 'google' | 'email' | 'saml' | 'credentials';

export interface User {
  id: string;
  name: string;
  email: string;
  username?: string;
  imageUrl?: string;
}

export interface AuthSession {
  user: User;
  token: string;
  expiresAt: number;
}
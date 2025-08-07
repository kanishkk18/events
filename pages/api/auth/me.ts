import { NextApiRequest, NextApiResponse } from 'next';
import { verifyJwtToken } from '../../../lib/auth';
import { prisma } from '../../../lib/prisma';
import { HTTPSTATUS } from '../../../lib/http-status';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const token = req.headers.authorization?.replace('Bearer ', '') || 
                  req.cookies['auth-token'];

    if (!token) {
      return res.status(HTTPSTATUS.UNAUTHORIZED).json({ message: 'No token provided' });
    }

    const payload = verifyJwtToken(token);
    
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        imageUrl: true,
      },
    });

    if (!user) {
      return res.status(HTTPSTATUS.NOT_FOUND).json({ message: 'User not found' });
    }

    res.status(HTTPSTATUS.OK).json({ user });
  } catch (error) {
    console.error('Auth verification error:', error);
    res.status(HTTPSTATUS.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
}
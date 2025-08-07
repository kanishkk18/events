import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import { compareValue, signJwtToken } from '../../../lib/auth';
import { LoginSchema } from '../../../lib/validation';
import { withErrorHandling, withValidation } from '../../../lib/middleware-pages';
import { HTTPSTATUS } from '../../../lib/http-status';
import { NotFoundException, UnauthorizedException } from '../../../lib/errors';

const handler = withValidation(
  LoginSchema,
  async (req: NextApiRequest, res: NextApiResponse, data: any) => {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }

    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    const isPasswordValid = await compareValue(data.password, user.password!);
    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid email/password");
    }

    const { token, expiresAt } = signJwtToken({ userId: user.id });

    const { password, ...userWithoutPassword } = user;

    res.status(HTTPSTATUS.OK).json({
      message: "User logged in successfully",
      user: userWithoutPassword,
      accessToken: token,
      expiresAt,
    });
  }
);

export default withErrorHandling(handler);
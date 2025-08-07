import { NextApiRequest, NextApiResponse } from 'next';
import { verifyJwtToken } from './auth';
import { HTTPSTATUS } from './http-status';
import { AppError } from './errors';

export function withAuth(handler: (req: NextApiRequest, res: NextApiResponse, userId: string) => Promise<void>) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const token = req.headers.authorization?.replace('Bearer ', '') || 
                    req.cookies['auth-token'];

      if (!token) {
        return res.status(HTTPSTATUS.UNAUTHORIZED).json({ message: 'Authentication required' });
      }

      const payload = verifyJwtToken(token);
      return await handler(req, res, payload.userId);
    } catch (error) {
      console.error('Auth middleware error:', error);
      return res.status(HTTPSTATUS.UNAUTHORIZED).json({ message: 'Authentication failed' });
    }
  };
}

export function withErrorHandling(handler: (req: NextApiRequest, res: NextApiResponse, ...args: any[]) => Promise<void>) {
  return async (req: NextApiRequest, res: NextApiResponse, ...args: any[]) => {
    try {
      return await handler(req, res, ...args);
    } catch (error) {
      console.error('API Error:', error);

      if (error instanceof AppError) {
        return res.status(error.statusCode).json({
          message: error.message,
          errorCode: error.errorCode,
        });
      }

      return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
        message: 'Internal Server Error'
      });
    }
  };
}

export function withValidation<T>(
  schema: any,
  handler: (req: NextApiRequest, res: NextApiResponse, data: T, ...args: any[]) => Promise<void>
) {
  return async (req: NextApiRequest, res: NextApiResponse, ...args: any[]) => {
    try {
      let data: any;

      if (req.method === 'GET') {
        data = { ...req.query, ...args[0] };
      } else {
        data = req.body;
      }

      const validatedData = schema.parse(data);
      return await handler(req, res, validatedData, ...args);
    } catch (error: any) {
      if (error.errors) {
        return res.status(HTTPSTATUS.BAD_REQUEST).json({
          message: 'Validation failed',
          errors: error.errors.map((err: any) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        });
      }

      throw error;
    }
  };
}
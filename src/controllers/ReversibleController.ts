import { Request, Response, NextFunction } from 'express';
import { handleError } from '../errors/handleError';

export async function check(req: Request, res: Response, next: NextFunction) {
  try {
    const { number }: { number: number } = req.body as any;
    const result = [];

    return res.status(200).json({
      status: 'success',
      result
    });
  } catch (err) {
    return handleError(res, 400, err.message ? err.message : err);
  }
}

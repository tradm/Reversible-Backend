import { Request, Response, NextFunction } from 'express';
import { handleError } from '../errors/handleError';
import * as ReversibleService from '../services/ReversibleService';

export async function check(req: Request, res: Response, next: NextFunction) {
  try {
    const { number }: { number: number } = req.body as any;
    const result = [];
    for (let i = 1; i < number; i ++) {
      if (ReversibleService.reversibleCheck(i)) {
        result.push(i);
      }
    }

    return res.status(200).json({
      status: 'success',
      result
    });
  } catch (err) {
    return handleError(res, 400, err.message ? err.message : err);
  }
}

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

// Optimized Solution
// export const check = (number: number): number[] => {
//   const numbers = Array.from({length: number}, (_, i) => i + 1);
//   return numbers.filter(n => n % 10 !== 0 && isReversible(n + reversedNum(n)))
// }
//
// const reversedNum = num => parseFloat(num.toString().split('').reverse().join(''))
//
// const isReversible = (number: number): Boolean => Array.from(number.toString()).map(Number).every(n => n % 2);
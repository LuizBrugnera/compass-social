import { Request, Response, NextFunction } from 'express';

export const validateDataComment = (req: Request, res: Response, next: NextFunction) => {
  const comment = req.body.comment;

  const commentMaxLen = 1000;
  if (comment && comment.length > commentMaxLen ) {
  return res.status(400).json({ error: 'Invalid field length.' });
  }
  next();
};

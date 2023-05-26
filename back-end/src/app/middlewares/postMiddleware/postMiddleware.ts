import { Request, Response, NextFunction } from 'express';

export const validateDataPost = (req: Request, res: Response, next: NextFunction) => {
  req.body.likes = 0;
  req.body.comments = [];
  req.body.post_date = new Date();

  const url_imagem = req.body.url_imagem || '';
  const description = req.body.description || '';

  const nameMaxLen = 1500;
  const userMaxLen = 1500;
  if (url_imagem && url_imagem.length > nameMaxLen || description && description.length > userMaxLen) {
  return res.status(400).json({ error: 'Invalid field length.' });
  }
  if(!url_imagem && !description){
    return res.status(400).json({ error: 'All fields not content.' });
  }
  next();
};

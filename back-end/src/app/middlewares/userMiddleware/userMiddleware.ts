import { Request, Response, NextFunction } from 'express';

export const validateDataUser = (req: Request, res: Response, next: NextFunction) => {
    const name = req.body.name;
    const user = req.body.user;
    const password = req.body.password;
    const email = req.body.email;
    const profile_photo = req.body.profile_photo || '';

    req.body.profile_photo = req.body.profile_photo || '';

    const nameMaxLen = 100;
    const userMaxLen = 100;
    const passwordMaxLen = 200;
    const emailMaxLen = 200;
    const profilePhotoMaxLen = 1500;
  
    if (name.length > nameMaxLen || user.length > userMaxLen || password.length > passwordMaxLen || 
        email.length > emailMaxLen || (profile_photo && profile_photo.length > profilePhotoMaxLen)) {
      return res.status(400).json({ error: 'Invalid field length.' });
    }
  
    next();
  };



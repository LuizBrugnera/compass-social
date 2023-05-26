import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { userModel } from "../../models/User";
import { Request, Response, NextFunction } from "express";
dotenv.config();

async function login(user: string, password: string) {
  return userModel
    .findOne({ user, password })
    .exec()
    .then((user) => {
      if (!user) {
        throw new Error("incorrect username or password");
      }
      const payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
        user: user.user,
        birthdate: user.birthdate,
        profile_photo: user.profile_photo,
      };
      const token = jwt.sign(payload, process.env.SECRET!, {
        expiresIn: "12h",
      });
      return token;
    });
}

export const securityController = {
    login: async (req: Request, res: Response) => {
      try {
        const user = req.body.user || "";
        const password = req.body.password || "";
        const token = await login( user, password);
        res.status(201).json({
          response: token,
          msg: "token created successfully",
        });
      } catch (error) {
        res.status(500).json({ error: error });
      }
    },
    checkJWT : (req: any, res: Response, next: NextFunction) => {
        const token = req.headers['x-access-token'];
        if (!token) {
          return res.status(401).json({
            auth: false,
            message: 'No token received',
          });
        }
        jwt.verify(token as string, process.env.SECRET as string, function (err, decoded) {
          if (err) {
            return res.status(500).json({
              auth: false,
              message: 'Error authenticating token',
            });
          }
          req.decodedUser = decoded;
          next();
        });
      }
}
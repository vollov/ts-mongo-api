import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { Config } from "../cfg";
import log from "../lib/logger";
import { expire, register } from "../lib/redis";
import User from "../models/users";

export class AuthController {
  private cfg: Config;

  constructor() {
    this.cfg = new Config();
  }
  // lookup db an generate jwt
  // assume username and pwd is not null
  public login = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.username) {
      return res.status(401).json({
        message: "username required"
      });
    }

    if (!req.body.password) {
      return res.status(401).json({
        message: "password required"
      });
    }

    try {
      const user: any = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(401).json({
          message: "username not existing"
        });
      }
      // TODO: validate password

      // login will overwrite jwt token
      const token: string = user.generateJWT();
      const key: string = "duocun:auth:" + user.username;
      await register(key, token);
      await expire(key, this.cfg.token.expire_in_seconds);

      return res.status(200).json({
        token
      });
    } catch (error) {
      log.error("failed to find user");
    }

    // Mall.find({}, (err, data) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.json(data);
    // });
  }

  // verify with redis service
  // public authenticate = () => { }
}

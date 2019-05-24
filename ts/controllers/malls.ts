import { NextFunction, Request, Response } from "express";
import * as mongoose from "mongoose";
import Mall from "../models/malls";

export class MallController {
  public get = (req: Request, res: Response, next: NextFunction) => {
    Mall.find({}, (err, data) => {
      if (err) {
        res.send(err);
      }
      res.json(data);
    });
  }
}

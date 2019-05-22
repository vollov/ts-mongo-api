import { NextFunction, Request, Response } from "express";
import * as mongoose from "mongoose";
import MallSchema from "../models/malls";

const Mall = mongoose.model("Mall", MallSchema);
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

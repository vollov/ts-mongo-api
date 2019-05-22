import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express, { Request, Response } from "express";

import mongoose from "mongoose";

import Middleware from "./lib/middleware";
import auth from "./routes/auth";
import mall from "./routes/malls";

import { Config } from "./cfg";

class App {
  public app: express.Application;
  private middleware: Middleware;
  private cfg: Config;

  constructor() {
    this.app = express();
    this.middleware = new Middleware();
    this.cfg = new Config();
    this.config();
    this.mongoSetup();
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.cfg.db.url, { useNewUrlParser: true });
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    const authMiddleware = [
      this.middleware.header,
      this.middleware.authenticate
    ];

    this.app.use(this.cfg.app.root + "/", auth);
    this.app.all("*", authMiddleware);
    // this.app.get( "/", ( req: Request, res: Response ) => {
    //     res.send( "Hello world!" );
    // });

    // malls router
    this.app.use(this.cfg.app.root + "/mall", mall);
  }
}

export default new App().app;

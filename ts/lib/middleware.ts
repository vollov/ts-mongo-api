import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Config } from "../cfg";
import log from "../lib/logger";
import { authenticate, expire, register } from "../lib/redis";

export default class Middleware {
  private cfg: Config;

  constructor() {
    this.cfg = new Config();
  }

  public header = (req: Request, res: Response, next: any) => {
    res.header("Access-Control-Allow-Origin", "*");

    res.header("Content-Type", "application/json; charset=utf-8");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "HEAD, GET, POST, PUT, DELETE, OPTIONS"
    );
    next();
  }

  public authenticate = (req: Request, res: Response, next: any) => {
    log.debug("middleware authenticate");

    const token = req.get("Authentication");
    if (token) {
      // get user id from token
      try {
        const payload = jwt.verify(token, this.cfg.token.secret);
        log.debug("payload={}", payload);
        // lookup user id
        // authenticate("duocun:auth:" + payload.username);

        // TODO: compare redis token
        next();
      } catch (err) {
        const message = "Authentication: bad token err=" + err;
        log.error(message);
        return res.status(401).send({ message });
      }
    } else {
      const message = "Authentication token is required.";
      return res.status(401).send({ message });
    }
  }
}

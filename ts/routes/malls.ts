import express, { NextFunction, Request, Response } from "express";

import uuid from "uuidv4";
import { MallController } from "../controllers/malls";
import log from "../lib/logger";

const router: express.Router = express.Router();
const mallController: MallController = new MallController();

let id = 0;
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  if (id === 5) {
    id = 0;
  }
  res.cookie("dummy-data", "cookie-id-" + id);
  id = id + 1;
  mallController.get(req, res, next);
});

export default router;

import express, { NextFunction, Request , Response} from "express";

import { AuthController } from "../controllers/auth";
import log from "../lib/logger";

const router: express.Router = express.Router();
const authController: AuthController = new AuthController();

router.post("/login", (req: Request, res: Response, next: NextFunction) => {
        authController.login(req, res, next);
});

export default router;

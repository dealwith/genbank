import { Router } from "express";

import AuthController from "../controllers/AuthController";

const authRouter = Router();

authRouter.post(`/sign-up`, AuthController.signUp);
authRouter.post(`/sign-in`, AuthController.signIn);

export default authRouter;

import { Router } from "express";

import { path } from "../constants/paths";
import isAuth from "../middlewares/isAuth";
import attachCurrentUser from "../middlewares/attachCurrentUser";
import roleRequired from "../middlewares/roleRequired";
import database from "../src/models";
import AuthController from "../controllers/AuthController";

const authRouter = Router();

authRouter.post(`${path.SIGN_UP}`, AuthController.signUp);

// authRouter.post(`${path.SIGN_IN}`,

//   isAuth,
//   attachCurrentUser,
//   roleRequired('super-admin'),
//   async (req, res) => {
//     const userEmail = req.body.email;
//  const userRecord = await database.User.findOne({ email: userEmail });

//     if (!userRecord) {
//       return res.status(404).send('User not found');
//     }

//     return res.json({
//       user: {
//         email: userRecord.email,
//         name: userRecord.name
//       },
//       jwt: this.generateToken(userRecord)
//     })
//       .status(200);
//   })

export default authRouter;

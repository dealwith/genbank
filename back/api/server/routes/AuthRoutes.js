import { Router } from 'express';

import isAuth from '../middlewares/isAuth';
import attachCurrentUser from '../middlewares/attachCurrentUser';
import roleRequired from '../middlewares/roleRequired';
import database from '../src/models';

const authRouter = Router();


authRouter.post('/auth/signin-as-user',
  isAuth,
  attachCurrentUser,
  roleRequired('super-admin'),
  (req, res) => {
    const userEmail = req.body.email;

    const userRecord = await UserModel.findOne({ email: userEmail });

    if (!userRecord) {
      return res.status(404).send('User not found');
    }

    return res.json({
      user: {
        email: userRecord.email,
        name: userRecord.name
      },
      jwt: this.generateToken(userRecord)
    })
      .status(200);
  })


export default authRouter 
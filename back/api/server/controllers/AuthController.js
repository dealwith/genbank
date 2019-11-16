import AuthServices from "../services/AuthServices";
import Util from "../utils/Utils";
import { argon2d } from "argon2";

const util = new Util();

export default class AuthController {
  static async signUp(req, res) {
    const user = req.body;
    try {
      const createdUser = await AuthServices.signUp(user);
      
      util.setSuccess(201, "User added!", createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async signIn(req, res) {
    const { email, password } = req.body;
    console.log(email, password);
    try {
      const loggedInUser = await AuthServices.signIn(email, password);
      console.log(loggedInUser);
      util.setSuccess(200, "Successfully logged in", loggedInUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

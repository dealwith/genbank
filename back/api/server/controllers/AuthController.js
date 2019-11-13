import AuthServices from "../services/AuthServices";
import Util from "../utils/Utils";

const util = new Util();

export default class AuthController {
  static async signUp(req, res) {
    const user = req.body;
    console.log(user);  
    try {
      const createdUser = await AuthServices.signUp(user);
      util.setSuccess(201, "User added!", createdUser);

      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  // static async SignIn(req, res) {
  // }
}

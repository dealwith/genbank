import AuthServices from '../services/AuthServices';
import Util from '../utils/Utils';

const util = new Util();

class AuthController {
  static async SignUp(req, res) {

    
    try {
      const createdUser = await AuthServices.SignUp();
      util.setSuccess(201, 'User added!', createdUser);

      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}
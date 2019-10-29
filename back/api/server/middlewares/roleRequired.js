import Util from '../utils/Utils';

const util = new Util();

export default (requiredRole) => {
  return (req, res, next) => {
    if (req.currentUser.role === requiredRole) {
      return next();
    } else {
      util.setError(401, 'Action nit allowed')
      return util.send(res)
    }
  }
}
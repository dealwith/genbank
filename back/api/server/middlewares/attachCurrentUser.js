import database from '../src/models';
import Util from '../utils/Utils'; 

export default async (req, res, next) => {
  const util = new Util();
  const decodedTokenData = req.tokenData;
  const userRecord = await database.User.findOne({
    id: decodedTokenData
  })

  req.currentUser = userRecord;

  if (!userRecord) {
    return util.setError(401, 'User not found');
  } else {
    return next();
  }
}

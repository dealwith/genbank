import database from '../src/models';
import Util from '../utils/Utils'; 

export default (req, res, next) => {
  const decodedTokenData = req.tokenData;
  const userRecord = await database.User.findOne({ 
    id: decodedTokenData
   });

   req.currentUser = userRecord;

   if (!userRecord) {
     return Util.setError(401, 'User not found');
   } else {
     return next();
   }
}
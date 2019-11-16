import database from "../src/models";
import Util from "../utils/Utils";

export default async (req, res, next) => {
  const util = new Util();
  const decodedTokenData = req.tokenData;
  const userRecord = await database.User.findOne({
    where: {
      id: decodedTokenData.id
    }
  });

  req.currentUser = userRecord;

  if (!userRecord) {
    util.setError(401, "User not found");
    return util.send(res);
  } else {
    return next();
  }
};

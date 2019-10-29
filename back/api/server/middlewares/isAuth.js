import * as jwt from 'express-jwt';

const getTokenFromHeader = req => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }
}

export default jwt({
  secret: 'THATS_AN_I3ECREAM',
  userProperty: 'token',
  token: getTokenFromHeader
})

const {verifyJwt} = require('../utils');


const authorize = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).send('A bearer token is required for authentication');
  }

  try {
    const decoded = await verifyJwt(token.split(' ')[1]);
    req.user = decoded.payload;
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }
  return next();
};

module.exports = authorize;

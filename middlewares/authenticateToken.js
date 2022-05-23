const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = authenticateToken = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1].toString() ;
  console.log(process.env.JWT_SECRET);
  // console.log(req.headers['authorization'])

  if (token === null)
    return res.status(401).json({
      auth: false,
      message: 'no authorization',
    });

  try {
    const verified = jwt.verify(token,"SECRET");
    req.user = verified;
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      auth: false,
      message: 'no access',
    });
  }

  next();
};

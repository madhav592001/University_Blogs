const jwt = require('jsonwebtoken');

module.exports = authenticateToken = async (req, res, next) => {

  const token = req.headers['authorization'];
  // console.log(req.headers['authorization']);

  if (token === null)
    return res.status(401).json({
      auth: false,
      message: 'no authorization',
    });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err)
      return res.status(403).json({
        auth: false,
        message: 'no access',
      });

    req.user = user;

    next();
  });
};

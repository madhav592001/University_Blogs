const router = require('express').Router();
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user) {
      return res.status(201).json({
        message: 'User already exist',
      });
    }
  });

  const new_user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  const newuser = await new_user.save();

  return res.status(200).json(newuser);
});

router.post('/login', async (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user) {
      if (user.authenticate(req.body.password)) {
        const userPayload = { id: user._id }; //* payload

        const accessToken = jwt.sign(userPayload, process.env.JWT_SECRET, {
          expiresIn: '3h',
        });
        const {hashPassword,...others} = user._doc ; 

        return res.status(200).json({
          jwt_token: accessToken,
          others  
        });
      } else {
        return res.status(201).json({
          message: 'Wrong Credentials!!',
        });
      }
    } else {
      return res.status(202).json({
        message: 'Wrong Credentials!',
      });
    }
  });
});

module.exports = router;

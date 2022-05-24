const router = require('express').Router();
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
require("dotenv").config() ; 

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
    password: req.body.pass,
  });

  const newuser = await new_user.save();

  return res.status(200).json(newuser);
});

router.post('/login', async (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user) {
      if (user.authenticate(req.body.pass)) {
        const userPayload = { id: user._id }; //* payload
        // console.log(process.env.JWT_SECRET)
        const accessToken = jwt.sign(userPayload, "SECRET");
        const {hashPassword,...others} = user._doc ; 

        return res.status(200).json({
          accessToken,
          "_id":others._id,
          "username": others.username,
          "email": others.email,
          "profilePic": others.profilePic,
          "createdAt": others.createdAt,
          "updatedAt": others.updatedAt,  
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

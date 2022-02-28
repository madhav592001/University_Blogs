const User = require('../models/userModel');
const router = require('express').Router();
const authenticateToken = require('../middlewares/authenticateToken');
const Blog = require('../models/blogModel');

//todo UPDATE
router.put('/', authenticateToken, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'internal server error!' });
  }
});

router.delete('/', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    Blog.deleteMany({ username: user.username });
  } catch (error) {
      console.log(error)
    return res.status(400).json('user not found');
  }
  try {
    await User.findByIdAndDelete(req.user.id);
    return res.status(200).json('User has been deleted');
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'internal server error!' });
  }
});

router.get("/",authenticateToken,async(req,res)=>{
    try {
        const user = await User.findById(req.user.id) ; 
        const {hashPassword,...others} = user._doc; 
        return res.status(200).json(others) ; 
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

module.exports = router;

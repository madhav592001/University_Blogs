const Blog = require('../models/blogModel');
const router = require('express').Router();
const User = require('../models/userModel');
const authenticateToken = require('../middlewares/authenticateToken');

//todo CREATE Blog
router.post('/', authenticateToken, async (req, res) => {


  
  const user = await User.findById(req.user.id);

  if (!user) {
    return res.status(401).json({
      message: 'User not found',
    });
  }

  if(!req.body.title || !req.body.desc){
    return res.status(401).json({
      "message":"Title or Description can't be empty"
    })
  }

  const newBlog = new Blog({
    title: req.body.title,
    desc: req.body.desc,
    username: user.username,
  });
  try {
    const savedBlog = await newBlog.save();
    res.status(200).json(savedBlog);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//todo UPDATE Blog
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const blog = await Blog.findById(req.params.id);
    if (blog.username === user.username) {
      try {
        const updatedBlog = await Blog.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedBlog);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can't update others Blog!");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//todo DELETE POST
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    const user = await User.findById(req.user.id);

    if (blog.username === user.username) {
      try {
        await blog.delete();
        res.status(200).json('Blog has been deleted...');
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json('You can delete only your Blog!');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//todo GET BLOG BY ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//todo GET ALL blogs
router.get('/your', authenticateToken, async (req, res) => {
  const user = await User.findById(req.user.id) ; 

  try {
    const blogs = await Blog.find({"username":user.username}) ; 
    return res.status(200).json(blogs)
  } catch (error) {
    console.log(error) ; 
    return res.status(402).json(error)
  }
});

//todo GET ALL THE BLOGS
router.get('/', async (req, res) => {
  const catName = req.query.cat;
  try {
    let blogs;
    if (catName) {
      blogs = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      blogs = await Blog.find();
    }
    return res.status(200).json(blogs);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;

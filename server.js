const express = require('express');
const dotenv = require('dotenv');
const connectdb = require('./db/conn');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require("./routes/userRoutes") ; 
const blogRoutes = require("./routes/blogRoutes")
const categoryRoutes = require("./routes/categoryRoutes")
const cors = require('cors');
const multer = require("multer")

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors('*'));

connectdb();

const storage = multer.diskStorage({
  destination:(req,file,cb) => {
    cb(null,"images")
  },filename:(req,file,cb) =>{
    cb(null,req.body.name)
  },
})

const upload = multer({storage:storage}) ; 

app.post("/upload",upload.single("file"),(req,res)=>{
  return res.status(200).json("File Has been uploaded successfully") ;
})
app.use('/auth', authRoutes);
app.use('/user',userRoutes) ; 
app.use("/blog",blogRoutes)  ;
app.use("/category",categoryRoutes)

//TODO LISTNER
const port = process.env.PORT;
app.listen(port,() => {
  console.log(`Server Listening on Port ${port}`);
});

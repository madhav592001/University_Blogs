const mongoose = require("mongoose") ;
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    }, 
    email:{
        type:String,
        required:true,
        unique:true
    } , 
    hashPassword:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        default:""
    },
},{timestamps:true}); 

userSchema.virtual('password').set(function (password) {
    this.hashPassword = bcrypt.hashSync(password, 10);
  });
  
  userSchema.methods = {
    authenticate: function (password) {
      return bcrypt.compareSync(password, this.hashPassword);
    },
  };

const User = mongoose.model("User",userSchema) ; 
module.exports = User ; 
const mongoose = require("mongoose") ;

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true
    }, 
    categories:{
        type:Array,
        required:false
    }
},{timestamps:true})

const Blog = mongoose.model("Blog",blogSchema) ; 
module.exports =  Blog; 
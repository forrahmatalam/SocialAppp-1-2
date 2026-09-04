                    
              //noteModel.js
/*  const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
}); 

const noteModel = mongoose.model("note", noteSchema);

module.exports = noteModel;  */






             //insta post model
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    image: String,
    caption: String
});

const postModel = mongoose.model("post", postSchema);

module.exports = postModel;


        // two types of data we store in dbs
/*1.  post ={
image:string,
caption:string
} */


/*2. user = {
name:string,
email:string,
password:string,
post:[post1,post2,post3]
} */
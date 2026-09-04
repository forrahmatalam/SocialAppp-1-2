const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const { username, email, password } = req.body;

const isUserAlreadyExists = await userModel.findOne({    //find krenge phele same emil exist kr rha tb niche return krenge
  email
})

if(isUserAlreadyExists){
  return res.status(409).json({
    message:"User Already Exists"
  })

  
}



  const user = await userModel.create({
    username,
    email,
    password,
  });

const token = jwt.sign({
  id:user._id
},process.env.JWT_SECRET)

res.cookie("token" ,token )   //is cookie me token save kr rhe hai

  res.status(201).json({
    message:"User Registerd Sucessfully",
    user,
    token
  });
}

module.exports = { registerUser };

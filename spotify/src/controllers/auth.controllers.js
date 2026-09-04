  //Yha api ke logics likhte hai 


  const userModel =require("../models/user.model");
  const jwt=require("jsonwebtoken");
  const bcrypt = require("bcryptjs");




  
  async function  registerUser(req,res) {

    const { username , email , password ,role= "user" } =req.body;

    const isUserAlreadyExists = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
    


    if(isUserAlreadyExists){
        return res.status(409).json({
            message:"User Already Exists"
        })
    }


const hash = await bcrypt.hash(password,10)

const user =await userModel.create({
    username,
    email,
    password :hash,
    role
})


const token =jwt.sign({     //jwt secret create kr rhe hai token ke lie 
    id:user.id,
    role:user.role,
},process.env.JWT_SECRET)

return res.status(201).json({
    message:"User registered successfully",
    user:{
        id:user._id,
        username:user.username,
        email:user.email,
        role:user.role
    }
})

  }


async function loginUser(req,res) {

    const { username , email ,password } =req.body;

    const user = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
    
    
    if(!user){
    return res.status(401).json({message:"invalid credentials"})
}

const isPasswordValid =await bcrypt.compare(password,user.password)

if(!isPasswordValid){
    return res.status(401).json({message:"invalid Password"})
}

const token = jwt.sign({
    id:user._id,
    role:user.role,
  },  process.env.JWT_SECRET )

  res.cookie("token",token)   //save token cookis me 
  res.status(200).json({
    message:"user logged in sucessfully",
    user:{
        id:user._id,
        username:user.username,
        email:user.email,
        role:user.role,
    }
})


}

async function logoutUser(req,res) {

    res.clearCookie("token")
    res.status(200).json({message:"User logout sucessfully"})
    
}






  module.exports = {registerUser ,loginUser ,logoutUser}

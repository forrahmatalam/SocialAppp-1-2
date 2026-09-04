const express=require('express');
const validationRules=require('./middlewares/validation.middleware');



const app = express();

app.use(express.json());

app.post("/register",validationRules.registerUserValidationRules(),validationRules.validateResult,(req,res)=>{
    const {username,email,password}=req.body;

    res.status(201).json({message:"User created successfully",user:{username,email,password}});
})

app.get("/",(req,res)=>{
    res.status(200).json({message:"Hello worldssss"});

    
})

module.exports=app;

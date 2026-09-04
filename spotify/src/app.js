const cookieParser = require('cookie-parser'); //cookie parser require
const express =require('express');  //express require 
const authRoutes=require('./routes/auth.routes');
const musicRoutes=require('./routes/music.routes');





const app = express();              //express call 

app.use(express.json());   //middle ware
app.use(cookieParser());   //middle ware


app.use('/api/auth',authRoutes);
app.use('/api/music',musicRoutes);

app.use((err,req,res,next)=>{
    if(err instanceof SyntaxError){
        return res.status(400).json({
            message:"Invalid JSON"
        })
    }

    next(err)
})


module.exports=app;

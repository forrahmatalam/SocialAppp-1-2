const express =require('express');
const authcontroller = require("../controllers/auth.controller")

const router=express.Router();

            /*Register Api*/
router.post("/register" ,authcontroller.registerUser);     

            //Get api
router.get("/test" ,(req,res)=>{

    console.log("Cookies" , req.cookies)
    res.json({
        message:"test route",
        cookies:req.cookies
    })
})

    




module.exports = router;

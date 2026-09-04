       //Api create krne ke lie 

       const express =require('express');
       const authcontroller = require('../controllers/auth.controllers');



       const router= express.Router();



            //Register api

        router.post('/register',authcontroller.registerUser)

        router.post('/login',authcontroller.loginUser)

        router.post('/logout',authcontroller.logoutUser)
        


       module.exports=router;

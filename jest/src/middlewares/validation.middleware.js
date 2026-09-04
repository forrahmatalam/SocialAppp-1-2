const {body,validationResult} = require("express-validator");


async function validateResult(req,res,next) {

    const error =validationResult(req);
    
    if(!error.isEmpty()) {
        return res.status(400).json({errors:error.array()});
    }
    next();
}

const registerUserValidationRules = () => {
        return [
                body("username").isString().isLength({min:3,max:20}).withMessage("Username must be a string").withMessage("Username must be between 3 and 20 characters"),
                body("email").isEmail().withMessage("Email must be a valid email"),
                body("password").isString().withMessage("Password must be a string"),
                validateResult
        ];
    };


    module.exports={
        registerUserValidationRules,
        validateResult
    }
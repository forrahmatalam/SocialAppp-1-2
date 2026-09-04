//isme jo repeatative code hai to optimize krte hia 

const jwt=require("jsonwebtoken");

async function authArtist(req,res,next) {   //middleware me 3 para hote hia req,res..
    
    const token =req.cookies.token;

    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }

try{

  const decoded =jwt.verify(token,process.env.JWT_SECRET)

  if(decoded.role !=="artist"){
     return res.status(403).json({message:"You don't have acess"})
  }

 

  req.user=decoded;
  next();

}catch(err){
    console.log(err);
    return res.status(401).json({message:"Unauthorized"})
}

}


async function authUser(req,res,next) {

    const token =req.cookies.token;

    if(!token) {
        res.status(401).json({message:"unauthorized"})
    }
    
    try{
       
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        if(decoded.role !=="user" ) {
            res.status(403).json({message:"You dont have access"})
        }

        req.user=decoded;
        next()

    }catch(err){
        console.log(err)
        res.status(401).json({message:"unauthorized"})
    }
}


module.exports={
    authArtist ,authUser
};

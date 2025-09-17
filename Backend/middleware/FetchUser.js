var jwt = require('jsonwebtoken');
require('dotenv').config();

const FetchUser= async(req,res,next)=>{
// get the user from the jwt token and add id to req object

const token =  req.header('auth-token');
if(!token){
    res.status(401).send({error: "Please authenteicate using a vaid token "}) ;   
}try {
    const data = jwt.verify(token, process.env.JWT_SECRET); 
req.user = data.user;
    next();
} catch (error) {
    res.status(401).send({error: "Please authenteicate using a vaid token "}) ; 
}



}

module.exports = FetchUser;
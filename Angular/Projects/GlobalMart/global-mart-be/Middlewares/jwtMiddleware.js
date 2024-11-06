const jwt = require("jsonwebtoken");
const jwtMiddleWare = (req,res,next)=>{
    try{
        const tokenHeader = req.headers['authorization'];
        if(tokenHeader){
            const token = tokenHeader.split(' ')[1];
            if(token){
                const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
                req.user = user;
                next();
            }        
        }
    }catch(err){
        console.log(err);
        res.status(401).json("Authorization Failed please login")
    }
   
}
module.exports = jwtMiddleWare;

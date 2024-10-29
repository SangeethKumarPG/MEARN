const jwt = require("jsonwebtoken");
exports.jwtMiddleWare = (req,res,next)=>{
    const tokenHeader = req.headers['authorization'];
    if(tokenHeader){
        const token = tokenHeader.split(' ')[1];
        if(token){
            jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
                if(err){
                    res.status(401).json({message: "Invalid Token"});
                }
                else{
                    req.userId = user;
                    next();
                }   
            })
        }        
    }
}
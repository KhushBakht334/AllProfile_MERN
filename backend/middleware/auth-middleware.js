const jwt=require("jsonwebtoken");
const User=require('../model/user-model');
const authMiddleware=async(req, res, next)=>{
    const token=req.header("Authorization");
    if(!token){
        return res.status(400).json("Unauthorized token. Not valid token");
    }
    const jwtToken=token.replace("Bearer", "").trim();
    console.log(jwtToken);
    try {
        const isVerified=jwt.verify(jwtToken, process.env.SECRET_KEY);
        console.log(isVerified);
        const userData=await User.findOne({email: isVerified.email}).select({
            password:0
        });
        console.log(userData);
        req.user=userData;
        req.token=token;
        req.userId=userData._id;
        next();

    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports=authMiddleware;
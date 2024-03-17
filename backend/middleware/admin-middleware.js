const adminMiddleware=async(req, res, next)=>{
    try {
        console.log(req.user);
        const adminRole=req.user.isAdmin;
        if(!adminRole){
            res.status(400).json("Unathorized. Youre not admin")
        }
        next();
    } catch (error) {
        console.log(error)
    }
}

module.exports=adminMiddleware;
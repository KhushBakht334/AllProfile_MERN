const errorMiddleware=(err, req, res, next)=>{
        const status=err.status || "NO STATUS"
        const message=err.message || "BACKEND ERROR"
        const extraDetails=err.extraDetails || "Internal Error"
        return res.status(status).json({message, extraDetails});
}
module.exports=errorMiddleware;
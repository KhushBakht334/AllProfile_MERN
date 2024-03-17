const Contact=require('../model/Contact-model');

const form=async(req, res)=>{
    try {
        const {username, email, message}=req.body;
        await Contact.create({username, email, message});
        res.status(200).json({msg:"Message sent successfully"});
    } catch (error) {
        next(error);
    }
}

module.exports={form}
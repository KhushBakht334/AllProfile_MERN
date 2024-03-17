const User=require("../model/user-model");


const register=async(req, res)=>{
    try {
        const {username, email, phone,password}=req.body;
        const userExist=await User.findOne({email:email});
        if(userExist){
            return res.status(400).json("User already Exists");
        }
        const userCreated=await User.create({username, email, phone,password});
        res.status(200).json({msg:"Registered successfully", token:await userCreated.generateToken(), id: userCreated._id.toString()});
    } catch (error) {
      res.status(400).json("Error");
    }
};
const login=async(req, res)=>{
    try {
        const {email, password}=req.body;
        const userExist=await User.findOne({email:email});
        if(!userExist){
            return res.status(400).json("User Doesn't Exist");
        }
        const validUser=await userExist.comparePassword(password);
        if(validUser){
            return res.status(200).json({msg:"Successfully login", token: await userExist.generateToken(), id: userExist._id.toString()});
        }else{
            res.status(400).json("Invalid Credentials");
        }
    } catch (error) {
        res.status(400).json("Error");
    }
};
//Get User Data
const user=async(req, res)=>{
    try {
        const userData=req.user;
        console.log(userData);
        res.status(200).json(userData);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports={register, login, user}
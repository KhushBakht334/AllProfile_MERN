const User=require("../model/user-model");
const Contact=require("../model/Contact-model");
const getAllUsers=async(req, res)=>{
    try {
        const users=await User.find({}, {password:0});
        if(!users || users.length==0){
            return res.status(400).json(error);
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json(error);
    }
}
const getUserByID=async(req, res)=>{
    try {
        const id=req.params.id;
       const user= await User.findOne({_id:id}, {password:0});
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error);
    }
}
const getAllContacts=async(req, res)=>{
    try {
        const contacts=await Contact.find({});
        if(!contacts || contacts.length==0){
            return res.status(400).json(error);
        }
        res.status(200).json(contacts);
    } catch (error) {
        res.status(400).json(error);
    }
}
const deleteUser=async(req, res)=>{
    try {
        const id=req.params.id;
        await User.deleteOne({_id:id});
        res.status(200).json("Successfully deleted");
    } catch (error) {
        res.status(400).json(error);
    }
}
const deleteContacts=async(req, res)=>{
    try {
        const id=req.params.id;
        await Contact.deleteOne({_id:id});
        res.status(200).json("Deleted successfully");
    } catch (error) {
        res.status(400).json(error);
    }
}
const updateUser=async(req, res)=>{
    try {
        const id=req.params.id;
        const updatesUserData=req.body;
       const updatedData= await User.updateOne({_id:id},{
            $set: updatesUserData
        })
        return res.status(200).json("User updated")
    } catch (error) {
        res.status(400).json(error);
    }
}
module.exports={getAllUsers, getAllContacts, deleteUser, deleteContacts, getUserByID,updateUser};
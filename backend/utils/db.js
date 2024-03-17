const mongoose=require('mongoose');

const URI=process.env.MONGODB_URI;
const connectDB=async(req, res)=>{
    try {
        await mongoose.connect(URI)
        console.log("Successfully connected to DB");
    } catch (error) {
        console.log("Not connected to DB")
    }
}

module.exports=connectDB;
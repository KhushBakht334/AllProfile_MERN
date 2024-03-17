const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
})
userSchema.pre("save",async function(next){
    try {
        const user=this;
        if(!user.isModified("password")){
            next();
        }
        const salt=10;
        const hash_password=await bcrypt.hash(user.password, salt);
        user.password=hash_password;
    } catch (error) {
        res.status(400).json("Cannot hash password");
    }
});
userSchema.methods.generateToken=async function(){
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin
        },
        process.env.SECRET_KEY,{
            expiresIn:'60d'
        }
        )
    } catch (error) {
        console.log(error);
    }
}
userSchema.methods.comparePassword=async function(password){
    return bcrypt.compare(password, this.password)
}
const User=new mongoose.model("User", userSchema);
module.exports=User;
const mongoose=require("mongoose");

//signup schema
const signupSchema=new mongoose.Schema({
    name:String,
    rollNumber:String,
    email:String,
    password:String,
    confirmPassword:String
});



const Signup=mongoose.model("Signup",signupSchema);

module.exports=Signup
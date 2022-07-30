const router=require("express").Router();
const jwt=require("jsonwebtoken");
const Signup = require('../models/User');
const bcrypt=require("bcrypt");

router.post("/signup",(req,res)=>{
    console.log('submit');
    console.log(req.body);
    const password=req.body.password;
    
    bcrypt.hash(password,10).then((hashpassword)=>{    
      const signup= new Signup({
        name:req.body.name,
        rollNumber:req.body.rollNumber,
        email:req.body.email,
        password:hashpassword
       });
       console.log("success");
       signup.save();
       res.send({success:"user registered successful"});
      });
     

});

router.post("/Login",(req,res)=>{
    const {userEmail,userPassword}=req.body;
    console.log(req.body);
    Signup.findOne({email:userEmail},(err,userLogin)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(userLogin);
           // console.log("not found");
            
            if(bcrypt.compare(userPassword,userLogin.password)){
                 console.log("found");
                 const accessToken=jwt.sign({
                    id:userLogin._id,
                   //isAdmin:user.isAdmin
                 },process.env.JWT_SEC,{expiresIn:"2d"});
    
                 res.status(200).json({userLogin,accessToken});    
            }
        }
    });
   
    
});


module.exports=router
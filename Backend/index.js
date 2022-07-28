const express=require("express");
const bodyParser=require("body-parser");
const { urlencoded } = require("body-parser");
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const https=require('https');
const cors=require("cors");


mongoose.connect("mongodb+srv://pankaj:pank1999@cluster0.hjqbxca.mongodb.net/collegeSpace?retryWrites=true&w=majority",(err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log("connetion successful");
  }
});
//const multer=require("multer");
//const GridFsStorage=require("multer-gridfs-storage");
//const Grid=require("gridfs-stream");

//creating storage engine

/*
const storage = new GridFsStorage({
    url: 'mongodb://localhost:27017/collegeSpace',
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'SyllabusUploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });

  const upload = multer({ storage });

*/

//signup schema


const signupSchema=new mongoose.Schema({
                   name:String,
                   rollNumber:String,
                   email:String,
                   password:String,
                   confirmPassword:String
                  });

//signup model

const Signup=mongoose.model("Signup",signupSchema);




const app=express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.post("/signup",(req,res)=>{
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


//Login post req
app.post("/Login",(req,res)=>{
    const {email,password}=req.body;
    console.log(req.body);
    Signup.findOne({email:email},(err,userLogin)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(userLogin);
            //console.log("not found");
            
            if(bcrypt.compare(password,userLogin.password)){
              console.log("found");
              res.send(userLogin);     
            }
        }
    });
   
    
});

//Edit Timetable Post req
app.post("/EditTimeTable",(req,res)=>{


});

//Upload Video Lectures
app.post("/UploadVideoLectures",(req,res)=>{


});

//Upload Notes
app.post("/UploadNotes",(req,res)=>{


});

//Upload Result
app.post("/UploadResut",(req,res)=>{


});

//Upload Syllabus
/*
app.post("/UploadSyllabus",upload.single(req.body),(req,res)=>{
    const SyllabusData=req.body;
    console.log(SyllabusData);
   // console.log(sem);
   res.json({Syllbus:req.body});
    console.log("Syllabus Data Recived");
});
*/




app.get("/",(req,res)=>{
    res.send("hello world");
});

app.listen(5000,()=>{
    console.log("server is running on port 5000");
});

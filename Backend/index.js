const express=require("express");

const cors=require("cors");
const {Signup} =require('./models/User');
const userRouter = require("./routes/User");
const authRoute=require("./routes/Auth");
const dotenv = require('dotenv');
const multer=require("multer");
const mongoose=require("mongoose");


dotenv.config();

mongoose.connect(process.env.MONGO_URL,(err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log("connetion successful");
  }
});

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


const app=express();


app.use(express.json());
app.use(cors());

app.use("/api",authRoute);


app.get("/",(req,res)=>{
    res.send("hello world");
});

app.listen(5000,()=>{
    console.log("server is running on port 5000");
});

const router=require("express").Router();



// Get user 
// router.get("/find/:id",verifyTokenAndAdmin,async(req,res)=>{
//     try
//      {
//        const user= await User.findById(req.params.id);
//        const {password,...other}=user._doc;
//         res.status(200).json(other);
//      }
//     catch(err)
//     {
//        res.status(500).json(err);
//     }
  
//   });
  




module.exports=router
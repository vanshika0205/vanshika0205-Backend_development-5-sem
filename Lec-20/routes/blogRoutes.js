const express=require("express");
const { isLogin } = require("../middleware/middleware");

const router=express.Router();
router.use(isLogin);
router.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"all blogs fetched"
    })
})

router.get("/:id",(req,res)=>{
    res.json({
        success:false,
        message:"blog data fetched by id"
    })
})
router.post("/",(req,res)=>{
    res.json({
        success:true,
        message:"blog added successfully"
    })
})
module.exports.router=router;
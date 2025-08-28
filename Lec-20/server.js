const express = require("express");
const{m1,m2,checkAdmin}=require("./middleware/middleware");
let blogRoutes=require("./routes/blogRoutes")
const app = express();
app.use(express.static(__dirname+"/public"))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(m1)
// app.use(m2)
app.get("/home",(req,res)=>{
    console.log("running controller home");
    res.json({
        success:true,
        message:"welcome to home page"
    })
    next()
})
app.use(m2)
app.get("/dashboard",checkAdmin,(req,res)=>{
    if(req.isAdmin){
        return res.json({
            success:true,
            message:"admin dashboard"
        })
    }
    return res.json({
        success:false,
        message:"not authorized"
    })
})
app.use("/api/blogs",blogRoutes.router)
app.listen(3000,()=>{
    console.log("server running on port 3000");
})
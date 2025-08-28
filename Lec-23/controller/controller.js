const Blog = require("../model/blog");
const USER = require("../model/user");
const jwt = require("jsonwebtoken");


module.exports.postAddUser = async (req,res)=>{
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let user={
        username:username,
        email:email,
        password:password
    }
    let newUser =  new USER(user);
    await newUser.save();//data add in mongoose using save method this is and IO operation
    //await is used in all function of db

    res.json({
        success:true,
        message:"user added successfully",
        data:newUser
    })
}

module.exports.getFetchUser = async(req,res)=>{ //fetch data using find method
    let allUsers = await USER.find();
    res.json({
        success:true,
        message:"all User fetch successffully",
        data:allUsers
    })
}

module.exports.getFetchUserById = async(req,res)=>{//finding blog by their id name
    let id = req.params.id;
    //we can use findBYiD and findByOne
    let user = await USER.findById(id);
    res.json({
        success:true,
        message:"One user fetch successfully",
        data:user
    })
}

module.exports.postLoginCheck = async(req,res)=>{
    let {email,password} = req.body;
    let userExist = await USER.findOne({email:email});
    if(!userExist){
        return res.json({
            success:false,
            message:"please signup"
        })
    }
    if(userExist.password!=password){
        return res.json({
            success:true,
            message:"invalid user...",
        })
    }
    let token = jwt.sign({"userId":userExist._id},"okkk") //(user,secret key);
    return res.json({
        success:true,
        message:"login in successfully",
        token:token
    })
}

module.exports.postAddBlog = async (req,res)=>{
    let title = req.body.title;
    let body = req.body.body;
    let userId = req.userId;

    let getUser = await USER.findById(userId);
    if(!getUser){
        return res.json({
            success:false,
            message:"User not found"
        })
    }
    
    let blog = {
        title:title,
        body:body,
        date:Date.now(),
        userId:userId
    }
    let newBlog =  new Blog(blog);





    
    getUser.blogs.push(newBlog._id); //getuser jo banaya hai . blogs jo array hai  . method to push in array
    await getUser.save();





    
    await newBlog.save();//data add in mongoose using save method this is and IO operation
    //await is used in all function of db

    res.json({
        success:true,
        message:"blog added successfully",
        data:newBlog
    })


}

module.exports.getFetchBlog = async(req,res)=>{ //fetch data using find method
    let allBlogs = await Blog.find();
    res.json({
        success:true,
        message:"all blogs fetch successffully",
        data:allBlogs
    })
}

module.exports.deleteBlogById = async(req,res)=>{
    let blogId = req.params.blogId;
    let userId = req.body.userId;

    let blogExist = await Blogs.findById(blogId);
    if(!blogExist){
        return res.json({
            success:false,
            message:"blog not found"
        })
    }
    if(blogExist.userId!=userId){
        return res.json({
            success:false,
            message:"you are not the owner of this blog"
        })
    }
    await Blog.findByIdAndDelete(blogId);
    //homework ki user ko update bhi krna hai ...
}
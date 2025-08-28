const User = require("../model/user");

module.exports.users=async (req, res) => {
    let allUsers = await User.find();
    res.json({
        success: true,
        message: "All users fetched successfully",
        data: allUsers
    });
}
module.exports.newuser= async (req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let user = {
        name : name,
        email : email,
        password : password
    }
    let newUser = new User(user)
    await newUser.save()
    res.json({
        success : true,
        message : "user added successfully",
        data : newUser
    })
}
module.exports.getuserbyid= async(req,res)=>{
    let id = req.params.id;
    let user = await User.findById(id);
    res.json({
        success : true,
        message : "user fetched successfully",
        data : user
    })
}
module.exports.login= async(req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.findOne({email:email,password:password});
    if(!user){
        return res.json({
            success : false,
            message : "Invalid credentials"
        })
    }
    res.json({
        success : true,
        message : "Login successful",
        data : user
    })
}
module.exports.deleteuser= async(req,res)=>{
    let id = req.params.id;
    let user = await User.findById(id);
    if(!user){
        return res.json({
            success : false,
            message : "User not found"
        })
    }
    await User.findByIdAndDelete(id);
    res.json({
        success : true,
        message : "User deleted successfully"
    })
}
module.exp
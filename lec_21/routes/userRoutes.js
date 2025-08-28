const express=require('express');
const router=express.Router();
exports.router = router;
const usersController = require("../controller/userController");


router.get("/",usersController.users);

// create user
router.post("/",usersController.newuser);
// read single user
router.get("/users/:id",usersController.getuserbyid);
router.delete("/users/:id",usersController.deleteuser);
router.post("/login",usersController.login);

module.exports=router;

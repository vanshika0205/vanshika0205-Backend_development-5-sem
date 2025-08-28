const express = require("express");
const router = express.Router();
const {postAddUser,getFetchUser,getFetchUserById} = require("../controller/controller")
//create
router.post("/",postAddUser);

router.get("/fetchuser",getFetchUser);

router.get("/fetchuser/:id",getFetchUserById);

module.exports = router;
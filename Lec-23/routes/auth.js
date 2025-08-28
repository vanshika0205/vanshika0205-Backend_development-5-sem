const express = require("express");
const router = express.Router();
const {postLoginCheck} = require("../controller/controller")

router.post("/",postLoginCheck);

module.exports = router;

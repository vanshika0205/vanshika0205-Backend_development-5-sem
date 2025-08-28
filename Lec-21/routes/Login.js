const express = require("express");
const router = express.Router();
const UserModel = require("../model/user");  

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email, password });

        if (user) {
            res.json({
                success:true,
                message:"login successful..."
            });
        } else {
            res.json({
                success:false,
                message:"invalid user..."
            });
        }
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;

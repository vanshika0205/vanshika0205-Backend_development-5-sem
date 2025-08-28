const express = require("express");
const app = express();
const mongoose  = require("mongoose");
app.use(express.urlencoded({extended:true}));
app.use(express.json());


let loginRoutes = require("./routes/Login")
let registerRoutes = require("./routes/Register")

app.use("/api/login",loginRoutes);
app.use("/api/register",registerRoutes);





mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => console.log('Connected!'));

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
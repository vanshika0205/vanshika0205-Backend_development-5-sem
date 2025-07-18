const express = require("express");
const app=express();

// console.log(app);

app.get("/",(req,res)=>{
    console.log(req);
    //res.send("hello world")// text
    //res.send("<h1>hello world</h1>") //html
    res.json({name:"vanshika",
        address:"ambala",
        islogin:true
    })
})

//path param/variable !
// 1.paramas
app.get("/user/:id",(req,res)=>{
    console.log(req.params.id);
    let id = req.params.id;
    res.send(id);
    res.send("ok");
})
// 2. query 
app.get("/blogs",(req,res)=>{
    console.log(req.query.title);
     console.log(req.query.desc);

    res.send("got this");
})

app.listen(2220,()=>{
    console.log("server running on 2220");

}) // port is communication end point
const express = require("express");
const app = express();
const mongoose = require('mongoose');



mongoose.connect("mongodb://localhost:27017/login")
.then(()=>{
    console.log("mongo connected successfully")
})
.catch((e)=>{
    console.log("failed to connect");
})

app.get("/", function(req, res){
    res.render("hello world")

})
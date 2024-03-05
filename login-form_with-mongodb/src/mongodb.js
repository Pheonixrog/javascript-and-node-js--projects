const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/login")
.then(()=>{
    console.log("mongo connected successfully")
})
.catch((e)=>{
    console.log("failed to connect");
})

const LogInSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    }, 

    password:{
        type: String,
        required: true,
    }
});

const collection1 = new mongoose.model("collection1",LogInSchema)
module.exports = collection1
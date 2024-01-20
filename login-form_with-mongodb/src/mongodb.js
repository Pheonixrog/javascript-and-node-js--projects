const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://rishabhasus9:%23Pheonix9@cluster0.sdjhwco.mongodb.net/")
.then(()=>{
    console.log("mongo connected successfully")
})
.catch(()=>{
    console.log("failed to connect");
})

const LogInSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true,
    }, 

    password:{
        type: 'string',
        required: true,
    }
});

const collection = new mongoose.model("collection1",LogInSchema)
module.exports = collection
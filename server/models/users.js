const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
     name:{
        type:String,
        required: true,
     },
     age:{
        type: Number,
        required: true,
     },
     username: {
        type: String,
        required: true,
     },     
     password: {
        type: String,
        required: true,
     },
});

const usermodel = mongoose.model("users", userSchema);
module.exports = usermodel;
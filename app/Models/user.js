const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fname: {
        type : String,
        required : true
    },
    lname: {
        type : String,
        required : true
    },
    username: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    password: {
        type : Number,
        required : true
    },
    role: {
        type : Number,
        required : true,
        default : 1
    }
},{timestamps : true})

const User = mongoose.model("User", userSchema)

module.exports = User 
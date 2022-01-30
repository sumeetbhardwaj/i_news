const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true
    },
    discriptions: {
        type : String,
        required : true
    },
    category: {
        type : Number,
        required : true
    },
    author: {
        type : Number,
        required : true
    },
    images: {
        type : String,
    }
},{timestams : true})

const Post = mongoose.model("Post", postSchema)

module.exports = Post 
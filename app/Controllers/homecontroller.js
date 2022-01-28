// const express = require("express");
const home = (req, res, next) => { 
    res.render("index")
}
const single = (req, res, next) => { 
    res.render("single");
}
const category = (req, res, next) => { 
    res.render("category");
}
const author = (req, res, next) => { 
    res.render("author");
}
const search = (req, res, next) => { 
    res.render("search");
}

module.exports =  { home, single, category, author, search } 
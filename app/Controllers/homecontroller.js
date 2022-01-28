// const express = require("express");
const home = (req, res, next) => { 
    res.send("hello home");
}
const contact = (req, res, next) => { 
    res.send("contact  us");
}

module.exports =  { home, contact } 
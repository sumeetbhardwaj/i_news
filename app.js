require("dotenv").config();
const express = require("express");
const path  = require("path");
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello IB News ')
  })

app.listen(port, () => { 
    console.log(`Server run on post ${port}`);
})
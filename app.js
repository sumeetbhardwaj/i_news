require("dotenv").config();
const express = require("express");
const path  = require("path");
const hbs = require("hbs");
const bodyParser = require("body-parser")
require("./config/database");

const router = require('./routes/routers');
const { json } = require("express/lib/response");
const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use("/bootstrap_css",express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use("/bootstrap_js",express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use("/jquery",express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/public',express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
hbs.registerPartials(path.join(__dirname, 'resources/templates'));

app.listen(port, () => { 
    console.log(`Server run on post ${port}`);
})
app.use('',router)
const mongoose = require("mongoose")
const host = process.env.DB_HOST;
mongoose.connect(host,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => { console.log("connection okay")})
.catch((error) => { console.log(error)})
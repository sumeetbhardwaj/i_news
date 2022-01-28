const express =require("express")
const router = express.Router()
const homeCon = require('../app/Controllers/homecontroller');

router.get('/', homeCon.home);
router.get('/contact', homeCon.contact);


module.exports = router 



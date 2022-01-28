const express =require("express")
const router = express.Router()
const homeController = require('../app/Controllers/homecontroller');
const adminController = require("../app/Controllers/adminController");

// front end router
router.get('/', homeController.home);
router.get('/single', homeController.single);
router.get('/category', homeController.category);
router.get('/author', homeController.author);
router.get('/search', homeController.search);


// admin router
router.get('/admin', adminController.home)

module.exports = router 



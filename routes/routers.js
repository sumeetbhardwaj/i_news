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
router.get('/admin/post', adminController.post)

router.get('/admin/add_post', adminController.add_post)

//category routers
router.get('/admin/category', adminController.category)
router.get('/admin/add_category', adminController.add_category)
router.post('/admin/add_category', adminController.add_category)
router.get('/admin/update_category', adminController.update_category)
router.post('/admin/update_category', adminController.update_category)
router.get('/admin/delete_category', adminController.delete_category)

router.get('/admin/add_user', adminController.add_user)


router.get('/admin/update_post', adminController.update_post)
router.get('/admin/update_user', adminController.update_user)
router.get('/admin/users', adminController.users)

module.exports = router 



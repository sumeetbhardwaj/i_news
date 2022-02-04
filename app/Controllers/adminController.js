const Post = require("../Models/post")
const Category = require("../Models/category")
const User = require("../Models/user")
const async = require("hbs/lib/async")


//Login controllers
const home = (req, res, next) => { 
    res.render("admin/index")
}
//Post controllers
const post = async(req, res, next) => { 
    try{
        var getAllPost = await Post.find().populate('category').sort({createdAt:-1});
        res.render("admin/post", {title: "POSTS", getAllPost : getAllPost})

    } catch(error){
        res.status(500).send(error)
    } 
}
const add_post = async(req, res, next) => {
    try{
        var getAllCat = await Category.find()

    } catch(error){
        res.status(500).send(error)
    } 
    if(req.method == 'POST'){
        if(!req.body.post_title || !req.body.postdesc || !req.body.category){
            let msg = "Please Fill out all fields"
            res.render("admin/add_post", {title: "ADD POST", getAllCat : getAllCat, msg: msg})
        } else {
            try{
                let post = new Post({
                    title:req.body.post_title,
                    discriptions:req.body.postdesc,
                    category:req.body.category
                })
                let post_id = await post.save();
                let getCatPost = await Post.count({category: post_id.category});
                await Category.findByIdAndUpdate({_id:post_id.category}, {postCount:getCatPost}, { useFindAndModify: false})
                res.status(201).redirect('/admin/post');
        
            } catch(error){
                res.status(500).send(error)
            }
        }
    } else {
        res.render("admin/add_post", {title: "ADD POST", getAllCat : getAllCat})
    }
   
}
const update_post = (req, res, next) => { 
    res.render("admin/update_post", {title: "UPDATE POST"})
}
const delete_post = async(req, res, next) => {
    try{
        await Post.findByIdAndRemove(req.query.id)
        res.status(201).redirect('/admin/post');
     } catch (error) {
         res.status(500).send(error)
     }
    
 }

//Category controllers
const category = async(req, res, next) => { 
    try{
        let allCats = await Category.find().sort({name:1})
       res.render("admin/category", {title: "CATEGORIES", category: allCats})
    } catch (error) {
        res.status(500).send(error)
    }
}
const add_category = async(req, res, next) => { 
    if(req.method == 'POST'){
        if(!req.body.cat){
            res.render("admin/add_category", {title: "ADD CATEGORY", msg:"Please enter category name !"})
        }else{
            try{
                let category = new Category({
                    name:req.body.cat
                })
                await category.save()
                res.status(201).redirect('/admin/category');
            } catch (error) {
                res.status(500).send(error)
            }
        }
        
    } else {
        res.render("admin/add_category", {title: "ADD CATEGORY"})
    }
    
}
const update_category = async(req, res, next) => { 
    if(req.method == 'POST'){
        if(!req.body.cat){
            res.render("admin/update_category", {title: "UPDATE CATEGORY", msg:"Please enter category name !"})
        }else{
            let _id = req.body.cat_id;
            await Category.findByIdAndUpdate(_id, {name:req.body.cat}, { useFindAndModify: false})
            res.status(201).redirect('/admin/category');
        }
    } else {
        try{
           let singleCat =  await Category.findById(req.query.id)
            res.render("admin/update_category", {title: "UPDATE CATEGORY", singleCat: singleCat})
        } catch (error) {
            res.status(500).send(error)
        }
    }  
}
const delete_category = async(req, res, next) => {
    try{
        await Category.findByIdAndRemove(req.query.id)
        res.status(201).redirect('/admin/category');
     } catch (error) {
         res.status(500).send(error)
     }
    
 }

//User controllers
const add_user = (req, res, next) => { 
    res.render("admin/add_user", {title: "ADD USER"})
}
const update_user = (req, res, next) => { 
    res.render("admin/update_user", {title: "UPDATE USER"})
}
const users = (req, res, next) => { 
    res.render("admin/users", {title: "USERS"})
}
module.exports =  { home, post, category, add_post, delete_post, add_category, delete_category,
    add_user, update_category, update_post, update_user, users } 
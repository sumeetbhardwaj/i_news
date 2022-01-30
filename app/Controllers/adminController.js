const Post = require("../Models/post")
const Category = require("../Models/category")
const User = require("../Models/user")
const async = require("hbs/lib/async")


//Login controllers
const home = (req, res, next) => { 
    res.render("admin/index")
}
//Post controllers
const post = (req, res, next) => { 
    res.render("admin/post", {title: "POSTS"})
}
const add_post = (req, res, next) => { 
    res.render("admin/add_post", {title: "ADD POST"})
}
const update_post = (req, res, next) => { 
    res.render("admin/update_post", {title: "UPDATE POST"})
}

//Category controllers
const category = async(req, res, next) => { 
    try{
        let allCats = await Category.find()
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
module.exports =  { home, post, category, add_post, add_category, delete_category,
    add_user, update_category, update_post, update_user, users } 
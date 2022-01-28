const home = (req, res, next) => { 
    res.render("admin/index")
}
const post = (req, res, next) => { 
    res.render("admin/post")
}
const category = (req, res, next) => { 
    res.render("admin/category")
}
const add_post = (req, res, next) => { 
    res.render("admin/add_post")
}
const add_category = (req, res, next) => { 
    res.render("admin/add_category")
}
const add_user = (req, res, next) => { 
    res.render("admin/add_user")
}
const update_category = (req, res, next) => { 
    res.render("admin/update_category")
}
const update_post = (req, res, next) => { 
    res.render("admin/update_post")
}
const update_user = (req, res, next) => { 
    res.render("admin/update_user")
}
const users = (req, res, next) => { 
    res.render("admin/users")
}
module.exports =  { home, post, category, add_post, add_category, 
    add_user, update_category, update_post, update_user, users } 
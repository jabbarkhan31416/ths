const express = require("express")
const router = express.Router()
//get "/user/login"
//path "/"user/login
// render login.ejs
router.get("/login", (req,res)=>{
    res.render("login.ejs")
})

//get "/user/"
//path "/"user/
// render login.ejs
router.get("/", (req,res)=>{
    res.render("login.ejs")
})


module.exports = router
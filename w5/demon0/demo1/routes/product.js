const express = require("express")
const router = express.Router()
const db = require("../models")
//get
//path "/products"
// render products.ejs
// find in products collection & get all products

router.get("/", (req,res)=>{
    db.PRODUCTS.find()
        .then(prodData => res.render("products.ejs"))
        .catch(err => res.send("-----"/*err*/))
})

//post
//path /prodducts

router.post("/", (req,res)=>{
    db.PRODUCTS.create(req,body)
        .then(_=> res.redirect("/products"))
        .catch(err=>res.send(err))
})

module.exports = router
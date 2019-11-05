const express = require("express")
const router = express.Router()
//get "/"
//path "/"
// render index.ejs
router.get("/", (req,res)=>{
    res.render("index.ejs")
})

module.exports = router
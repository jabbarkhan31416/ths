const express = require("express")
const path = require("path")
const bodyParser = require('body-parser')
const app = express()
const port = 5000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("views", __dirname+"/views")
app.set("view engine", "ejs")
const friends = ["zero","one","two"]
app.get("/", (req,res) => {
    res.render("index.ejs", {friendsData : friends})
})
app.post("/form", (req,res)=>{
    friends.unshift(req.body.name)
    res.redirect("/")
})
app.post("/delete/:id", (req,res)=>{
    const index = req.params.id
    if(0<=index && index<friends.length){
        friends.splice(index,1)
        res.redirect('/')
    }
})
app.post("/update/:id", (req,res)=>{
    const index = req.params.id
    if(0<=index && index<friends.length){
        friends[index] = req.body.name
        res.redirect('/')
    }
})
app.get("/products", (req,res)=>{
    res.render("products.ejs")
})
app.get("/login", (req,res)=>{
    res.render("login.ejs")
})
app.get("/z", (req,res) => {
    res.send("hello, z")
})
app.get("/download", (req,res) => {
    //const file = path.join(__dirname,"recur.pdf")
    res.download(__dirname+"/recur.pdf")
    //res.sendFile(__dirname+"/cat.zip")
})
app.get("/download0", (req,res) => {
    //const file = path.join(__dirname,"recur.pdf")
    res.download(__dirname+"/cat.zip")
    //res.sendFile(__dirname+"/cat.zip")
})
app.get(/./, (req,res)=>{
    const pathArr = req.path.split("/")
    const lastPath = pathArr[pathArr.length - 1]
    res.send(lastPath)
})
app.get("/y", (req,res) => {
    res.send("y")
})
app.listen(port, _=>console.log(`running at ${port}`, 0))
const Express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const port = 3000
const app = Express()
const listItem = require("./models/list-item")

mongoose.connect(
    "mongodb://localhost:27017/to-do-list",
    {useNewUrlParser: true},
    err => err ? console.log("error", err) : 0
)

app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine","ejs")
app.use(Express.static("public"))


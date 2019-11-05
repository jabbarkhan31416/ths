const express = require("express")
const path = require("path")
const bodyParser = require('body-parser')
const app = express()
const port = 5000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("views", __dirname+"/views")
app.set("view engine", "ejs")

const indexController = require("./routes/index")
app.use("/", indexController)

const userController = require("./routes/login")
app.use("/user", userController)

const productController = require("./routes/product")
app.use("/products", productController)

app.listen(port, _=>console.log(`running at ${port}`, 1))
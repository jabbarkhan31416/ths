// all files related to db
const mongoose = require("mongoose")

//connect application with mongodb
mongoose.connect("mongodb://localhost/fpf")

module.exports.PRODUCTS = require("./products")
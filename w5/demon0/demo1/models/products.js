//collecting products
const mongoose = require("mongoose")

productSchema = new mongoose.Schema({
    name : {
        type : String
    },
    image : {
        type : String
    },
    votes : {
        type : Number
    }
})

const PRODUCTS = mongoose.model("PRODUCTS", productSchema)

module.exports = PRODUCTS
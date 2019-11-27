const mongoose = require("mongoose")
const schema = mongoose.Schema

const contactSchema = new schema({
    name: {
        type: String
    },
    mobile: {
        type: Number,
        match: [/^(\+\d{1,3}[- ]?)?\d{10}$/, "Enter valid phone number"]
    },
    email: {
        type: String,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Enter valid email"]
    }
})

module.exports = mongoose.model("contact", contactSchema)
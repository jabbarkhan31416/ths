const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcryptjs")

const userSchema = Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = module.exports = mongoose.model("User", userSchema)

module.exports.createUser = (newUser, callBack)=>{
    bcrypt.genSalt(10, (err,salt)=>{
        bcrypt.hash(newUser.password, salt, (err,hash)=>{
            newUser.password = hash
            newUser.save(callBack)
        })
    })
}

module.exports.getUserByEmail = (email,callBack)=>{
    var query = {email: email}
    User.findOne(query, callBack)
}

module.exports.getUserById = User.findById

module.exports.comparePassword = (candidatePassword, hash, callback)=>{
    bcrypt.compare(candidatePassword, hash, (err,isMatch)=>{
        if(err) throw err
        callback(null, isMatch)
    })
}
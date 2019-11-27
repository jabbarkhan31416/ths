const Express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const port = 3000
const app = Express()

const Contact = require("./models/contacts")

mongoose.connect("mongodb://localhost:27017/restapi", err=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("db connected")
    }
})

app.use(bodyParser.json())

app.get("/", (req,res)=>{
    Contact.find({})
    .then(data=>{
        res.status(400).json({message: "Api hit successful", data: data})
    })
})

app.post("/", (req,res)=>{
    const body = req.body
    Contact.create({
        name: body.name,
        mobile: body.mobile,
        email: body.email
    })
    .then(()=>{
        res.status(200).json({message: "Stored successfully"})
    })
    .catch(err=>{
        res.status(400).json({error: err})
    })
})

app.listen(port, _=>{
    console.log("app is running")
})

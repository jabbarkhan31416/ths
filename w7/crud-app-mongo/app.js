const Express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
port = 3011
const app = Express()
const Contact = require("./models/contacts")

mongoose.connect(
    "mongodb://localhost:27017/contacts-app",
    {useNewUrlParser: true},
    err=>{
        if(err) console.log(err)
        else console.log("DB connected")
    }
)

app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine","ejs")
app.use(Express.static("public"))

app.get("/",(req,res)=>{
    Contact.find({})
    .then(data=>{
        res.render("index",{data: data})
    })
})

app.post("/",(req,res)=>{
    const body = req.body
    Contact.create({
        name: body.name,
        email: body.email,
        mobile: body.mobile
    })
    .then(_=>{
        res.redirect("/")
    })
})

/*app.get("/update/:id", (req,res)=>{
    Contact.findById(req.params.id)
    .then(contact=>{
        res.render("update",{contact: contact})
    })
})*/

app.listen(port,()=>{
    console.log("****App listening at port", port)
})

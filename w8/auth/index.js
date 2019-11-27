const Express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const nodemailer = require("nodemailer")
const passport = require("passport")
const session = require("express-session")
const cookieParser = require("cookie-parser")
const localStrategy = require("passport-local").Strategy

const User = require("./models/user")
const port = 3000
const app = Express()

let transporter = nodemailer.createTransport({
    pool: true,
    service: "Gmail",
    secure: false,
    auth: {
        user: "testnodeappmail@gmail.com",
        pass: "123321asddsa"
    },
    tls:{rejectUnouthorized: false},

})

mongoose.connect("mongodb+srv://jabbar:123456A@cluster0-zk7rx.mongodb.net/test?retryWrites=true&w=majority", err=>{
    if(err) console.log("error",err)
    else console.log("DB connected")
})

app.use(Express.static("public"))

app.use(cookieParser())

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: true}))

app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
}))

//init passport

app.use(passport.initialize())
app.use(passport.session())

passport.use(new localStrategy(
    (username,password,done)=>{
        User.getUserByEmail(username, (err,user)=>{
            if (err) throw err
            else if (!User) return done(null, false, {message: "Unknown User"})
            User.comparePassword(password, user.password, (err,isMatch)=>{
                if(err) throw err
                else if(isMatch) return done(null,user)
                else return done(null, false, {message: "invalid password"})
            })
        })
    }
))

passport.serializeUser((user,done) => done(null,user.id))

passport.deserializeUser(
    (id,done) => User.getUserById(
        id, (err,user) => done(err,user)
    )
)

app.get("/", (_req,res)=>{
    res.render("index")
})

app.get("/login", (_req,res)=>{
    res.render("login")
})

app.post(
    "/login",
    passport.authenticate("local", {failureRedirect: "/login"}),
    (_req,res) => res.redirect("/home")
)

app.get("/register", (_req,res)=>{
    res.render("register")
})

app.post("/register", (req,res)=>{
    const body = req.body
    const password = body.password
    const password2 = body.password2
    if(password===password2){
        var newUser = new User({
            name: body.name,
            email: body.email,
            password: body.password
        })

        User.createUser(newUser, async function(err,user){
            if(err) console.log(err)
            else{
                var mailOption = {
                    from: "Images App <testnodemail@gmail.com>",
                    to: user.email,
                    subject: "Thank you for registration",
                    html: (
                        "<p>Hi "+user.name+",</p>"+
                        "<p>Thank you for registering</p>"
                    )
                }
                await transporter.sendMail(mailOption, (err,info)=>{
                    if(err) console.log(err)
                    else console.log(info)
                })
                res.redirect("/login")
            }
        })
    }
    else console.log("password does not match")
})

app.get("/home", (req,res)=>{
    console.log(req.session)
    res.render("home")
})

app.get("/logout", (req,res)=>{
    req.logout()
    res.redirect("/login")
})

const isLoggedIn = (req,res,next)=>{
    console.log(req.user)
    if(req.user) return next()

    // req.flash("error", "Login First")
    res.redirect("/login")
}

app.listen(port, _=>{
    console.log("App is listening")
})

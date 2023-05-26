require('dotenv').config();                  //requiring DOTENV as soon as possible
const express= require("express");
const bodyParser= require("body-parser");
const ejs=require("ejs");
const mongoose = require("mongoose");
const md5=require("md5");                    //level 3 hashing
//const encrypt=require("mongoose-encryption");           not required further than level 2 security
// const bcrypt = require('bcrypt');             //level 4 hashing + salting
// const saltRounds = 10;                    //more the salt rounds, more secure is the resultant hash at the expense of processing power. salt=31 can take 31 days on a 2ghz processor to make its hash
const session = require('express-session');       //level 5  COOKIES AND SESSIONS
const passport=require("passport");               //level 5   COOKIES AND SESSIONS
const passportLocalMongoose=require("passport-local-mongoose");     //level 5  COOKIES AND SESSIONS. no need to require passport-local. its a feature of passport-local-mongoose. just install both of them

const app=express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({                             //level 5  defining sessions     
    secret:"Im am an idiot.",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());      //level 5  initialiazing passport
app.use(passport.session());        //level 5  using passport to handle the sessions


mongoose.connect('mongodb://127.0.0.1:27017/userDB');
const userSchema=new mongoose.Schema({           //standard mongoose schema format
    email:String,
    password: String
});

userSchema.plugin(passportLocalMongoose);          //level 5  COOKIES AND SESSIONS


//////////////////////////////////////USING HASHING (LEVEL 3) INSTEAD OF LEVEL 2 ENCRYPTION //////////////////////////////////////////

//const secret=process.env.SECRET;           //this key will be used for encrypting/decrypting data in level 2. 
                                    //hiding it from public using dotevn
//userSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password']  });       //applying the mongoose-encrypt plugin in mongoose to get the encryption features
                                       //encrypted fields are the one that will be encrypted. remmove the whole argument to encrypt the whole doc
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const User=mongoose.model('User',userSchema);
 
passport.use(User.createStrategy());            //local login strategy      //level 5  cookies and sessions
passport.serializeUser(User.serializeUser());    //stores data into the cookie            //level 5  cookies and sessions
passport.deserializeUser(User.deserializeUser());    //recovers data from the cookie           //level 5  cookies and sessions

app.get("/",function(req,res){
    res.render("home");
});
app.get("/login",function(req,res){
    res.render("login");
});
app.get("/register",function(req,res){
    res.render("register");
});

app.get("/secrets",function(req,res){
    if(req.isAuthenticated()){        //level 5  function of passport-local,passport, passport-local-mongoose
        res.render("secrets");
    }else{
        res.redirect("/login");
    }
});

app.post("/register", function(req,res){
/////////////////////////////////////////////////////// LEVEL 4 //////////////////////////////////////////////////////////////////////////
    // const userpass = /^\$2y\$/.test(req.body.password) ? '$2a$' + req.body.password.slice(4) : req.body.password;   //https://github.com/kelektiv/node.bcrypt.js/issues/849#issuecomment-882636932
    // bcrypt.hash(userpass, saltRounds, function(err, hash) {
    //     const newUser=new User({
    //         email:req.body.username,
    //         //password:req.body.password
    //         //password:md5(req.body.password)                //turning the entered password into a hash table to be stored in the db level 3
    //         password: hash
    //     });
    //     newUser.save()
    //       .then(() => {
    //         //res.send("User has been added successfully.");
    //         res.render("secrets");
    //       })
    //       .catch(err => {
    //         res.send(err);
    //       });
    // });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    User.register({username:req.body.username},req.body.password, function(err,user){     // level 5  register is a passport-local-mongoose function.  doing the job of user.save and more
        if(err){
            console.log(err);
            res.redirect("/register");
        }else{
            passport.authenticate("local")(req,res, function(){     //level 5  authentication. that function runs only when the user is authenticated
                res.redirect("/secrets");           //level 5  first time redirecting to secret route
            });
        }
    });
    
});
app.post("/login",function(req,res){
//////////////////////////////////////////////////// LEVEL 4 ///////////////////////////////////////////////////////////////////////
    // const username=req.body.username;
    // const password=req.body.password;                   //for level 1 and 2 and 4
    // //const password=md5(req.body.password);           //converting the entered password into a hash table for comparision with the stored password level3
    

    // User.findOne({email:username})
    // .then((foundUser)=>{
    //     // if(foundUser.password===password){           using bcrypt for comparision instead
    //     //     res.render("secrets");
    //     // } 
    //     bcrypt.compare(password, foundUser.password, function(err, result) {
    //         if(result===true){
    //             res.render("secrets");
    //         }
    //         else{
    //             res.send("fuck yourself");
    //         }
    //     });
    // })
    // .catch((err)=>{
    //     //console.log("An error occurred while finding the article:", err);
    //     res.status(500).send("Requested User does not exist.");
    //     console.log(err);
    // });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////Level 5 //////////////////////////////////////////////////////////////////////
    const user =new User({
        username:req.body.username,
        password:req.body.password
    });

    req.login(user,function(err){      //a passport function
        if(err){
            console.log(err);
        }else{
            passport.authenticate("local")(req,res, function(){
                res.redirect("/secrets");
            });
        }
    });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});
app.listen(3000,function(req,res){
    console.log("Server is running at the Port 3000");
});
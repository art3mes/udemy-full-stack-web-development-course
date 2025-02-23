require('dotenv').config();                  //requiring DOTENV as soon as possible
const express= require("express");
const bodyParser= require("body-parser");
const ejs=require("ejs");
const mongoose = require("mongoose");
const session = require('express-session');       //level 5  COOKIES AND SESSIONS
const passport=require("passport");               //level 5   COOKIES AND SESSIONS
const passportLocalMongoose=require("passport-local-mongoose");     //level 5  COOKIES AND SESSIONS. no need to require passport-local. its a feature of passport-local-mongoose. just install both of them
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const findOrCreate = require('mongoose-findorcreate');

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
app.use(passport.session());         //level 5  using passport to handle the sessions


mongoose.connect('mongodb://127.0.0.1:27017/userDB');
const userSchema=new mongoose.Schema({           //standard mongoose schema format
    email:String,
    password: String,
    googleId:String,
    facebookId:String,
    secret:String
});

userSchema.plugin(passportLocalMongoose);          //level 5  COOKIES AND SESSIONS
userSchema.plugin(findOrCreate);                   //level 6

const User=mongoose.model('User',userSchema);
 
passport.use(User.createStrategy());            //local login strategy                    //level 5  cookies and sessions
//passport.serializeUser(User.serializeUser());    //stores data into the cookie            //level 5  cookies and sessions    //local scope
//passport.deserializeUser(User.deserializeUser());    //recovers data from the cookie      //level 5  cookies and sessions    //local scope

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, {
        id: user.id,
        username: user.username,
        picture: user.picture
      });
    });
  });
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID_GOOGLE,
    clientSecret: process.env.CLIENT_SECRET_GOOGLE,
    callbackURL: "http://localhost:3000/auth/google/secrets"
  },
  function(accessToken, refreshToken, profile, cb) {
   // console.log(profile);
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.use(new FacebookStrategy({
  clientID: process.env.CLIENT_ID_FB,
  clientSecret: process.env.CLIENT_SECRET_FB,
  callbackURL: "http://localhost:3000/auth/facebook/secrets"
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));

app.get("/",function(req,res){
    res.render("home");
});
/////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/auth/google",
  passport.authenticate('google', { scope: ["profile"] })   //google means using google strategy
);
app.get("/auth/google/secrets",                    //google callback function. used after selecting the google id when loggin in
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect to secrets.
    res.redirect('/secrets');
  });
////////////////////////////////////////////////////////////////////////////////////////////////////
  app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/secrets',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/secrets');
  });
/////////////////////////////////////////////////////////////////////////////////////////////////////
app.get("/login",function(req,res){
    res.render("login");
});
app.get("/register",function(req,res){
    res.render("register");
});

app.get("/secrets",function(req,res){
    // if(req.isAuthenticated()){        //level 5  function of passport-local,passport, passport-local-mongoose
    //     res.render("secrets");        //secret is where anyone can see the added secrets.
    // }else{
    //     res.redirect("/login");
    // }
    User.find({"secret": {$ne: null}})
    .then(foundUsers => {
      if (foundUsers && foundUsers.length > 0) {
        res.render("secrets", { usersWithSecrets: foundUsers });
      }
    })
    .catch(err => {
      console.log(err);
    });
  
});
app.get("/submit",function(req,res){
    if(req.isAuthenticated()){        //level 5  function of passport-local,passport, passport-local-mongoose
        res.render("submit");
    }else{
        res.redirect("/login");
    }
});
app.post("/submit", function(req,res){
    const submittedSecret=req.body.secret;
    const userObject= req.user;
    console.log(userObject.id);

    User.findById(userObject.id)
    .then(foundUser => {
      if (foundUser) {
        foundUser.secret = submittedSecret;
        return foundUser.save();
      }
    })
    .then(() => {
      res.redirect("/secrets");
    })
    .catch(err => {
      console.log(err);
    });
  
});
app.get("/logout", function(req,res){
    req.logout(function(err) {
        if (err) { 
            console.log(err); 
        }else{
            res.redirect('/');
        }
    });
});
app.post("/register", function(req,res){

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
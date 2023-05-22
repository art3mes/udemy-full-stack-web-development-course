const express= require("express");
const bodyParser= require("body-parser");
const ejs=require("ejs");
const mongoose = require("mongoose");
const app=express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect('mongodb://127.0.0.1:27017/userDB');
const userSchema={
    username:String,
    password: String
};
const User=mongoose.model('User',userSchema);

app.get("/",function(req,res){
    res.render("home");
});
app.get("/login",function(req,res){
    res.render("login");
});
app.get("/register",function(req,res){
    res.render("register");
});
app.post("/register", function(req,res){
    const newUser=new User({
        username:req.body.username,
        password:req.body.password
    });
    newUser.save()
      .then(() => {
        //res.send("User has been added successfully.");
        res.render("secrets");
      })
      .catch(err => {
        res.send(err);
      });
});

app.listen(3000,function(req,res){
    console.log("Server is running at the Port 3000");
});
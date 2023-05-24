require('dotenv').config();                  //requiring DOTENV as soon as possible
const express= require("express");
const bodyParser= require("body-parser");
const ejs=require("ejs");
const mongoose = require("mongoose");
const encrypt=require("mongoose-encryption");
const app=express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect('mongodb://127.0.0.1:27017/userDB');
const userSchema=new mongoose.Schema({           //standard mongoose schema format
    email:String,
    password: String
});

const secret=process.env.SECRET;           //this key will be used for encrypting/decrypting data in level 2. 
                                    //hiding it from public using dotevn
userSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password']  });       //applying the mongoose-encrypt plugin in mongoose to get the encryption features
                                       //encrypted fields are the one that will be encrypted. remmove the whole argument to encrypt the whole doc

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
        email:req.body.username,
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
app.post("/login",function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    User.findOne({email:username})
    .then((foundUser)=>{

        if(foundUser.password===password){
            res.render("secrets");
        } 
    })
    .catch((err)=>{
        //console.log("An error occurred while finding the article:", err);
        res.status(500).send("Requested User does not exist.");
        console.log(err);
    });

});
app.listen(3000,function(req,res){
    console.log("Server is running at the Port 3000");
});
const express=require ("express");
const ejs=require("ejs");
const mongoose=require("mongoose");
const bodyParser =require("body-parser");

const app=express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.listen(3000, function(){
    console.log("Server is running on the port 3000");
})
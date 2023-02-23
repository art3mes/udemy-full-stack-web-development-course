const express=require("express");
const bodyParser=require("body-parser");
const request=require("require");         //deprecated package

const app=express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
//    res.sendFile(__filename+ "/signup.html");
    res.send("LMAO");
});

app.listen(3000,function(){
    console.log("server is up and running");
});
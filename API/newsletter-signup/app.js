const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.send("lmao");
});

app.listen(3000,function(){
    console.log("server is up and running");
});
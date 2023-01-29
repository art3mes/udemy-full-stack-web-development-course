const express=require("express");
const app=express();

app.get("/", function(request,response){
    //response.send("lmao");
    response.sendFile(__dirname+"/index.html");             //__dirname is a constant which gives full path of the current working directory. try printing it
});

app.listen(3000, function(){
    console.log("server started at port 3000");
});
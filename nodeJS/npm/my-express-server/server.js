const express=require("express");        //to get the express module
const app = express();                 // binding "app" variable to express() function

app.listen(3000,function(){
    console.log("server started on Port 3000")
});                       //listening to a port numbered 3000 with a callback function
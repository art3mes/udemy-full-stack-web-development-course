// Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, 
// released as free and open-source software under the MIT License. 
// It is designed for building web applications and APIs. 
// It has been called the de facto standard server framework for Node.js.

const express=require("express");        //to get the express module
const app = express();                 // binding "app" variable to express() function

app.listen(3000,function(){
    console.log("server started on Port 3000")
});                       //listening to a port numbered 3000 with a callback function
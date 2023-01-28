// Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, 
// released as free and open-source software under the MIT License. 
// It is designed for building web applications and APIs. 
// It has been called the de facto standard server framework for Node.js.

const express=require("express");        //to get the express module
const app = express();                 // binding "app" variable to express() function

app.get("/", function(request,response){        //will decide what it should send when the the browser requests the server that is started below
                                                // first parameter is the route, second is the callback function
                                                // "/" means the root directory,ie, homepage of the server.
    //console.log(request);                      will send all the information to the TERMINAL regarding the request made.
    response.send("lmao");                            //to send the response
});                             
                   
app.get("/contact", function(request,response){         //another route
    response.send("<h1>dont contact me. what do you want :(</h1>")
});
app.get("/about", function(req,res){                    //another route
    res.send("NO.");
});

app.listen(3000,function(){
    console.log("server started on Port 3000")
});                       //listening to a port numbered 3000 with a callback function
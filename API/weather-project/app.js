const express=require ("express");
const https=require ("https");             // native node module. used to get get requests

const app=express();



app.get("/",function(req,res){

    const url="https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=719d71f2bbb18d4b4268ca4c221dd7d9&units=metric";
    https.get(url,function(response){           //it gets a response from the send url
        console.log(response);
    });
    res.send("server is running");
});



app.listen(3000,function(){
    console.log("server started on PORT 3000");
});
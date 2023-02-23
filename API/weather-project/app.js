const { ok } = require("assert");
const express=require ("express");
const https=require ("https");             // native node module. used to get get requests

const app=express();



app.get("/",function(req,res){

    const url="https://api.openweathermap.org/data/2.5/weather?q=rome&appid=719d71f2bbb18d4b4268ca4c221dd7d9&units=metric";
    https.get(url,function(response){           //it gets a response from the send url
        console.log(response.statusCode);               //https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
                                                        // 200     ok
                                                        // 404     resourse not found
                                                        // 401     unauthorized
        response.on("data",function(data){                  // on function to interact with the recieved data
            // console.log(data);      // will give the output in the hexadecimal format
            const weatherDATA= JSON.parse(data);       //will convert the data into a json object
            //weatherDATA being the JSON object              
            //JSON.stringify(data);   will convert the json objject to strings (tightly packed)
            // console.log(weatherDATA);   //will print the whole json object
            // console.log("temperature: ",weatherDATA.main.temp);
            // console.log("Description: ",weatherDATA.weather[0].description);
            const temp=weatherDATA.main.temp;
            const desc=weatherDATA.weather[0].description;
            const icon=weatherDATA.weather[0].icon;
            const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<h1>Current temperature in ROME is "+temp+" degrees Celcius</h1>");
            res.write("<p>The current weather description is "+weatherDATA.weather[0].description+".<p>");
            res.write("<img src="+imageURL+">");
            res.send();
            //res.write    https text stream response

        });
    });
    //res.send("server is running");                          //ONLY ONE res.send in any one of the given app methods
});



app.listen(3000,function(){
    console.log("server started on PORT 3000");
});
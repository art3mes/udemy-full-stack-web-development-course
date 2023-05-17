const express=require ("express");
const https=require ("https");             // native node module. used to get get requests
const app=express();
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    
});
app.post("/", function(req,res){
    // console.log(req.body.cityName);
    const query=req.body.cityName;
    const appKey="719d71f2bbb18d4b4268ca4c221dd7d9";
    const metric="metric";

    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+appKey+"&units="+metric;
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
            res.write("<h1>Current temperature in "+query+" is "+temp+" degrees Celcius</h1>");
            res.write("<p>The current weather description is "+desc+".<p>");
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
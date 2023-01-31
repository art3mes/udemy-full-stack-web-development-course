//WEB APPLICATION: CODE RUNNING ON THE BACKEND. THIS IS BACKEND. LOL. YOU MADE A WEB APPLICATION

const express=require("express");
const bodyParser=require("body-parser");          //enables to work on sent values. see packages.info for more in parent-parent folder.
const { response } = require("express");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));    //will work for data sent via form. extended allows to post nested objects
// bodyParser.text();               other ways/formats to fetch data
// bodyParser.json();

app.get("/", function(request,response){
    //response.send("lmao");
    response.sendFile(__dirname+"/calculator.html");             //__dirname is a constant which gives full path of the current working directory. try printing it
});
app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/", function(req,res){                        // to recieve the data
    //res.send("posted.");  to send data                                CAN LOOK ABOUT STATUS CODES ON WIKI
    // console.log(req.body);                      //will show all the sent data. IN TEXT FORMAT. DO NECESSARY TYPECASTING
    // console.log(req.body.num1);                 // to tap into a sent value via a unique name
    // res.send("ok");
    var n1=Number(req.body.num1);                   //to get the data sent via element named "num1"
    var n2=Number(req.body.num2);                   //via element "num2"

    var result=n1+n2;
    res.send("result: "+result);   
});

app.post("/bmicalculator", function(req,res){
    var w=Number(req.body.weight);
    var h=Number(req.body.height);
    
    var bmi=(w/(h*h));
    bmi=Math.round((bmi + Number.EPSILON) * 100) / 100;   // round off to nearest 2 decimal places
    
    res.send("Your BMI is: "+bmi);
});
app.listen(3000, function(){
    console.log("server started at port 3000");
});
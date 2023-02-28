const express=require("express");                        //CREATE A views FOLDER. EJS WILL LOOK FOR FILES TO RENDER IN THERE BY DEFAULT
const bodyParser=require("body-parser");                // file.ejs

const e = require("express");

const app=express();
app.set('view engine','ejs');                        // app which is created by Express is being told to use EJS as its view engine

app.get("/", function(req,res){
    var today= new Date();
    var currentDay=today.getDay();            // will give index of weekdays. 0 for sunday, 1 for monday.-- 6 for saturday
    var day="";
    const weekDays={1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday",6:"Saturday", 0:"Sunday"};
    // console.log(currentDay);
    if(currentDay === 6 || currentDay === 0){
        day=weekDays[currentDay];
    }
    else{
        day=weekDays[currentDay];
    }
    res.render("list", {dayPresentinList:day});          //it will render the file "list" present in views folder. and a js object is passed
});                                                                     // {variableInEJSfile : variableHere}

app.listen(3000, function(){
    console.log("Server is running!");
});
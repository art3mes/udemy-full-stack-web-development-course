const express=require("express");                        //CREATE A views FOLDER. EJS WILL LOOK FOR FILES TO RENDER IN THERE BY DEFAULT
const bodyParser=require("body-parser");                // file.ejs
const e = require("express");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');                        // app which is created by Express is being told to use EJS as its view engine

var items=["Buy item1", "Buy Item2", "Sell item2"];

app.get("/", function(req,res){
    var today= new Date();
    var currentDay=today.getDay();            // will give index of weekdays. 0 for sunday, 1 for monday.-- 6 for saturday
    var day="";
    // const weekDays={1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday",6:"Saturday", 0:"Sunday"};
    var options= {               //JS object for date formatting
        weekday:'long',             //  weekdays will be written in full form, i.e., Saturday
        day:'numeric',               // days will be numeric format
        month: 'long'               // full month names
    };

    day = today.toLocaleDateString("en-US", options);
    // console.log(currentDay);                                      works with the past logic/js object weekDays
    // if(currentDay === 6 || currentDay === 0){
    //     day=weekDays[currentDay];
        
    // }
    // else{
    //     day=weekDays[currentDay];
    //     console.log(day);
    // }
    res.render("list", {dayPresentinList:day, itemInTheList:items});          //it will render the file "list" present in views folder. and a js object is passed
                // will have to pass all the variables. it passes whenever home route is loaded
});                                                                     // {variableInEJSfile : variableHere}

app.post("/",function(req,res){
    var item=req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server is running!");
});
const express=require("express");                        //CREATE A views FOLDER. EJS WILL LOOK FOR FILES TO RENDER IN THERE BY DEFAULT
const bodyParser=require("body-parser");                // file.ejs
const e = require("express");
const app=express();
const date= require(__dirname+"/date.js");
//console.log(date());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');                        // app which is created by Express is being told to use EJS as its view engine
app.use(express.static("public"));       //location of statuc files. MORE DETAILS IN THE SIGNUP PROJECT

let items=["Buy item1", "Buy Item2", "Sell item2"];
let work=[];

app.get("/", function(req,res){
    
    // console.log(currentDay);                                      works with the past logic/js object weekDays
    // if(currentDay === 6 || currentDay === 0){
    //     day=weekDays[currentDay];
        
    // }
    // else{
    //     day=weekDays[currentDay];
    //     console.log(day);
    // }
    let day=date();       //using the date module i made :)
    res.render("list", {listTitle:day, itemInTheList:items});          //it will render the file "list" present in views folder. and a js object is passed
                // will have to pass all the letiables. it passes whenever home route is loaded
});                                                                     // {letiableInEJSfile : letiableHere}

app.post("/",function(req,res){
    let item=req.body.newItem;
    if(req.body.list==="Work"){
        work.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req,res){
    res.render("list", {listTitle:"Work List", itemInTheList:work});
});
app.post("/work", function(req,res){
    let item=req.body.newItem;
    work.push(item);
    res.redirect("/work");
});

app.get("/about", function(req,res){
    res.render("about");
});
app.listen(3000, function(){
    console.log("Server is running!");
});
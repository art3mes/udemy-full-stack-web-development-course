const express=require("express");                        //CREATE A views FOLDER. EJS WILL LOOK FOR FILES TO RENDER IN THERE BY DEFAULT
const bodyParser=require("body-parser");                // file.ejs
const e = require("express");
const app=express();
const mongoose = require("mongoose");
const date= require(__dirname+"/date.js");
//console.log(date());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');                        // app which is created by Express is being told to use EJS as its view engine
app.use(express.static("public"));       //location of statuc files. MORE DETAILS IN THE SIGNUP PROJECT

// const items=["Buy apples", "Post the letter", "Get milk"];    // const array? well yes dipshit. you can push elemenets in it
// const work=[];                 //commenting it all out. cause we are using mongoose as the backend


mongoose.connect('mongodb://127.0.0.1:27017/todolistDB');      //connection to mongoDB
const itemsSchema={                                //mongoose schema
    name:String
};
const Item=mongoose.model('Item', itemsSchema);       //mongoose model       

const item1=new Item({
    name: "Welcome to your ToDoList!"
});
const item2=new Item({
    name: "Hit the + button to add a new item"
});
const item3=new Item({
    name: "<----Hit this to delete that item"
});
const defaultArray=[item1,item2,item3];


app.get("/", function(req,res){

    Item.find().then(function(foundItem){       //printing the items stored in the backend to the console

        if(foundItem.length===0){
            Item.insertMany(defaultArray);           //inserting the default array
            res.redirect("/");
        }else{
            res.render("list", {listTitle:"Today", itemInTheList:foundItem});
        }
    });
    // const day=date.getDate();       //using the date module i made :)
    // res.render("list", {listTitle:day, itemInTheList:items});          //it will render the file "list" present in views folder. and a js object is passed
    //             // will have to pass all the letiables. it passes whenever home route is loaded
});                                                                     // {letiableInEJSfile : letiableHere}

app.post("/",function(req,res){
    const item=req.body.newItem;
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
    const item=req.body.newItem;
    work.push(item);
    res.redirect("/work");
});

app.get("/about", function(req,res){
    res.render("about");
});
app.listen(3000, function(){
    console.log("Server is running!");
});
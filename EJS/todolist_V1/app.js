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

const listSchema={       //new list schema for the custom lists
    name:String,
    items:[itemsSchema]
}
const List=mongoose.model('list',listSchema);        //lists' model

app.get("/", function(req,res){

    Item.find().then(function(foundItem){       //printing the items stored in the backend to the console

        if(foundItem.length===0){
            Item.insertMany(defaultArray);           //inserting the default array
            res.redirect("/");
        }else{
            res.render("list", {listTitle:"Today", itemInTheList:foundItem});
        }
    });
});                                                                     // {letiableInEJSfile : letiableHere}
app.get("/:customListName", function(req,res){
    const customListName=req.params.customListName;

    List.findOne({name:customListName }).then((foundList)=>{
        if(!foundList){
            //make a new list
            const list =new List({          //creating new list whenever new custom list is called
                name: customListName,
                items:defaultArray
            });
            list.save();  //saving the made list to db
            res.redirect("/"+customListName); //redirect to current directory
        }else{
            //show the existing list
            res.render("list", {listTitle:foundList.name, itemInTheList:foundList.items});
        }
    });                   
})

app.post("/",function(req,res){           //handling post requests
    const itemName=req.body.newItem;
    const listName=req.body.list;    //to store list name

    const item=new Item({       //making new item
        name:itemName
    });
    if(listName==="Today"){         //if it is homepage
        item.save();      //save the item
        res.redirect("/");      //redirect to homepage
    }else{                    //its not homepage
        List.findOne({name:listName }).then((foundList)=>{             //find if the homepage already exists or not
           foundList.items.push(item);                      //if found, push the item into the existing list array
           foundList.save();       //save the list
           res.redirect("/"+listName);       //redirect to the custom list
        });
    }
});

app.post("/delete", function(req,res){                  //deleting items
    //console.log(req.body.checkbox);
    const checkedItemID=req.body.checkbox;
    const listName=req.body.listName;

    if(listName==="Today"){
        Item.findOneAndDelete({_id:checkedItemID}).then((deletedDocument)=>{            //to delete one element
            console.log("Deleted document: ",deletedDocument.name);
        })
        .catch((error)=>{
            console.error("Error deleting document: ",error);
        });
        res.redirect("/");
    }else{
        const filter = {name:listName};
        const update ={$pull:{items:{_id:checkedItemID}}};

        List.findOneAndUpdate(
            { name: listName },      // Query to find the document you want to update
            { $pull: { items: { _id: checkedItemID } } }, // Changes you want to make to the document
            { new: true }            // Return the updated document instead of the original
          )
          .then((doc) => {
            res.redirect("/"+listName);
          })
          .catch((err) => {
            console.log('Error:', err);
          });
    }
    

});


// app.post("/work", function(req,res){
//     const item=req.body.newItem;
//     work.push(item);
//     res.redirect("/work");
// });

// app.get("/about", function(req,res){
//     res.render("about");
// });
app.listen(3000, function(){
    console.log("Server is running!");
});
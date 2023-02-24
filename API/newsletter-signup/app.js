const express=require ("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));         //THIS THING> BRUH. USE THIS< MAKE A FOLDER NAMED PUBLIC AND FOLLOW TO ENABLE CSS
                                            //website will not work normally after this. use server

app.get("/", function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req,res){
    var firstName=req.body.firstName;
    var lastName=req.body.lastName;
    var email=req.body.email;

    console.log(firstName,lastName,email);
});

app.listen(3000, function(){
    console.log("Server is up and running!");
});
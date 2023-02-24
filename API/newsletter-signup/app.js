const express=require ("express");
const bodyParser=require("body-parser");
const https=require("https");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));         //THIS THING> BRUH. USE THIS< MAKE A FOLDER NAMED PUBLIC AND FOLLOW TO ENABLE CSS
                                            //website will not work normally after this. use server

app.get("/", function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req,res){
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const email=req.body.email;

    const data={
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_fields: {
                    FNAME:firstName,
                    LNAME:lastName
                }
            }
        ]
    };
    const jsonDATA=JSON.stringify(data);

    const url="https://us18.api.mailchimp.com/3.0/lists/d1c66f90cb";
    const options={
        method:"POST",
        auth:"reiner1:051b45dcbad1b93e5ac648fe8c797a13-us18"
    };
    const request=https.request(url,options, function(response){          //save value in a constant. then send it to mailchimp server
        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
    });
    request.write(jsonDATA);
    request.end();
    // console.log(firstName,lastName,email);
});

app.listen(3000, function(){
    console.log("Server is up and running!");
});

// API
// 051b45dcbad1b93e5ac648fe8c797a13-us18

// list id
// d1c66f90cb
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
        auth:"reiner1:f220e69914c3aeb97467cb42e33719cf-us18"
    };
    const request=https.request(url,options, function(response){          //save value in a constant. then send it to mailchimp server
        response.on("data", function(data){
            console.log(JSON.parse(data));
            if(response.statusCode===200){
                res.sendFile(__dirname+"/success.html");
            }
            else{
                res.sendFile(__dirname+"/failure.html");
            }
        });
    });
    request.write(jsonDATA);
    request.end();
    // console.log(firstName,lastName,email);
});

app.post("/failure", function(req,res){
    res.redirect("/");                        //back to the homepage
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is up and running!");
});

// API
//f220e69914c3aeb97467cb42e33719cf-us18

// list id
// d1c66f90cb
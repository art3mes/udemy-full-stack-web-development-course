const express=require ("express");
const ejs=require("ejs");
const mongoose=require("mongoose");
const bodyParser =require("body-parser");
const _=require("lodash");

const app=express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


mongoose.connect('mongodb://127.0.0.1:27017/wikiDB');
const articleSchema={
    title:String,
    content:String
};
const Article=mongoose.model('Article',articleSchema);
//////////////////////////////////////////////////////////////// REQUESTS TO HANDLE ALL ARTICLES //////////////////////////////////////////////
app.route("/articles")
  .get(function(req,res){
    Article.find().then(function(article){
        //console.log(article);
        res.send(article);
    })
  })
  .post(function(req, res) {
    //console.log(req.body.title);
    //console.log(req.body.content);

    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content
    });
    newArticle.save()
      .then(() => {
        res.send("Data sent successfully.");
      })
      .catch(err => {
        res.send(err);
      });
``})
  .delete(function(req,res){
    
    Article.deleteMany({}).then(function(){
      console.log("Data has been deleted"); // Success
      res.send("Data has been deleted.");
    }).catch(function(error){
      console.log(error); // Failure
      res.send(error);
    });
  });

  /////////////////////////////////////////////////////////////// REQUESTS TO HANDLE ONE ARTICLES //////////////////////////////////////////////

  app.route("/articles/:articleTitle")
  .get(function(req,res){

    Article.findOne({title:req.params.articleTitle})
    .then((foundArticle)=>{
        if(foundArticle){
          //console.log("Result :",foundArticle);
          res.send(foundArticle);
        } else {
          //console.log("The requested article is not found");
          res.status(404).send("The requested article is not found");
        }
    })
    .catch((err)=>{
        //console.log("An error occurred while finding the article:", err);
        res.status(500).send("An error occurred while finding the article");
    });
  });

app.listen(3000, function(){
    console.log("Server is running on the port 3000");
});
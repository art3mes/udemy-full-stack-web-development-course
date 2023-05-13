const express=require ("express");
const ejs=require("ejs");
const mongoose=require("mongoose");
const bodyParser =require("body-parser");

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

app.route("/articles")
.get(function(req,res){
  Article.find().then(function(article){
      console.log(article);
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
})
.delete(function(req,res){
  
  Article.deleteMany({}).then(function(){
    console.log("Data has been deleted"); // Success
    res.send("Data has been deleted.");
  }).catch(function(error){
    console.log(error); // Failure
    res.send(error);
  });
});

app.listen(3000, function(){
    console.log("Server is running on the port 3000");
});
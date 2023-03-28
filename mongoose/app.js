
const mongoose=require('mongoose');                            //acquire
mongoose.connect('mongodb://127.0.0.1:27017/human');           //connecting to mongoDB

const People=mongoose.model('People',{                    //making a Schema
  name: String,
  age: Number,
  hobby: String
});

const person1= new People({                            //making an object of the said schema. 
  
  name: "Milenia",                                  //INSERTION
  age: 20,                                        //order can be changed
  hoby: "lucifer is scary"
});

People.deleteOne({ age: 20 })                                        //will delete entry having age of 20. One entry at a time :shrug:
  .then(() => {
    console.log('Entry with age 20 deleted from the database.');
  })
  .catch((error) => {
    console.log(error);
  });


person1.save().then(()=>console.log("Entry added into the Database."));        //saving the previously made object into the db
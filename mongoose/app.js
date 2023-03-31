
const mongoose=require('mongoose');                            //acquire
mongoose.connect('mongodb://127.0.0.1:27017/human');           //connecting to mongoDB

const People=mongoose.model('Person',{                    //making a Schema
  name: String,
  age: Number,
  hobby: String
});

const person1= new People({                            //making an object of the said schema. 
  
  name: "lue",                                  //INSERTION
  age: 24,                                        //order can be changed
  hoby: "no"
});
const person2=new People({
  name:"hub", age:36,hobby:"standup comedy"
});
const person3=new People({
  name:"lars", age:12,hobby:"mangaka"
});


// person1.save().then(()=>console.log("Entry added into the Database."));        //saving the previously made object into the db. for single input

// People.deleteOne({ age: 20 })                                        //will delete entry having age of 20. One entry at a time :shrug:
//   .then(() => {
//     console.log('Entry with age 20 deleted from the database.');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const arr = [person1,person2,person3];              //multiple entry
// People.insertMany(arr);

People.find().then(function(person){

  //Return results
  //console.log(person);   //will print the whole doc\
  person.forEach(function(per){ 
    console.log(per.name);
  });
  mongoose.connection.close();
});

console.log("done");
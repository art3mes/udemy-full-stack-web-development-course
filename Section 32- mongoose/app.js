
const mongoose=require('mongoose');                            //acquire
mongoose.connect('mongodb://127.0.0.1:27017/human');           //connecting to mongoDB

const People=mongoose.model('Person',{                    //making a Schema
  name: {
    type:String,
    required: [true, "Write your name :("]                   //validator: making name a mandatory field
  },
  age: {
    type:Number,                                              //validation
    min:5,
    max:65
  },
  hobby: String
});

// const person1= new People({                            //making an object of the said schema. 
  
//   name: "GayDude",                                  //INSERTION
//   age: 19,                                        //order can be changed
//   hobby: "im haroldine"
// });
// const person2=new People({
//   name:"hub", age:36,hobby:"standup comedy"
// });
// const person3=new People({
//   name:"lars", age:12,hobby:"mangaka"
// });

 //person1.save().then(()=>console.log("Entry added into the Database."));        //saving the previously made object into the db. for single input

// People.deleteOne({ age: 20 })                                        //will delete entry having age of 20. One entry at a time :shrug:
//   .then(() => {
//     console.log('Entry with age 20 deleted from the database.');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const arr = [person1,person2,person3];              //multiple entry
// People.insertMany(arr);



// People.findOneAndUpdate({ _id: '642be4867d1e0260397258f6' },{ name: 'Jognsons' }, { new: true })           
//   .then((updatedDocument) => {                                                         //update an entry
//     console.log('Updated document:', updatedDocument);
//   })
//   .catch((error) => {
//     console.error('Error updating document:', error);
//   });

// People.findOneAndDelete({_id:'642be4867d1e0260397258f6'}).then((deletedDocument)=>{            //to delete one element
//   console.log("Deleted document: ",deletedDocument);
// })
// .catch((error)=>{
//   console.error("Error deleting document: ",error);
// });


// People.deleteMany({ fieldToDelete: 'value-to-delete' })                                     //deletemany
//   .then((result) => { 
//     console.log('Number of documents deleted:', result.deletedCount);
//   })
//   .catch((error) => {
//     console.error('Error deleting documents:', error);
//   });

  People.find().then(function(person){

    //Return results
    //console.log(person);   //will print the whole doc\
    person.forEach(function(per){ 
      console.log(per.name);
    });
    mongoose.connection.close();
  });
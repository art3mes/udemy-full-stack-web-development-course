// const MongoClient =require('mongodb').MongoClient;
// const assert =require('assert');                        //used to do data checking. or input validation


// //connection url
// const url ='mongodb://localhost:27017';
// const options = { family: 4 };

// //database name
// const dbName= 'fruitsDB';

// //create a new mongoClient
// const client = new MongoClient(url, options);

// //use connect method to connect to the server
// client.connect(function(err){
//     assert.equal(null, err);
//     console.log("COnnected to the server.");

//     const db=client.db(dbName);
//     client.close();
//     }
// )
// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://localhost:27017';
// const dbName = 'fruitsDB';

// MongoClient.connect(url, function(err, client) {
//   if (err) throw err;

//   const db = client.db(dbName);
//   console.log("Connected successfully to server");

//   // Do something with the database connection here...

//   client.close();
// });


// CdBGzIXmqjL9u2Zq


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://madscientistnumber1:LMAODEAD@cluster0.wryl2tc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("connected");
  // perform actions on the collection object
  client.close();
});

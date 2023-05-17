// CdBGzIXmqjL9u2Zq
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const options = { family: 4 };                        //changin the IP formatting to IPv4 instead of IPv6 . read npm docs
const client = new MongoClient(url, options);


// Database Name
const dbName = 'fruitsDB';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('fruits');

  const insertResult = await collection.insertMany([                //inserting 3 elements
    { name : "Pineapple", rating: 5,review: "not bad"}, 
    {name : "Banana",rating: 10,review: "banana"}, 
    {name : "orange",rating: 4,review: "sour"}
  ]);
  // console.log('Inserted documents =>', insertResult);
  console.log("3 elements inserted");
  const findResult = await collection.find({}).toArray();          //printing the inserted elements
console.log('Found documents =>', findResult);

  return 'done. exit.';
}
// const insertDocuments = function(db, callback) {                    //OLD
//   // Get the documents collection
//   console.log("insert");
//   const collection = db.collection('fruits');
//   // Insert some documents
//   collection.insertMany([
//     { name : "Pineapple", rating: 5,review: "not bad"}, 
//     {name : "Banana",rating: 10,review: "banana"}, 
//     {name : "orange",rating: 4,review: "sour"}
//   ], function(err, result) {
//     assert.equal(err, null);                     //validating input
//     assert.equal(3, result.result.n);               //checking if the inputs are three or not
//     assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
  
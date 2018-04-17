// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'sam', age:27};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('unable to connect MongoClient server');
    }
    console.log('connect to mongodb server');

    // db.collection('Todos').insertOne({
    // 	text: 'something to do',
    // 	completed: false
    // }, (err, result) =>{
 //    if (err) {
 //        return console.log('unable to insert todo', err);
 //    }

 //    console.log(JSON.stringify(result.ops, undefined, 2));
 // });

// insert new doc into users (name, age,location)
// db.collection('Users').insertOne({
//     // _id: 123,
//     name: 'sam',
//     age: 27,
//     location: 'Taiwan'
// }, (err, result) => {
//     if (err) {
//         return console.log('unable to insert todo', err);
//     }

//     console.log(result.ops[0]._id.getTimestamp()) ;
// });


db.close();
});
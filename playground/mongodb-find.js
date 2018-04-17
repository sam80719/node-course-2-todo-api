// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('unable to connect MongoClient server');
    }
    console.log('connect to mongodb server');

// db.collection('Todos').find({
// 	_id:new ObjectID('5acc25bb2125950d84aec893')
// }).toArray().then((docs)=>{
// 	console.log('Todos');
// 	console.log(JSON.stringify(docs, undefined, 2));
// }, (err)=>{
// 	console.log('unable to fetch todos', err)
// });

// db.collection('Todos').find().count().then((count)=>{
// 	console.log(`Todos count: ${count}`);
// }, (err)=>{
// 	console.log('unable to fetch todos', err)
// });

db.collection('Users ').find({name: 'sam'}).toArray().then((docs)=>{
	console.log(JSON.stringify(docs,undefined, 2));
});


db.close();
});


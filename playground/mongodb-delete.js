// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('unable to connect MongoClient server');
    }
    console.log('connect to mongodb server');

    // deletemany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=> {
    // 	console.log(result);
    // })
    // deleteone
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
    // 	console.log(result);
    // })
    // findone and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    // 	console.log(result);
    // })



    // db.collection('Users').deleteMany({name: 'sam'});

     db.collection('Users').findOneAndDelete({_id: new ObjectID("5acad874d75e9a1ae4766f84")
 	}).then((result) => {
 		console.log(JSON.stringify(result, undefined, 2));
 	})
// db.close();
});


// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('unable to connect MongoClient server');
    }
    console.log('connect to mongodb server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5ad5f6172125950d84af0728')
    // }, {
    //     $set: {
    //         completed: true
    //     } 
    // }, {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5acad84aafc6191ad20850ea')
    }, {
        $set: {
            name : "sam"
        } ,
        $inc: {
             age: 1 //age increment add 1
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    }, (err)=>{
        console.log(`unable to update: ${err} `);
    });



// db.close();
});


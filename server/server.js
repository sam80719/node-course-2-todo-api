// var mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');

var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();


app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    // console.log(req.body); 
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (e) => {
        res.status(400).send(e);
    })
});

// get/todos/12345
app.get('/todos/:id', (req, res) => {
    // req.params
    var id = req.params.id;
    // res.send(req.params);

    //valid id using is valid
     // 404-send back empty send
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e)=>{
        res.status(400).send();
    });

    //findById
     // success
      //if todo -send it back
      //if no todo- send back 404 with empty body
     //error
      //400 - and send empty body back

});


app.listen(3000, () => {
    console.log('started on port 3000');
});

module.exports = { app };


// var newTodo = new Todo({
//  text: 'Cook dinner'
// });

// newTodo.save().then((doc)=>{
//  console.log('saved todo', doc);
// }, (e)=>{
//  console.log('unable to save todo')
// });

// var otherTodo = new Todo({
//  text: ' true '
// });

// var otherTodo = new Todo({
//  text: 'Feed the cat',
//  completed: true,
//  completedAt: 123
// });

// otherTodo.save().then((doc)=>{
//  console.log(JSON.stringify(doc, undefined, 2));
// }, (err)=>{
//  console.log('unable to save', err);
// }) ;


//user
//email-require it - trimit - set min length of 1 




// var user = new User({
//   email: 'andrew@example.com   '
// });

// user.save().then((doc) => {
//   console.log('User saved', doc);
// }, (e) => {
//   console.log('Unable to save user', e);
// });
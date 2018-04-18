// var mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');

var express = require('express');
var bodyParser = require('body-parser');


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
    }, (err) => {
    	res.status(400).send(err);
    });
});





app.listen(3000, () => {
    console.log('started on port 3000');
});


// var newTodo = new Todo({
// 	text: 'Cook dinner'
// });

// newTodo.save().then((doc)=>{
// 	console.log('saved todo', doc);
// }, (e)=>{
// 	console.log('unable to save todo')
// });

// var otherTodo = new Todo({
// 	text: ' true '
// });

// var otherTodo = new Todo({
// 	text: 'Feed the cat',
// 	completed: true,
// 	completedAt: 123
// });

// otherTodo.save().then((doc)=>{
// 	console.log(JSON.stringify(doc, undefined, 2));
// }, (err)=>{
// 	console.log('unable to save', err);
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
// var mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;


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

    //findById
    // success
    //if todo -send it back
    //if no todo- send back 404 with empty body
    //error
    //400 - and send empty body back

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({ todo });
    }).catch((e) => {
        res.status(400).send();
    });

    //findById
    // success
    //if todo -send it back
    //if no todo- send back 404 with empty body
    //error
    //400 - and send empty body back

});

app.delete('/todos/:id', (req, res) => {
    //get the id
    var id = req.params.id;

    //validate the id->not valid? return 404
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    //remove todo by id
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({ todo });
    }).catch((e) => {
        res.status(400).send();
    });
    //success
    //if no doc, send 404
    //id doc, send doc back with 200
    //error
    //400 with empty body
});


app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['test', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

});

Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((todo) => {
    if (!todo) {
        return res.status(404).send();
    }

    res.send({ todo });
}).catch((e) => {
    res.status(400).send();
})

app.listen(port, () => {
    console.log(`started up at port ${port}`);
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
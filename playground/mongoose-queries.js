const {ObjectID} = require('mongodb');
const {mongoose}= require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ae090b046c1f6241cb6bb4311';
// // oringal id = '5ae090b046c1f6241cb6bb43';

// if (!ObjectID.isValid(id)){
// 	console.log('id not vaild');
// }

// Todo.find({
// 	_id: id
// }).then((todo)=>{
// 	console.log('Todos', todo);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo)=>{
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{

// 	if(!todo){
// 		return console.log('id not find');
// 	}
// 	console.log('Todo By id', todo);
// }).catch((e)=>console.log(e));

User.findById('57bdb0fcdedf88540bfa2d66').then((user)=>{
	if(!user){
		return console.log('unable to find user');
	}
	console.log(JSON.stringify(user, undefined,2));
}, (e)=>{
	console.log(e);
})



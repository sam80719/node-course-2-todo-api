const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
	id:10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);


// var message = 'i am user no.1';
// var hash = SHA256(message).toString();

// console.log(`Message:${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
// 	id: 4
// };

// var token = {
// 	data,
// 	hash:SHA256(JSON.stringify(data)+'somescret').toString()
// }

// // token.data.id =5;
// // token.hash=SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data)+'somescret').toString();

// if (resultHash ===token.hash){
// 	console.log('data was not changed');
// }else{
// 	console.log('data was changed. do not trust');
// }
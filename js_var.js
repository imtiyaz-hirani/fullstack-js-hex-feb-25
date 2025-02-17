//create variable using var keyword --- old fashioned way
var userName='harry@gmail.com';
var age = 20;

//Note: during runtime, Node will auto detech the data types of these variables
console.log('username is ' + userName );
console.log("Age is " + age)

//creating variables using let and const 
const name='harry potter';
//name='harry james potter'; //X Assignment to constant variable.

console.log('Name is ' + name);

let email='harry@gmail.com';
email='harry@yahoo.com'; //with let it is possible to assign a new value

console.log('Email is ' + email)

/*
Developer tip: 
Use let and const instead of var. 
var is very generalized 
*/
// variable and contants

// let age = 20;
// console.log(age); //20
// let price = 300;
// console.log(price); //300

// age = 21;
// console.log(age); //21

// const pi = 3.142;
// console.log(pi);

//Data types at a glance

//1- number --> 1,3,0.54,3.4
//2- string --> series of characters "dev.mubashirimtiaz@gmail.com", "hasssan"
//3- boolean --> true /false
//4- null --> explicitle set a veriable with no value
//5- undefined --> for var that have not been defined
//6- obj --> complex data structure (arrays, Date, literals etc)
//7- symbol --> use with obj

// legal and illegal var name

// let firstName  = "hello" --> legal
// let 123 = "hello" --> illegal
// let _test = "hello" --> legal
// let $test = "hello" --> legal

//strings

let name = "daniyal";

console.log(name);
let email = "abc@abc.com";
console.log(email);

//string concetenation

let firstName = "ali";
let lastName = "Ahmed";

let fullName = firstName + " " + lastName;

console.log(fullName);

// getting characters

let char = lastName[1];

console.log(char);

//getting length

let _length = email.length;
console.log(_length);

// string methods

let resultOne = firstName.toUpperCase();
console.log(resultOne);

let resultTwo = lastName.toLowerCase();
console.log(resultTwo);

let getIndex = firstName.indexOf("A");
console.log(getIndex);

let _slice = email.slice(2, 4);
console.log(_slice);

let _subStr = email.substr(2, 6);
console.log(_subStr);

let change = email.replace("abc", "def");

console.log(change, email);

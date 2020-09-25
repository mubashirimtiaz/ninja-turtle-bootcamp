//object
// let key = "email";
// let user = {
//   name: "alexendra",
//   age: 32,
//   email: "alexendra@champ.com",
//   location: "Toronto",
//   blogs: [
//     "Two and two make four",
//     "The Dark Knight",
//     "blah blah blah",
//     "blah blah blahhhhhh!!",
//   ],
//   login() {
//     console.log(`${this.name} has wrote ${this.blogs.length} blogs`);
//   },
//   logBlog() {
//     this.blogs.forEach((blog, index) => {
//       console.log(`${blog} - ${index}`);
//     });
//   },
// };

// user.login();
// user.logBlog();
// console.log(this);
// console.log(user.name);

//this keyword

//accessing obj properties

// console.log(user.email);

// console.log(user.location);

// console.log(user[key]);

// adding properties to obj
// user.likes = 34;

// user.age = 23;
// console.log(user);

//Builtin JS Objects

// Math

// console.log(Math.PI);
// console.log(Math.E);

// let numOne = 3.9;

// console.log(Math.floor(numOne));
// console.log(Math.ceil(numOne));
// console.log(Math.round(numOne));
// console.log(Math.trunc(numOne));

// console.log(Math.random());

// const colors = ["crimson", "yellowgreen", "royalblue", "aqua", "black"];

// const body = document.querySelector("body");

// body.style.backgroundColor = colors[Math.floor(Math.random() * 5)];

// data types

// 1 String
// 2 Number
// 3 boolean
// 4 undefined
// 5 null
// 6 object
// 7 symbol

// primitive types

// 1 String
// 2 Number
// 3 boolean
// 4 undefined
// 5 null
// 6 symbol

// reference type

// 1 object

// let nameOne = "asad";
// let nameTwo = nameOne;
// nameOne = "ahad";

// console.log(nameOne);
// console.log(nameTwo);

let userOne = { name: "hassan", age: 32 };
let userTwo = userOne;
userOne.name = "ali";
userTwo.age = 90;

console.log(userOne); //{name : "ali",age:32}
console.log(userTwo); //{name : "hassan",age:32}

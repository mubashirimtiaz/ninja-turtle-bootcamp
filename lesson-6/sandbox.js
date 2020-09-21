// block scope and variable
// let age = 46;
// if (true) {
//   let age = 60;
//   console.log("inside of first code block", age); //60
//   if (true) {
//     console.log("inside of second code block", age); //60
//   }
// }

{
  {
    {
      //   var a = 40;
      //   console.log(a);
    }
  }
}
// console.log(a);

// console.log("outside of the code block", age); //46
// console.log(a);

// let countries = ["australia", "pakistan", "india", "srilanka", "china"];
// let shortName = [];

// for (let i = 0; i < countries.length; i++) {
//   shortName.push(countries[i].slice(0, 3).toUpperCase());
// }

// console.log(shortName);

// // Functions and methods

// function declaration and function expression

// function declaration
// function greet() {
//   console.log("Hello, world");
// }
// greet();

// function expression
// let sayHello = function () {
//   console.log("Say Hello");
// };

// sayHello();

// parameters and arguments

// const greet = function (name = "ahmed", age = 40) {
//   console.log(`Hello ${name} ,your age is ${age}`);
// };

// greet("Ali", 23);

// const calcArea = function (radius) {
//   return 3.142 * radius ** 2;
// };
// console.log(a);

// const area = calcArea(45);
// console.log(area);

//arrow function

// const calcArea = (radius) => 3.142 * radius ** 2;

// let area = calcArea(50);

// console.log(area);
// const greet = function (name) {
//   console.log("Hello", name);
// };

// greet();

60 + 60 * 0.4;

const greet = (name) => console.log("Hello,", name);

// greet("Jazzel");

// const totalExpense = function (items, tax) {
//   let total = 0;
//   for (let i = 0; i < items.length; i++) {
//     total += items[i] + items[i] * tax;
//   }
//   return total;
// };

// const total = totalExpense([40, 60, 80, 46], 0.6);
// console.log(total);

// const totalExpense = (items, tax) => {
//   let total = 0;
//   for (let i = 0; i < items.length; i++) {
//     total += items[i] + items[i] * tax;
//   }
//   return total;
// };

// const total = totalExpense([40, 60, 80, 46], 0.6);
// console.log(total);

// const name = "Ali";

// console.log(name.toUpperCase());

// calceArea()

// const funcOne = (callback) => {
//   let value = "test";
//   callback(value);
// };

// funcOne(function () {
//   console.log("test");
// });

// let names = ["hammad", "faaiz", "mudassir", "mubashir"];

// const itrator = (name, ind) => {
//   console.log(`${name} - ${ind}`);
// };

// itrator()
// names.forEach(itrator);

// const createQuote = (quote, callback) => {
//   let myQuote = "Like I always say, " + quote;
//   callback(myQuote);
// };

// const logQuote = (quote) => {
//   console.log(quote);
// };

// createQuote("eat your vegetables!", logQuote);

// let arr = ["mubashir", "mudassir", "hammad", "faaiz"];

// const callback = (value, index) => {
//   console.log(value + " " + index);
// };

// arr.forEach(callback);

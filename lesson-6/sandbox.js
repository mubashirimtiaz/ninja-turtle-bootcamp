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

const calcArea = function (radius) {
  return 3.142 * radius ** 2;
};
// console.log(a);

const area = calcArea(45);
console.log(area);

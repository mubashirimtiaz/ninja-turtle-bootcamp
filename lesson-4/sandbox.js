//null and undefined

let ageOne = null;

// console.log(ageOne, ageOne + 1, "hello" + ageOne);

let agetwo;

// console.log(agetwo, agetwo + 1, "hello" + agetwo);

// boolean and comparision
// console.log(true, false, "false", "true");

// method that return boolean

// let text = "Two and Two make four";

// let result = text.includes("two");

//comparision operators

// console.log(2 == 2);
// console.log("a" == "A");
// console.log("z" >= "A");
// console.log("a" <= "Z");

//Loose and Strict Comparision

//Loose (diff types can be equal)
// let age = 33;
// console.log(age == "33");
// console.log(age != "33");

//Strict (diff types cannot be equal)

// console.log(age === "33");
// console.log(age !== "33");
// console.log(age !== 33);
// console.log(age === 33);

//Type Casting /type conversion

let numOne = "32";
let numTwo = 33;
// console.log(Number(numOne) + 1);
// console.log(String(numTwo) + 1);
// console.log(Boolean("a"));
// console.log(Boolean("Hello"));
// console.log(Boolean(""));
// console.log(Boolean(1));
// console.log(Boolean(2473));
// console.log(Boolean(-13534657));
// console.log(Boolean(null));
// console.log(Boolean(undefined));

//Control Flow

//loops

// for loop

// let arr = ["mudassir", "mubashir", "samad", "faaiz", "hammad"];

// for (let i = 2; i < arr.length; i++) {
//   console.log("mr.", arr[i].toUpperCase());
// }

// console.log("loop finished");

// while loop

// let i = 0;
// while (i < 5) {
//   console.log("loop", i);
//   i++;
// }
// console.log("loop finished");

//do while

// let i = 6;
// do {
//   console.log("loop", i);
// } while (i < 5);

// if

// let age = 18;

// if (age < 10) {
//   console.log("age is greater than 10");
// } else {
//   console.log("age is less than 10");
// }

// let password = "password123";

// if (password.length > 8) {
//   console.log("it is a strong password");
// } else if (password.length > 5) {
//   console.log("it is a good password");
// } else {
//   console.log("weak password");
// }

//nested if

// let password = "password123@";

// if (password.length > 8) {
//   if (password.includes("@")) {
//     console.log("it is a strong password");
//   } else if (password.includes("$")) {
//     console.log("it is a strong password");
//   } else {
//     console.log("it doesn't includes @");
//   }
// } else if (password.length > 5) {
//   console.log("it is a good password");
// } else {
//   console.log("weak password");
// }

// logical operators

// let password = "password@";

// if (password.length > 8 && password.includes("@")) {
//   console.log("it is a strong password");
// } else if (password.length > 5) {
//   console.log("it is a good password");
// } else {
//   console.log("weak password");
// }

// console.log(true && false);
// console.log(true && true);
// console.log(false && true);
// console.log(false && false);

// console.log(true || false);
// console.log(false || true);
// console.log(true || true);
// console.log(false || false);

// console.log(true && false && true && true);
// console.log(false || false || true || true);

// let password = "password@";

// if (password.length > 6 && password.includes("$")) {
//   console.log("it is a strong password");
// } else if (password.length > 5) {
//   console.log("it is a good password");
// } else {
//   console.log("weak password");
// }

// console.log("2" === 2);

// for (let i = 0; i < 5; i++) {
//   console.log("loop", i);
//   if (i === 3) {
//     break;
//   }
// }

// console.log("loop finished");

// for (let i = 0; i < 5; i++) {
//   if (i == 3) {
//     continue;
//   }
//   console.log("loop", i);
// }

// console.log("loop finished");

// console.log(!!3);

// console.log(Boolean(undefined));

// console.log(3 === "3");

//switch

// let grade = "70";

// switch (grade) {
//   case "70":
//     console.log("Grade A");
//     break;
//   case "B":
//     console.log("Grade B");
//     break;
//   case "C":
//     console.log("Grade C");
//     break;
//   case "D":
//     console.log("Grade D");
//     break;
//   case "E":
//     console.log("Grade E");
//     break;
//   default:
//     console.log("Failed");
// }

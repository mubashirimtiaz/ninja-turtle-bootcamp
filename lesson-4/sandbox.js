//null and undefined

let ageOne = null;

// console.log(ageOne, ageOne + 1, "hello" + ageOne);

let agetwo;

// console.log(agetwo, agetwo + 1, "hello" + agetwo);

// boolean and comparision
// console.log(true, false, "false", "true");

// method that return boolean

let text = "Two and Two make four";

// let result = text.includes("two");

//comparision operators

// console.log(2 == 2);
// console.log("a" == "A");
// console.log("z" >= "A");
// console.log("a" <= "Z");

//Loose and Strict Comparision

//Loose (diff types can be equal)
let age = 33;
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

for (let i = 0; i < 5; i++) {
  console.log("loop", i);
}

console.log("loop finished");

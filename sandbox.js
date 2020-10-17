console.log("Arrays Methods");

//filter

const scores = [20, 45, 60, 85, 102, 50, 5];

const filteredScore = scores.filter((score) => score > 20);

console.log("scores", scores);
console.log("filteredScore", filteredScore);

const users = [
  { name: "ali", isLoggedIn: true },
  { name: "ahmed", isLoggedIn: false },
  { name: "raza", isLoggedIn: false },
  { name: "samad", isLoggedIn: true },
  { name: "farhan", isLoggedIn: false },
];

const filteredUsers = users.filter((user) => user.isLoggedIn);

console.log("users", users);
console.log("filteredUsers", filteredUsers);

//Map

const marks = [10, 20, 50, 75, 80];

const mappedMarks = marks.map((mark) => mark + 3);

console.log("marks", marks);
console.log("mappedMarks", mappedMarks);

const products = [
  { name: "blue-Tshirt", price: 300 },
  { name: "black-hat", price: 250 },
  { name: "red-tie", price: 150 },
  { name: "belt", price: 500 },
];

const mappedProducts = products.map((product) => {
  return { name: product.name, price: product.price / 2 };
});

console.log("products", products);
console.log("mappedProducts", mappedProducts);

//find

const numbers = [3, 5, 40, 60, 90, 140];

const findNum = numbers.find((num) => {
  return num > 55;
});

console.log("numbers", numbers);
console.log("findNum", findNum);

//sort
const names = ["mudassir", "mubashir", "faaiz", "hammad"];

names.sort();

console.log(names);

const nums = [4, 8, 1, 98, 105, 5, 0];

nums.sort((a, b) => b - a);
// nums.reverse();
console.log(nums);

const employers = [
  { name: "ali", salary: 10 },
  { name: "ahmed", salary: 9 },
  { name: "farhan", salary: 91 },
  { name: "samad", salary: 80 },
  { name: "raza", salary: 5 },
];

employers.sort((a, b) => a.salary - b.salary);

console.log(employers);

//reduce

const textNum = [22, 33, 65, 9, 90];

// acc = accumalator
// curr = current
const reducedNum = textNum.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);

console.log("textNum", textNum);
console.log("reducedNum", reducedNum);

const cartoons = [
  { name: "jerry", score: 20 },
  { name: "garfield", score: 32 },
  { name: "popeye", score: 12 },
  { name: "bobthebuilder", score: 43 },
  { name: "jerry", score: 40 },
  { name: "bobthebuilder", score: 54 },
  { name: "jerry", score: 60 },
  { name: "garfield", score: 62 },
  { name: "jerry", score: 70 },
];

const totalScore = cartoons.reduce((acc, curr) => {
  if (curr.name === "garfield") {
    acc += curr.score;
  }
  return acc;
}, 0);

console.log(totalScore);

// methods chaining

const outletProducts = [
  { name: "blue-shirt", price: 200 },
  { name: "green-trouser", price: 500 },
  { name: "black-belt", price: 300 },
  { name: "golden-chain", price: 570 },
  { name: "braslet", price: 150 },
  { name: "shoes", price: 600 },
  { name: "skin-pent", price: 100 },
];

const discountedProducts = outletProducts
  .filter((product) => product.price > 180)
  .map((product) => ({ name: product.name, price: product.price / 2 }));

console.log("outletProducts", outletProducts);
console.log("discountedProducts", discountedProducts);

console.log("Arrays Methods");

//filter

const scores = [20,45,60,85,102,50,5];

const filteredScore = scores.filter(score=>score > 20)

console.log("scores",scores);
console.log("filteredScore",filteredScore);

const users = [
    {name: "ali", isLoggedIn : true},
    {name: "ahmed", isLoggedIn : false},
    {name: "raza", isLoggedIn : false},
    {name: "samad", isLoggedIn : true},
    {name: "farhan", isLoggedIn : false},
];

const filteredUsers = users.filter(user=> user.isLoggedIn);

console.log("users",users);
console.log("filteredUsers",filteredUsers);

//Map

const marks = [10,20,50,75,80];

const mappedMarks = marks.map((mark)=>{
    return mark + 3;
})

console.log("marks",marks);
console.log("mappedMarks",mappedMarks);

const products = [
    {name: "blue-Tshirt", price: 300},
    {name: "black-hat", price: 250},
    {name: "red-tie", price: 150},
    {name: "belt", price: 500},
];

const mappedProducts = products.map((product)=>{
    return {name: product.name, price: product.price /2 }
})

console.log("products",products);
console.log("mappedProducts",mappedProducts);

//find

const numbers = [3,5,40,60,90,140];

const findNum = numbers.find(num=>{
    return num > 55;
})

console.log("numbers",numbers);
console.log("findNum",findNum);

//sort
const names = ["mudassir","mubashir","faaiz","hammad"];

names.sort();

console.log(names);

const nums = [4,8,1,98,105,5,0];

nums.sort((a,b)=>{
   if(a > b){
       return -1
   } else if (b > a) {
       return 1
   }else{
       return 0;
   } 
});

console.log(nums);

const employers = [
    {name: "ali", salary : 10}, 
    {name: "ahmed", salary : 9}, 
    {name: "raza", salary : 5},
    {name: "samad", salary : 80},
    {name: "farhan", salary : 91},
];

employers.sort((a,b)=>{
 if (a.salary > b.salary){
     return -1;
 }else if (b.salary >a.salary){
     return 1;
 }else{
     return 0;
 }
});

console.log(employers);
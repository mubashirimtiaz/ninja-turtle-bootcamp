// console.log("Async JS");

console.log("Hello 1");
console.log("Hello 2");

setTimeout(() => {
  console.log("async task");
}, 3000);

console.log("Hello 3");

// JSON --> JS Object Notation

// {
//   "name" : "hassan",
// }

//fetch

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//forms

const submit = document.querySelector('input[type="submit"]');
// const input = document.querySelector('input[type="text"]');
const form = document.querySelector("form");
const feedback = document.querySelector(".feedback");
const inputs = document.querySelectorAll("input");

// console.log(inputs);

const pattern = {
  username: /^[a-zA-Z0-9]{3,20}$/,
  password: /^[a-zA-Z0-9@$]{6,20}$/,
  phone: /^[0-9]{11}$/,
};

const checkPattern = (field, pattern) => {
  if (pattern.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    checkPattern(e.target, pattern[e.target.getAttribute("name")]);
  });
});
// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(input.value);
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(e);
//   const pattern = /^[a-zA-Z0-9]{3,20}$/;
//   const result = pattern.test(input.value);
//   if (result) {
//     feedback.innerText = "Valid user input";
//     feedback.className = "valid";
//   } else {
//     feedback.innerText = "Invalid user input";
//     feedback.className = "invalid";
//   }
// });

// const pattern = /^[a-zA-Z0-9]{3,20}$/;
// const username = "aszdghjfsbcvvxcxvxvcxvfcfdb";

// const result = pattern.test(username);
// console.log(result);

// console.log(form.username);

// form.username.addEventListener("keyup", (e) => {
//   const pattern = /^[a-zA-Z0-9]{3,20}$/;
//   if (pattern.test(e.target.value)) {
//     e.target.className = "valid";
//   } else {
//     // console.log("invalid");
//     e.target.className = "invalid";
//   }
// });

// form.password.addEventListener("keyup", (e) => {
//   const pattern = /^[@]{1}[\w]{6,20}$/;
//   if (pattern.test(e.target.value)) {
//     e.target.className = "valid";
//   } else {
//     // console.log("invalid");
//     e.target.className = "invalid";
//   }
// });

let key = "name";

const obj = {
  name: "hassan",
  age: 32,
};

console.log(obj[key]);

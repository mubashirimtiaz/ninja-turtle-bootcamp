//forms

const submit = document.querySelector('input[type="submit"]');
const input = document.querySelector('input[type="text"]');
const form = document.querySelector("form");
const feedback = document.querySelector(".feedback");

// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(input.value);
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const pattern = /^[a-zA-Z0-9]{3,20}$/;
  const result = pattern.test(input.value);
  if (result) {
    feedback.innerText = "Valid user input";
    feedback.className = "valid";
  } else {
    feedback.innerText = "Invalid user input";
    feedback.className = "invalid";
  }
});

// const pattern = /^[a-zA-Z0-9]{3,20}$/;
// const username = "aszdghjfsbcvvxcxvxvcxvfcfdb";

// const result = pattern.test(username);
// console.log(result);

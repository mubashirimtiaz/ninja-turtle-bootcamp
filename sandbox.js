// console.log("DOM");

// console.log(document);

//quering the DOM

// const h1 = document.querySelector("h1");
// const para = document.querySelectorAll(".para");
// const unique = document.querySelector("#unique_para");

// console.log(h1);
// console.log(para);
// console.log(unique);

// const heading = document.getElementsByTagName("h1");
// console.log(heading);
// const para = document.getElementsByClassName("para");
// console.log(para);
// const id = document.getElementById("unique_para");
// console.log(id);

//adding and changing content

// const heading = document.querySelector("h1");
// heading.innerText = "DOM the Boss";

// const uniquePara = document.querySelector("#unique_para");
// uniquePara.innerText = "Hammad is a genius";

// const container = document.querySelector(".container");

// container.innerHTML = "<p>sometthing...</p>";

// const truth = document.querySelector(".universal-truth");
// truth.innerText += " four";

// const anchor = document.querySelector("a");
// anchor.style.padding = "50px";
// anchor.style.fontSize = "24px";
// anchor.style.textDecoration = "none";

// anchor.getAttribute("href");
// anchor.setAttribute("href", "https://www.youtube.com");
// anchor.setAttribute("class", "anchor");
// anchor.innerText = "youtube";

// const containerFluid = document.querySelector(".contaner-fluid");

// console.log(containerFluid.classList);

// containerFluid.classList.add("parent");
// containerFluid.classList.remove("contaner-fluid");

// const paras = document.querySelectorAll(".container-fluid p");

// paras.forEach((para) => {
//   if (!para.innerText.includes("amet")) {
//     para.classList.remove("success");
//     para.classList.add("error");
//   }
// });

// paras.forEach((para) => {
//   para.classList.toggle("success");
// });

// const title = document.querySelector("h1");

// console.log(title);
// console.log(title.parentElement);
// console.log(title.previousElementSibling);
// console.log(title.nextElementSibling);
// console.log(title.parentElement.parentElement.previousElementSibling);
// console.log(title.nextElementSibling.children);

//Event Basics
//step 1
const button = document.querySelector("button");

//step2 -- step3
// button.addEventListener("click", () => {
//   console.log("you clicked me :)");
// });

// const ul = document.querySelector("ul");
// ul.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     // event.target.style.textDecoration = "line-through";
//     event.target.classList.toggle("done");
//     // event.target.remove()
//   } else {
//     console.log("you clicked somewhere else");
//   }
//   // console.log(event.target.tagName);
// });

// console.log(ul);

// button.addEventListener("click", (event) => {
//   // console.log(event.target);
//   // ul.innerHTML += `<li>New Todo</li>`;
//   let li = document.createElement("li");
//   li.innerText = "New Todo";
//   ul.appendChild(li);
//   // ul.prepend(li);
// });

// const lis = document.querySelectorAll("li");
// console.log(lis);

// lis.forEach((li) => {
//   li.addEventListener("click", (event) => {
//     console.log(event.target);
//     event.target.style.textDecoration = "line-through";
//     event.stopPropagation();

//     event.target.remove();
//   });
// });

// const li = document.querySelector("li");
// console.log(li);
// li.remove();

//copy event

const copywrite = document.querySelector(".copywrite");

copywrite.addEventListener("copy", (event) => {
  console.log("you'd better not copy my content");
});

// const hoverMe = document.querySelector(".hover-me");
// hoverMe.addEventListener("mouseover", () => {
//   console.log("you hover over me");
// });

const wheel = document.querySelector(".wheel");
wheel.addEventListener("mouseover", (e) => {
  console.log(e.offsetX, e.offsetY);
});

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

const paras = document.querySelectorAll(".container-fluid p");

paras.forEach((para) => {
  if (!para.innerText.includes("amet")) {
    para.classList.remove("success");
    para.classList.add("error");
  }
});

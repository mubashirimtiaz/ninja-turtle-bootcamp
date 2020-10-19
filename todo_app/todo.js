const addForm = document.querySelector(".add-todo");
const searchForm = document.querySelector(".search-todo");
const list = document.querySelector(".todos");

//Search todo Function
const searchTodo = (todo) => {
  Array.from(list.children)
    .filter((item) => !item.textContent.toLowerCase().includes(todo))
    .forEach((item) => item.classList.add("filtered"));

  Array.from(list.children)
    .filter((item) => item.textContent.toLowerCase().includes(todo))
    .forEach((item) => item.classList.remove("filtered"));
};

//search todo
searchForm.search.addEventListener("keyup", (e) => {
  const todo = e.target.value.toLowerCase().trim();
  searchTodo(todo);
});

//create todo Function
const createTemplate = (todo) => {
  const item = `<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete text-danger"></i>
            </li>`;
  list.innerHTML += item;
};

//add todos
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = e.target.add.value.trim();
  createTemplate(todo);
  //   e.target.add.value = "";
  e.target.reset();
});

//delete todos
list.addEventListener("click", (e) => {
  if (e.target.className.includes("fa-trash-alt")) {
    e.target.parentElement.remove();
  }
});

const text = document.querySelector(".text");

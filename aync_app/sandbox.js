const list = document.querySelector("ul");
console.log(list);

const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
};

const todos = getTodos()
  .then((data) => {
    // console.log(data);
    // // list.append(`<li></li>`)
    data.forEach((todo) => {
      //   console.log(todo);
      let li = `<li>
           <span class="title">${todo.title}</span> 
           <span class="completed">${todo.completed}</span> 
        </li>`;

      list.innerHTML += li;
    });
  })
  .catch((err) => {
    console.log(err);
  });

let url = "http://127.0.0.1:3000/api/v1";
let ul = document.getElementById("todo-list");
fetch(url + "/todos?per_page=10")
  .then((res) => res.json())
  .then((data) => {
    let todos = data.datas;
    console.log(todos);
    todos.forEach((e, i) => {
      ul.innerHTML =
        ul.innerHTML +
        (e.completed === true
          ? `<div id=${e.id} class = checked>${e.title}</div>`
          : `<div><span>${e.title}</span></div>`);
    });
  })
  .catch((err) => console.log(err));

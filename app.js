let btn = document.querySelector("button");
let input = document.getElementById("todoInput");
let todoList = document.getElementById("todoList");

btn.addEventListener("click", function() {
    let newTodo = document.createElement("li");
    newTodo.textContent = input.value;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", function() {
        todoList.removeChild(newTodo);
    });
    newTodo.appendChild(removeBtn);

    todoList.appendChild(newTodo);
    input.value = "";
});

let removeButtons = document.querySelectorAll("button");
removeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let parent = this.parentElement;
        todoList.removeChild(parent);
    });
});
let btn = document.querySelector("button");
let input = document.getElementById("todoInput");
let todoList = document.getElementById("todoList");

btn.addEventListener("click", function() {
    console.log(input.value);
    input.value = "";
});

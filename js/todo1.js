let todoForm = document.querySelector(".todo-form");
let btn = todoForm.querySelector("button");
let todoList = document.querySelector(".todo-list");
let todoInput = todoForm.querySelector("input");


btn.addEventListener("click", function(event) {
    event.preventDefault();

    if (todoInput.value.trim() === "") {
        alert("please enter a task");
        return;
    } else {
        let li = document.createElement("li");

        // create span for task text
        let taskText = document.createElement("span");
        taskText.textContent = todoInput.value;
        li.appendChild(taskText);

        // toggle completed on clicking the text
        taskText.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        // create delete button
        let delBtn = document.createElement("button");
        delBtn.textContent = "×";  // cross symbol
        delBtn.classList.add("todo-delete-btn");
        li.appendChild(delBtn);

        // delete task on button click
        delBtn.addEventListener("click", function() {
            li.remove();
        });

        // append li to the list
        todoList.appendChild(li);

        // clear input
        todoInput.value = "";
    }
});

// done  with the to-do section //

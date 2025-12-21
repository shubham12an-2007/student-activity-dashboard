let todoForm = document.querySelector(".todo-form");
let btn = todoForm.querySelector("button");
let todoList = document.querySelector(".todo-list");
let todoInput = todoForm.querySelector("input");

// for thre progress bar //
let progressFill = document.querySelector(".progress-fill");
let progressPercent = document.querySelector(".progress-percent");

// for the data analytics card //
let totalTask = document.getElementById("totalTasks");
let completeTasks = document.getElementById("completedTasks");  


function updateProgress(){
    const allTasks = document.querySelectorAll(".todo-list li");
    const completedTasks = document.querySelectorAll(".todo-list li.completed");

    let percent =0;

    if(allTasks.length !== 0){
        percent = Math.round((completedTasks.length / allTasks.length) * 100 );

    }

    progressFill.style.width = percent + "%";
    progressPercent.textContent = percent + "%" ;
    
}

function updateTaskAnalytics(){  

    const allTasks = document.querySelectorAll(".todo-list li");
    const completedTasks = document.querySelectorAll(".todo-list li.completed");

    totalTask.textContent = allTasks.length;
    completeTasks.textContent = completedTasks.length;

}


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
            updateProgress() ;
            updateTaskAnalytics() ;
        });

        // create delete button
        let delBtn = document.createElement("button");
        delBtn.textContent = "×";  // cross symbol
        delBtn.classList.add("todo-delete-btn");
        li.appendChild(delBtn);

        // delete task on button click
        delBtn.addEventListener("click", function() {
            li.remove();
            updateProgress();
            updateTaskAnalytics(); 
        });

        // append li to the list
        todoList.appendChild(li);

        updateProgress() ;
        updateTaskAnalytics(); 

        // clear input
        todoInput.value = "";
    }
});

updateProgress() ;
updateTaskAnalytics(); 


// done  with the to-do section //



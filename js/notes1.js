
let notesForm = document.querySelector(".notes-form");
let notesInp = notesForm.querySelector("input");
let noteContentInput = notesForm.querySelector("textarea")
let saveBtn = notesForm.querySelector(".save-btn");
let notesContainer = document.querySelector(".notes-container");


saveBtn.addEventListener("click", function(event) {
    event.preventDefault();

    if (notesInp.value.trim() === "") {
        alert("please enter something");
        return;
    }

    let div = document.createElement("div");
    div.classList.add("note");

    let title = document.createElement("h3");
    title.textContent = notesInp.value;
    div.appendChild(title);

    let content = document.createElement("p");
content.textContent = noteContentInput.value;
div.appendChild(content);

    let delBtn = document.createElement("button");
    delBtn.textContent = "×";
    delBtn.classList.add("notes-delete-btn");
    div.appendChild(delBtn);

    delBtn.addEventListener("click", function() {
        div.remove();
    });

    notesContainer.appendChild(div);

    notesInp.value = "";
});


// we have completed the notes part //
 //  I am starting off with making of daily goals //
let card = document.querySelector(".goal-card");
let goalInput = card.querySelector("input");
let goalBtn = card.querySelector("button");
let goalList = card.querySelector(".goal-list");


goalBtn.addEventListener("click" , function(event) {
    event.preventDefault();

    if(goalInput.value.trim() === ""){
        alert("please enter a goal ");
    }
    else {
        let li = document.createElement("li"    );

           // create span for task text
        let taskText = document.createElement("span");
        taskText.textContent = goalInput.value;
        li.appendChild(taskText);

        goalList.appendChild(li); 

        goalInput.value = "" ; 
    }


}); 
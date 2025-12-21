 //  I am starting off with making of daily goals //
let card = document.querySelector(".goal-card");
let goalInput = card.querySelector("input");
let goalBtn = card.querySelector("button");
let goalList = card.querySelector(".goal-list");

// now making of the card analytics goal section //
let totalGoals = document.getElementById("totalGoals");
let completedGoals = document.getElementById("completedGoals");

// making of a function //
function updateGoalAnalytics(){
    
    const totalNumber = document.querySelectorAll(".goal-list li");
    const completedNumber = document.querySelectorAll(".goal-list li.completed");

    totalGoals.textContent = totalNumber.length ;
    completedGoals.textContent = completedNumber.length; 

}





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
        updateGoalAnalytics() ;

        goalInput.value = "" ; 


          taskText.addEventListener("click", function() {
    li.classList.toggle("completed");   // marks completed/uncompleted
    updateGoalAnalytics();               // updates the analytics card
});

let delBtn = document.createElement("button");
delBtn.textContent = "x";
delBtn.classList.add("goal-delete-btn");
li.appendChild(delBtn);

delBtn.addEventListener("click" , function()  {
    li.remove();
    updateGoalAnalytics(); 
})

    }

  


}); 


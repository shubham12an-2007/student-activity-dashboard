// we are starting off with timer secion //

// since we are making timer as the given duartion ends break starts //
let timerDisplay = document.querySelector(".timer-display");
let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");


// variables names for study time , break time and reamaing time  //
let studyTime =  1500 ;
let breakTime = 300 ;
let remainingTime = 1500 ;

let intervalId = null ;

function updateDisplay() {
  let minutes = Math.floor(remainingTime / 60);
  let seconds = remainingTime % 60;

  timerDisplay.textContent =
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");
}

// start //
start.addEventListener( "click" , function() {

    if (intervalId !== null) return;

    intervalId = setInterval(function() {
        if(remainingTime > 0){
            remainingTime -- ;
            updateDisplay(); 

        }
        else {
            clearInterval(intervalId) ;
            intervalId = null ;
            alert("Study session complete! Take a break ☕");    
        }
     } , 1000 ) ;

    }) ;

     pause.addEventListener("click" , function() {
        clearInterval(intervalId) ;
        intervalId = null;
     })

     reset.addEventListener("click" , function() {
        clearInterval(intervalId);
         intervalId = null; 
        remainingTime = studyTime ;
       
        updateDisplay() ;
     }); 

     //INTIAL DISPLAY //
     updateDisplay(); 




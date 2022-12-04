// wait for the DOM to finish loading before starting the game 
// Add eventListeners to the buttons
// Disable arrows before start is clicked

const startBtn = document.getElementById("start")

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    document.querySelector(".above").disabled = true;
    document.querySelector(".below").disabled = true;
    

});

var div = document.getElementById("start-game");

// Execute a function when the user presses a key on the keyboard
div.addEventListener("click", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter")
  
});

document.getElementById("start").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log(event.key)
        startGame();
    }
});

//Add query Selector for all elements in use for the game

startBtn.addEventListener("click", startGame)


let leftText = document.querySelector(".game-card-left")
let rightText = document.querySelector(".game-card-right")
let upArrow = document.querySelector(".above")
let downArrow = document.querySelector(".below")

//Function when the game starts that generates a whole number between 1-14 on the left card
//Enable start button until one of the arrows is pressed

function startGame() {
    let num1 = Math.floor(Math.random() * 14) +1;
   leftText.innerText = num1
   document.querySelector(".start").disabled = true;
    console.log(leftText, "num")
    document.querySelector(".above").disabled = false;
    document.querySelector(".below").disabled = false;
    

}

//Add event Listener for up arrow and disable arrows until start is clicked on

upArrow.addEventListener("click", function(){
    checkAnswer("up")
    document.querySelector(".start").disabled = false;
    document.querySelector(".above").disabled = true;
    document.querySelector(".below").disabled = true;
})

//Add event Listener for down arrow and disable arrows until start is clicked on

downArrow.addEventListener("click", function(){
    checkAnswer("down")
    document.querySelector(".start").disabled = false;
    document.querySelector(".below").disabled = true;
    document.querySelector(".above").disabled = true;
})

// Add a random number for right card between 1-14
// Function to calculate if users guess is correct or not

 function checkAnswer(userSelection){
    console.log(userSelection, "user selection")
    let num2 = Math.floor(Math.random() * 14) +1;
    rightText.innerText = num2;


    if(userSelection === "up") {
        
        if(parseInt(rightText.innerText) > parseInt(leftText.innerText)){
            console.log("you won!")
            increaseVictory()
        }else{
            console.log("you lost!")
            increaseDefeat()  
        }
        
    }else {
        if(parseInt(rightText.innerText) < parseInt(leftText.innerText)){
            console.log("you won!")
            increaseVictory()
        }else{
            console.log("you lost!")
            increaseDefeat()
        }
    }

    }

// Add score to the board if user is right
function increaseVictory(){
    let oldScore = parseInt(document.getElementById("right").innerText);
    document.getElementById("right").innerText = ++oldScore;
}

// Add score to the board if user is wrong

function increaseDefeat(){
    let oldScore = parseInt(document.getElementById("wrong").innerText);
    document.getElementById("wrong").innerText = ++oldScore;

}


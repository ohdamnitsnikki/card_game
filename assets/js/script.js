// wait for the DOM to finish loading before starting the game 
// Add eventListeners to the buttons
// Disable arrows before start is clicked

window.addEventListener('keydown', function (event) {
    const startBtn = document.getElementById("start")

    const key = event.key; 
   
    if (key === "ArrowUp" && startBtn.disabled) {
        checkAnswer("up")
        document.querySelector(".above").disabled = true;
        document.querySelector(".below").disabled = true;
        document.querySelector(".start").disabled = false;
    } else if (key === "ArrowDown" && startBtn.disabled) {
        checkAnswer("down")
        document.querySelector(".above").disabled = true;
        document.querySelector(".below").disabled = true;
        document.querySelector(".start").disabled = false;
    }
});

const startBtn = document.getElementById("start")

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".above").disabled = true;
    document.querySelector(".below").disabled = true;
});

// Target body to enable event listeners

var body = document.querySelector("body");

// Execute a function when the user presses a key on the keyboard

body.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("start").click();
    }
    if (event.key === "w") {
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("above").click();
    }
    if (event.key === "a") {
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("below").click();
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
    let num1 = Math.floor(Math.random() * 14) + 1;
    leftText.innerText = num1
    let num2 = rightText.innerText = 0;
    document.querySelector(".start").disabled = true;
    document.querySelector(".above").disabled = false;
    document.querySelector(".below").disabled = false;


}

//Add event Listener for up arrow and disable arrows until start is clicked on

upArrow.addEventListener("click", function () {
    checkAnswer("up")
    document.querySelector(".start").disabled = false;
    document.querySelector(".above").disabled = true;
    document.querySelector(".below").disabled = true;

})


//Add event Listener for down arrow and disable arrows until start is clicked on

downArrow.addEventListener("click", function () {
    checkAnswer("down")
    document.querySelector(".start").disabled = false;
    document.querySelector(".below").disabled = true;
    document.querySelector(".above").disabled = true;
})

// Add a random number for right card between 1-14
// Function to calculate if users guess is correct or not

function checkAnswer(userSelection) {
    console.log(userSelection, "user selection")
    let num2 = Math.floor(Math.random() * 14) + 1;
    rightText.innerText = num2;


    if (userSelection === "up") {

        if (parseInt(rightText.innerText) > parseInt(leftText.innerText)) {
            console.log("you won!")
            increaseVictory()
        } else {
            console.log("you lost!")
            increaseDefeat()
        }

    } else {
        if (parseInt(rightText.innerText) < parseInt(leftText.innerText)) {
            console.log("you won!")
            increaseVictory()
        } else {
            console.log("you lost!")
            increaseDefeat()
        }
    }

}

// Add score to the board if user is right
function increaseVictory() {
    let oldScore = parseInt(document.getElementById("right").innerText);
    document.getElementById("right").innerText = ++oldScore;
}

// Add score to the board if user is wrong

function increaseDefeat() {
    let oldScore = parseInt(document.getElementById("wrong").innerText);
    document.getElementById("wrong").innerText = ++oldScore;

}
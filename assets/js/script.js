// wait for the DOM to finish loading before starting the game 
// Add eventListeners to the buttons

const startBtn = document.getElementById("start")

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    // for (let button of buttons) {
    //     button.addEventListener("click", function() {
    //         if (this.getAttribute("data-type") === "start") {
    //             alert("You clicked Start!");
    //         } else {
    //             let gameType = this.getAttribute("data-type");
    //             runGame(gameType);
    //         }
    //     });
    // }

   // runGame("card-game");

});

/**
 * The game loop that starts after the script is loaded
 * and after the user pressed one of the buttons
 */
//add eventlistener to btn click
//get random number btw 1-14
//insert in DOM

startBtn.addEventListener("click", startGame)


let leftText = document.querySelector(".game-card-left")
let rightText = document.querySelector(".game-card-right")
let upArrow = document.querySelector(".above")
let downArrow = document.querySelector(".below")


function startGame(gameType) {
    let num1 = Math.floor(Math.random() * 14) +1;
   leftText.innerText = num1
   document.querySelector(".start").disabled = true;
    //creates two whole random numbers between 1-14
    console.log(leftText, "num")

}


upArrow.addEventListener("click", function(){
    checkAnswer("up")
})

downArrow.addEventListener("click", function(){
    checkAnswer("down")
})



 function checkAnswer(userSelection){
    console.log(userSelection, "user selection")
    let num2 = Math.floor(Math.random() * 14) +1;
    rightText.innerText = num2;

    const isHigher = rightText.innerText > leftText.innerText
    const isLower = rightText.innerText < leftText.innerText
    const isEqual = rightText.innerText == leftText.innerText

    if(userSelection === "up") {
        
        if(userSelection === "up" && isHigher){
            console.log("you won!")
        }else{
            console.log("you lost!")  
        }
        
    }else if(userSelection === "down"){

    }else{

    }

   // console.log(isHigher, "isHigher")

 }

// function checkCorrectAnswer()

// function increaseWictory()

// function increaseDefeat()

function giveCard(rightCard) {
    document.getElementsByClassName("game-card-right").textContent = computercard;
}
// wait for the DOM to finish loading before starting the game 
// Add eventListeners to the buttons

const startBtn = document.getElementById("start")

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    document.querySelector(".above").disabled = true;
    document.querySelector(".below").disabled = true;

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
    document.querySelector(".above").disabled = false;
    document.querySelector(".below").disabled = false;
    

}


upArrow.addEventListener("click", function(){
    checkAnswer("up")
    document.querySelector(".start").disabled = false;
    document.querySelector(".above").disabled = true;
    document.querySelector(".below").disabled = true;
})

downArrow.addEventListener("click", function(){
    checkAnswer("down")
    document.querySelector(".start").disabled = false;
    document.querySelector(".below").disabled = true;
    document.querySelector(".above").disabled = true;
})



 function checkAnswer(userSelection){
    console.log(userSelection, "user selection")
    let num2 = Math.floor(Math.random() * 14) +1;
    rightText.innerText = num2;

    const isHigher = rightText.innerText > leftText.innerText
    const isLower = rightText.innerText < leftText.innerText

    if(userSelection === "up") {
        
        if(userSelection === "up" && isHigher){
            console.log("you won!")
            increaseWictory();
        }else{
            console.log("you lost!")
            increaseDefeat()  
        }
        
    }else(userSelection === "down");
        if(userSelection === "down" && isLower){
            console.log("you won!")
            increaseWictory();
        }else{
            console.log("you lost!")
            increaseDefeat()
        }

    }

function increaseWictory(){
    let oldScore = parseInt(document.getElementById("right").innerText);
    document.getElementById("right").innerText = ++oldScore;
}

function increaseDefeat(){
    let oldScore = parseInt(document.getElementById("wrong").innerText);
    document.getElementById("wrong").innerText = ++oldScore;

}



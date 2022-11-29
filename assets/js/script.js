// wait for the DOM to finish loading before starting the game 
// Add eventListeners to the buttons

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            if let gameType = this.getAttribute("above"); {
                runGame(gameType);
                
            } else {
                let gameType = this.getAttribute("below");
                runGame(gameType);
            }

        })
    }

})

/**
 * The game loop that starts after the script is loaded
 * and after the user pressed one of the buttons
 */

function startGame(gameType) {

    //creates two whole random numbers between 1-14
    let num1 = Math.floor(Math.random() * 14) +1;
    let num2 = Math.floor(Math.random() * 14) +1;
}

function checkAnswer()

function checkCorrectAnswer()

function increaseWictory()

function increaseDefeat()

function giveCard(leftCard)
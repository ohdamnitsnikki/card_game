// wait for the DOM to finish loading before starting the game 
// Add eventListeners to the buttons

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){

        })
    }

})

startGame() {

    //creates two whole random numbers between 1-14
    let num1 = Math.floor(Math.random() * 14) +1;
    let num2 = Math.floor(Math.random() * 14) +1;
}

checkAnswer()

checkCorrectAnswer()

increaseWictory()

increaseDefeat()
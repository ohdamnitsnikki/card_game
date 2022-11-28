// wait for the DOM to finish loading before starting the game 
// Add eventListeners to the buttons

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            
        })
    }

})

startGame()

checkAnswer()

checkCorrectAnswer()

increaseWictory()

increaseDefeat()
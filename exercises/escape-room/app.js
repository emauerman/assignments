const readline = require("readline-sync");

const name = readline.question("What is your name? ");
console.log ("Thank you " + name + "!" )

let gameOver = false
let options = ["Put hand in hole", "Find the key", "Open the door", "Take a drink"]
let key = (false)

while(!gameOver){
        const userAnswer = readline.keyInSelect(options, "What would you like to do?: ")

        if(userAnswer === 0){
            console.log("you died, why did you put your hand in the hole? ")
            gameOver = true
        
        } else if(userAnswer === 1) {
            console.log("You found the key! ")
            key = true

        } else if(userAnswer === 2 && key === false) {
            console.log("The door can not open with out a key")

        } else if(userAnswer === 2 && key === true) {
            console.log("YOU ESCAPED! " + name + "!")
            gameOver = true

        } else if(userAnswer === 3){
            console.log("You drank the poison!")
            gameOver = true
        
        } else if(userAnswer === -1) {
            console.log("You cannot cancel the escape room ")
        }

}




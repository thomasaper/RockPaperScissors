

// Create a function named getComputerChoice that randomly outputs 'Rock', 'Paper', or 'Scissors'.

// Pseudocode
// Create the function getComputerChoice
// Create an array with the strings
// create a variable with a random algorithm that returns a number based on the length of the array
// create a return function with the ternary operator (?) that returns 'Rock', 'Paper' or 'Scissors' based on the number
// ternary operator logic = condition ? code condition true : code condition false

function getComputerChoice() {
        let choice = ["ROCK", "PAPER", "SCISSORS"];
        let compChoice = Math.floor(Math.random() * choice.length);

        return compChoice == 0 ? "ROCK":
               compChoice == 1 ? "SCISSORS":
               "PAPER";      
};


// Create a function that plays a single round of Rock Paper Scissors. The parameters playerSelection and computerSelection
// should be included. At the end of the game a string should be output, which announces the winner. The playerSelection shall 
// be case-insensitive

// Pseudo code
// Create a variable that contains the computerSelection
// Create a variable that queries the playerSelection
// Create a function that runs a round with the parameters and determines the winner
// Make the input of the playerSelection case-insensitive

let computerSelection = getComputerChoice();
let playerSelection = "ROCK";

function playRound(computerSelection, playerSelection) {
        if (playerSelection.toUpperCase() === computerSelection) {
                console.log("DRAW");
        } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "SCISSORS") {
                console.log("WON");
                return true;
        } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "ROCK") {
                console.log("WON");
                return true;
        } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "PAPER") {
                console.log("WON");
                return true;
        } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "PAPER") {
                console.log("LOSE");
                return false;
        } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "SCISSORS") {
                console.log("LOSE");
                return false;
        } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "ROCK") {
                console.log("LOSE");
                return false;
        }
};

// console.log(computerSelection);
// console.log(playRound(computerSelection, playerSelection));

// Create a game() function that plays one round, counts the score, and returns the winner at the end.

// Pseudo code
// Create a game() function
// Create a variable containing the computerSelection score
// Create a variable containing the score of the playerSelection
// Output a string that announces who is the winner.

function game() {
        let playerScore = 0;
        let computerScore = 0;

        
                let result = playRound(getComputerChoice(), playerSelection);
                if (result === true) {
                        playerScore++
                } else if (result === false) {
                        computerScore++
                };
             
        
        if(playerScore > computerScore){
                return "You win!"
        } else if (playerScore < computerScore){
                return "You lose!"
        } else {
                return "Nobody wins!"
        };
};



// Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked.

const buttonRock = document.querySelector('.rock');

buttonRock.addEventListener('click', () => {
        playerSelection = "ROCK";
        playRound(getComputerChoice(), playerSelection);
});


const buttonPaper = document.querySelector('.paper');

buttonPaper.addEventListener('click', () => {
        playerSelection = "PAPER";
        playRound(getComputerChoice(), playerSelection);
});


const buttonScissors = document.querySelector('.scissors');

buttonScissors.addEventListener('click', () => {
        playerSelection = "SCISSORS";
        playRound(getComputerChoice(), playerSelection);
});

// Add a div for displaying results and change all of your console.logs into DOM methods
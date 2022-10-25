

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

let counterPlayer = 1;
let counterComputer = 1;

function playRound(computerSelection, playerSelection) {
        if (playerSelection.toUpperCase() === computerSelection) {
                div.textContent = "Nobody wins. The round is a tie";
        } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "SCISSORS") {
                div.textContent = 'You have won this round';
                playerCounter.textContent = counterPlayer++;
                console.log(counterPlayer);
        } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "ROCK") {
                div.textContent = 'You have won this round';
                playerCounter.textContent = counterPlayer++;
                console.log(counterPlayer);
        } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "PAPER") {
                div.textContent = 'You have won this round';
                playerCounter.textContent = counterPlayer++;
                console.log(counterPlayer);
        } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "PAPER") {
                div.textContent = 'You lost this round';
                computerCounter.textContent = counterComputer++;
                console.log(counterComputer);
        } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "SCISSORS") {
                div.textContent = 'You lost this round';
                computerCounter.textContent = counterComputer++;
                console.log(counterComputer);
        } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "ROCK") {
                div.textContent = 'You lost this round';
                computerCounter.textContent = counterComputer++;
                console.log(counterComputer);
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

/*
function game() {
        let playerScore = [];
        let computerScore = [];

        for (let i = 0; i<=5; i++ ){
                let result = playRound(getComputerChoice(), playerSelection);
                if (result === true) {
                        playerScore++
                } else if (result === false) {
                        computerScore++
                };
        };      
             
        
        if(playerScore > computerScore){
                return "You win!"
        } else if (playerScore < computerScore){
                return "You lose!"
        } else {
                return "Nobody wins!"
        };
};
*/


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


const div = document.createElement('div');

const body = document.querySelector('body');

body.appendChild(div);

// Display the running score, and announce a winner of the game once one player reaches 5 points.

const scorePlayer = document.createElement('div');
body.appendChild(scorePlayer);
scorePlayer.textContent = 'Playerscore: ';

const playerCounter = document.createElement('div');
scorePlayer.appendChild(playerCounter);

const scoreComputer = document.createElement('div');
body.appendChild(scoreComputer);
scoreComputer.textContent = 'Computerscore: ';

const computerCounter = document.createElement('div');
scoreComputer.appendChild(computerCounter);


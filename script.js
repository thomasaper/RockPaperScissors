
// Erstelle eine Funktion mit dem Namen getComputerChoice, die zufällig 'Rock', 'Paper', oder 'Scissors' ausgibt

// Pseudocode
// Erstelle die Funktion getComputerChoice
// Erstelle ein array mit den strings
// Erstelle eine Variable mit einem Zufallsalgorithmus, der eine Zahl aufgrund der Länge des arrays wiedergibt
// Erstelle eine return-Funktion mit dem ternären Operator (?) , die aufgrund der Zahl 'Rock', 'Paper' oder 'Scissors' ausgibt
// ternärer Operator Logik =   Bedingung ? Code Bedingung true : Code Bedingung false

function getComputerChoice() {
        let choice = ["ROCK", "PAPER", "SCISSORS"];
        let compChoice = Math.floor(Math.random() * choice.length);

        return compChoice == 0 ? "ROCK":
               compChoice == 1 ? "SCISSORS":
               "PAPER";      
};


// Erstelle eine Funktion, die eine einzelne Runde Paper Scissors spielt. Die Parameter playerSelection und computerSelection
// sollen enthalten sein. Am Ende soll ein string ausgegeben werden, der den Gewinner bekannt gibt. Die playerSelection soll 
// case-insentive sein

// Pseudocode
// Erstelle eine Variable, die die computerSelection enthält
// Erstelle eine Variable, die die playerSelection abfragt
// Erstelle eine Funktion, die eine Runde mit den Parametern durchspielt und den Gewinner bestimmt
// Mache die Eingabe der playerSelection case-insentive

let computerSelection = getComputerChoice();
let playerSelection = prompt();

function playRound(computerSelection, playerSelection) {
        if (playerSelection.toUpperCase() === computerSelection) {
                console.log("DRAW");
                return 0;
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

console.log(computerSelection);
console.log(playRound(computerSelection, playerSelection));

// Erstelle eine Funktion game(), die fünf Runden spielt, den Score mitzählt und am Ende den Gewinner ausgibt

// Pseudocode
// Erstelle eine Funktion game()
// Erstelle eine Variable, die den Score der computerSelection enthält
// Erstelle eine Variable, die den Score der playerSelection enthält
// Erstelle einen Loop, der fünfmal spielt und den Score mitzählt
// Gebe einen string aus, der verkündet, wer der Gewinner ist.


/*

// Rock, paper,scissors game, played in console against a computer
// create a function that returns at random, rock paper or scissors. 
// computerPlayer should be first function 



function computerPlayer() {
    let rPS = ["ROCK", "PAPER", "SCISSORS"];
    let compChoice = Math.floor(Math.random() * rPS.length);
    
    return compChoice == 0 ? "ROCK" :
            compChoice == 1 ? "SCISSORS" :
            "PAPER";   
    }
    
// computerSelection = computerPlay(); 
    computerSelection = computerPlayer(); 
    playerSelection = prompt(); 

// playRound decides the winner
    function playRound(playerSelection, computerSelection) {
            if (playerSelection.toUpperCase() === computerSelection) {
                    return console.log("DRAW");
            } else if (playerSelection.toUpperCase()=== "ROCK" && computerSelection === "SCISSORS"){
                    console.log("Won")
                    return true;
            } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "PAPER") {
                    console.log("Won")
                    return true;
            } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "ROCK") {
                    console.log("Won")
                    return true;
            }  else if (playerSelection.toUpperCase()=== "ROCK" && computerSelection === "PAPER"){
                    console.log("Loss")
                    return false;
            } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "ROCK") {
                    console.log("Loss")
                    return false;;
            } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "SCISSORS") 
                    console.log("loss")
                    return false;

    }
           



// results logged in console
   // console.log(playerSelection);
    //console.log(computerSelection)
    //console.log(playerScore)
    //console.log(computerScore)
     

// gameRound() Function Dec 



    function gameRound() {
            let playerScore = 0;
            let computerScore = 0; 
            for (let i = 0; i<5; i++){
                    
                  let result = playRound(playerSelection, computerPlayer()); //playRound
                  if (result === true) {
                          playerScore++
                  } else if (result === false){
                          computerScore++
                  } 
           
            }
            if (playerScore>computerScore){
                    return "well done! You have won the game!"
            } else if (playerScore<computerScore){
                    return "Unlucky!, you lost good looking!"
            } else return "No one won, you are both equally awful!"
    }
     
                      
    console.log(gameRound())

*/
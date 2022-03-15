



///// Erstelle eine Funktion die eine Variable willkürlich auswählt


// Erstelle eine willkürliche Zahl zwischen 0 und 1
let random = Math.random();

// Auf Grundlage der Zahl wähle eine Variable aus
function computerPlay() {
    if(random >= 0.66) {
        return "Rock";
    } else if (random >= 0.33 && random < 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
};

///// Spiele eine Runde playerselection gege computerselection und gebe einen string aus, der das Spielergebnis nennt.

// mache die playerSelection case-insentive


function playRound() {

    if (playerSelection.toLowerCase() === "rock" && computerSelection == "Paper") {
        return("You lose! Paper beats rock") && computerScore++;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection == "Scissors") {
        return ("You win. Rock beats scissors") && playerScore++;;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection == "Rock") {
        return ("Nobody wins. Play again"); 
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection == "Rock") {
        return ("You win. Paper beats rock" && playerScore++); 
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection == "Scissor") {
        return ("You lose! Scissor beats paper") && computerScore++; 
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection == "Paper") {
        return ("Nobody wins. Play again")  
    } else if (playerSelection.toLowerCase() === "scissor" && computerSelection == "Rock") {
        return ("You lose! Rock beats scissor.") && computerScore++;; 
    } else if (playerSelection.toLowerCase() === "scissor" && computerSelection == "Paper") {
        return ("You win. Scissor beats paper.") && playerScore++; 
    } else if (playerSelection.toLowerCase() === "scissor" && computerSelection == "Scissors") {
        return ("Nobody wins. Play again");        
              }

};

const computerSelection = computerPlay();
const playerSelection = prompt ( "Rock, paper or scissor?", "");

///// Erstelle eine Funktion game(), die 5 Runden spielt, die Ergebnisse zählt und den Gewinner nennt.

 /* 
 Spiele eine Runde
 Merke das Ergebnis 
 Spiele insgesamt 5 mal und merke das Ergebnis
 Wenn die computerSelection öfter gewonnen hat, gebe einen Hinweis aus
 ansonsten gebe den Hinweis aus, dass die playerSelection gewonnen hat

 */

let playerScore = 0;
let computerScore = 0;

playRound(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection))




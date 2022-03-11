



///// Erstelle eine Funktion die eine Variable willkürlich auswählt

// Erstelle die Variablen
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissor";

// Erstelle eine willkürliche Zahl zwischen 0 und 1
let random = Math.random();

// Auf Grundlage der Zahl wähle eine Variable aus
function computerPlay() {
    if(random >= 0.66) {
        return rock
    } else if (random >= 0.33 && random < 0.66) {
        return paper
    } else {
        return scissors
    }
};

///// Spiele eine Runde playerselection gege computerselection und gebe einen string aus, der das Spielergebnis nennt.

// mache die playerSelection case-insentive


function playRound() {

    if (playerSelection.toLowerCase() === "rock" && computerSelection == "Paper") {
        return("You lose! Paper beats rock");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection == "Scissor") {
        return ("You win. Rock beats scissors");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection == "Rock") {
        return ("Nobody wins. Play again"); 
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection == "Rock") {
        return ("You win. Paper beats rock"); 
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection == "Scissor") {
        return ("You lose! Scissor beats paper"); 
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection == "Paper") {
        return ("Nobody wins. Play again"); 
    } else if (playerSelection.toLowerCase() === "scissor" && computerSelection == "Rock") {
        return ("You lose! Rock beats scissor."); 
    } else if (playerSelection.toLowerCase() === "scissor" && computerSelection == "Paper") {
        return ("You win. Scissor beats paper."); 
    } else if (playerSelection.toLowerCase() === "scissor" && computerSelection == "Scissors") {
        return ("Nobody wins. Play again");                 
              }
};

const computerSelection = computerPlay();
const playerSelection = "rock";



///// Erstelle eine Funktion game(), die 5 Runden spielt, die Ergebnisse zählt und den Gewinner nennt.


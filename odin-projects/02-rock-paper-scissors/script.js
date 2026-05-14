const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
const readline = require('readline-sync');
let hScore = 0;
let cScore = 0;
const tie = "This round was a tie";

function getComputerChoice(){

    // Choice = 0,1 or 2
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0){
        return rock;
    }
    else if (choice == 1){
        return paper;
    }
    else{
        return scissors;
    }
}

function getHumanChoice(){

    // Keep prompting until the player enters a valid option.
    while (true) {
        let humanChoice = readline.question("Enter 1(rock), 2(paper), or 3(scissors)\n").trim();

        if (humanChoice == "1"){
            return rock;
        }
        else if (humanChoice == "2"){
            return paper;
        }
        else if (humanChoice == "3"){
            return scissors;
        }

        console.log("Invalid choice. Enter 1, 2, or 3.");
    }
    
}

function computerWinRound(computerChoice, humanChoice){
    cScore += 1;
    console.log(`You lose. ${computerChoice} beats ${humanChoice}`);
}

function humanWinRound(computerChoice, humanChoice){
    hScore += 1;
    console.log(`You Win. ${humanChoice} beats ${computerChoice}`);
}


function playRound(computerChoice, humanChoice){

    if (!humanChoice) {
        console.log("Invalid choice. Enter 1, 2, or 3.");
    }

    // Handle the simple tie case first.
    if (computerChoice == humanChoice){
        console.log(tie);
    }

    // For non-ties, compare against the computer's move and resolve winner.
    else if (computerChoice == rock){
        if (humanChoice == paper)
            return humanWinRound(computerChoice,humanChoice);
        else{
            return computerWinRound(computerChoice,humanChoice);
        }
    }
    else if (computerChoice == paper){
        if (humanChoice == scissors)
            return humanWinRound(computerChoice,humanChoice);
        else{
            return computerWinRound(computerChoice,humanChoice);
        }
    }
    else if (computerChoice == scissors){
        if (humanChoice == rock)
            return humanWinRound(computerChoice,humanChoice);
        else{
            return computerWinRound(computerChoice,humanChoice);
        }   
    }
}


function playGame(){
    // Play a fixed best-of-5 style session.
    for (let i = 0; i < 5; i++){
        let compSelection = getComputerChoice();
        let humSelection = getHumanChoice();
        console.log(`COMP: ${compSelection}`);
        console.log(`HUMAN: ${humSelection}`);
        playRound(compSelection, humSelection);
    }

    // Print final scores, then announce the overall result.
    console.log(hScore);
    console.log(cScore);

    if (hScore == cScore){
        console.log(tie);
    }
    else if(hScore > cScore){
        console.log("You won the game");
    }
    else{
        console.log("You lost the game");
    }

}

playGame();


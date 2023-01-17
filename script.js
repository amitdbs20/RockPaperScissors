function getComputerChoice() {
    let randNum = Math.floor((Math.random() * 100)+1);
    if (randNum <= 33) {
        return "ROCK"
    } else if (randNum>33 && randNum<66) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}

let playerSelectionCase = prompt("ROCK, PAPER, OR SCISSORS?");
let playerSelection = playerSelectionCase.toUpperCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw"
    }
    else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS")|| (playerSelection==="PAPER" && computerSelection==="ROCK")||(playerSelection==="SCISSORS"&&computerSelection==="PAPER")) {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else if ((playerSelection === "ROCK" && computerSelection === "PAPER")|| (playerSelection==="PAPER" && computerSelection==="SCISSORS")||(playerSelection==="SCISSORS"&&computerSelection==="ROCK")) {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
        return 'Error. Try again with "ROCK, PAPER, or SCISSORS"'
    }
}

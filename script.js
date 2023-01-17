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

function game() {
    let markers = [];
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        let playerSelectionCase = prompt("ROCK, PAPER, OR SCISSORS?");
        let playerSelection = playerSelectionCase.toUpperCase();
        console.log(playRound(playerSelection, computerSelection));
        markers[i] = playRound(playerSelection, computerSelection);
    }
    let winCount = 0;
    for (let i =0; i <markers.length;i++) {
        if (markers[i].includes("You Win!")) winCount++;
    }
    let loseCount = 0;
    for (let i =0; i <markers.length;i++) {
        if (markers[i].includes("You Lose!")) loseCount++;
    }
    let tieCount = 0;
    for (let i =0; i <markers.length;i++) {
        if (markers[i].includes("It's a draw")) tieCount++;
    }
    let errorCount = 0;
    for (let i =0; i <markers.length;i++) {
        if (markers[i].includes("Error")) errorCount++;
    }
    if (winCount>loseCount) {
        console.log("Congratulations! You beat the Computer!");
    } else if (loseCount>winCount) {
        console.log("Sorry! You lost to the Computer!");
    } else if (winCount=loseCount) {
        console.log("Looks like you tied with the Computer");
    }
    else console.log("Error! Try again");
}

console.log(game())

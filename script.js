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


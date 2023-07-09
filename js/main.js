function getComputerChoice() {
    let ComputerChoice = Math.floor(Math.random() * 3) + 1;
    if (ComputerChoice == 1) {
        return "rock";
    }
    else if (ComputerChoice == 2) {
        return "paper";
    }
    else if (ComputerChoice == 3) {
        return "scissors";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
function playRound(playerSelection, computerSelection) {
    if (computerSelection == "rock" && playerSelection == "scissors") {
        return "Computer won! rock beat scissors";
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        return "Player won! paper beat rock";
    }
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        return "Player won!  rock beat scissors";
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        return "Computer won! scissors beat paper";
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        return "Computer won!  paper beat rock";
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        return "player won! scissors beat paper";
    }
    else
    {
        return "the game become tie";
    }
}

console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));


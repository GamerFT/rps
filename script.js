function getComputerChoice(){
    let a = Math.random();
    if (a < 0.33) {
        return "Rock"
    }
    else if(a < 0.66){
        return "Paper"
    }
    else {
        return "Scissors"
    }
}
function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.substring(0,1).toUppercase() + playerSelection.substring(1).toLowerCase();
    if(playerSelection==computerSelection){
        console.log("Tie")
        return 0
    }
    if(playerSelection=="Rock"){
        if(computerSelection=="Paper"){
            console.log("You Lose! Paper beats Rock")
            return 0
        }
        else {
            console.log("You Win! Rock beats Scissors")
            return 1
        }
    }
    else if (playerSelection=="Paper"){
        if(computerSelection=="Rock"){
            console.log("You Win! Paper beats Rock")
            return 1
        }
        else {
            console.log("You Lose! Scissors beats Paper")
            return 0
        }
    }
    else if (playerSelection=="Scissors"){
        if(computerSelection=="Rock"){
            console.log("You Lose! Rock beats Scissors")
            return 0
        }
        else{
            console.log("You Win! Scissors beats Paper")
            return 1
        }
    }
    else{
        console.log("Error")
        return 0
    }
}
function game(){
    wins = 0;
    wins += playRound(prompt(),getComputerChoice())
    wins += playRound(prompt(),getComputerChoice())
    wins += playRound(prompt(),getComputerChoice())
    wins += playRound(prompt(),getComputerChoice())
    wins += playRound(prompt(),getComputerChoice())
    if (wins>2){
        console.log("You Win")
    }
    else{
        console.log("You Lose")
    }
}
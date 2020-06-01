const gameOptions = ['ROCK','PAPER','SCISSORS'];

function playerPlay() {
    // Player types in choice
    let str = prompt('ROCK, PAPER, SCISSORS?');
    let playerChoice = str.toLocaleUpperCase();
    return playerChoice;
}
let playerSelection = playerPlay();

function computerPlay() {
    // Computer random generates choice
    let computerChoice = Math.floor(Math.random() * gameOptions.length)
    return gameOptions[computerChoice];
}
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    // your code here!
        
    if (playerSelection == 'ROCK' ) {
        if (computerSelection == 'ROCK') {
            alert(`Draw. ${computerSelection}`) 
        } else if (computerSelection == 'SCISSORS') {
            alert(`Player Wins. ${playerSelection} wins ${computerSelection}`);
        } else if (computerSelection == 'PAPER') {
            alert(`Computer Wins. ${computerSelection} wins ${playerSelection}`);
        } 

    } else if (playerSelection == 'PAPER' ) {
        if (computerSelection == 'PAPER') {
            alert(`Draw. ${computerSelection}`)
        } else if (computerSelection == 'ROCK') {
            alert(`Player Wins. ${playerSelection} wins ${computerSelection}`);
        } else if (computerSelection == 'SCISSORS') {
            alert(`Computer Wins. ${computerSelection} wins ${playerSelection}`)
        } 

    } else if (playerSelection == 'SCISSORS') {
        if (computerSelection == 'SCISSORS') {
            alert(`Draw. ${computerSelection}`)
        } else if (computerSelection == 'PAPER'){
            alert(`Player Wins. ${playerSelection} wins ${computerSelection}`);
        } else if (computerSelection == 'ROCK') {
            alert(`Computer Wins. ${computerSelection} wins ${playerSelection}`)
        } 
    }  else {alert ('Please choose ROCK, PAPER, SCISSORS.')}
}

console.log(playRound(playerSelection, computerSelection));


/*
function playGame() {

    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
}

playGame();
*/



/*
function game() {
    // type code here to inside of this one to play a 5 round game
    // that keeps score and reports a winner or loser at the end.
}
*/

/*
console.log('Hello');
*/

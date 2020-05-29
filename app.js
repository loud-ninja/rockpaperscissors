const gameOptions = ['ROCK','PAPER','SCISSORS'];
let str = prompt('ROCK, PAPER, SCISSORS?');
let playerSelection = str.toLocaleUpperCase();

function computerPlay() {
    // 
    let choice = Math.floor(Math.random() * gameOptions.length)
    return gameOptions[choice];
}

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


const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);

console.log(playRound(playerSelection, computerSelection))



/*
function game() {
    // type code here to inside of this one to play a 5 round game
    // that keeps score and reports a winner or loser at the end.
}
*/

/*
console.log('Hello');
*/

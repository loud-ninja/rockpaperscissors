const gameOptions = ['rock','paper','scissors'];
let playerSelection = prompt('rock, paper, scissors?');

function computerPlay() {
    // 
    let choice = Math.floor(Math.random() * gameOptions.length)
    console.log(gameOptions[choice]);
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    let computerSelection = computerPlay();
    if (playerSelection == 'rock' ) {
        if (computerSelection == 'rock') {
        alert(`Draw. ${computerSelection}`) 
        } else if (computerSelection == 'scissors') {
        alert(`Player Wins. ${playerSelection} wins ${computerSelection}`);
        } else if (computerSelection == 'paper') {
        alert(`Computer Wins. ${computerSelection} wins ${playerSelection}`);
        }
    } 
}
/* */

// const computerSelection = computerPlay()

// console.log(playRound(playerSelection, computerSelection))



/*
function game() {
    // type code here to inside of this one to play a 5 round game
    // that keeps score and reports a winner or loser at the end.
}
*/

/*
console.log('Hello');
*/

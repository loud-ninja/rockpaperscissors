const gameOptions = ['rock','paper','scissors'];
//let str = prompt('rock, paper, scissors?')
let playerSelection = prompt('rock, paper, scissors?');
//str.match(/geeks/gi); 

function computerPlay() {
    // 
    let choice = Math.floor(Math.random() * gameOptions.length)
    return gameOptions[choice];
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection == 'rock' ) {
        if (computerSelection == 'rock') {
            alert(`Draw. ${computerSelection}`) 
        } else if (computerSelection == 'scissors') {
            alert(`Player Wins. ${playerSelection} wins ${computerSelection}`);
        } else if (computerSelection == 'paper') {
            alert(`Computer Wins. ${computerSelection} wins ${playerSelection}`);
        } else {alert ('Please choose Rock, Paper, Scissors.')}

    } if (playerSelection == 'paper' ) {
        if (computerSelection == 'paper') {
            alert(`Draw. ${computerSelection}`)
        } else if (computerSelection == 'rock') {
            alert(`Player Wins. ${playerSelection} wins ${computerSelection}`);
        } else if (computerSelection == 'scissors') {
            alert(`Computer Wins. ${computerSelection} wins ${playerSelection}`)
        } else {alert ('Please choose Rock, Paper, Scissors.')}

    } if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            alert(`Draw. ${computerSelection}`)
        } else if (computerSelection == 'paper'){
            alert(`Player Wins. ${playerSelection} wins ${computerSelection}`);
        } else if (computerSelection == 'rock') {
            alert(`Computer Wins. ${computerSelection} wins ${playerSelection}`)
        } else {alert ('Please choose Rock, Paper, Scissors.')}
    } else {alert ('Please choose Rock, Paper, Scissors.')}
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

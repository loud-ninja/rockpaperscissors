let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const actionMessage_p = document.querySelector('#action-message');
const gameOver_div = document.getElementById("game-over");

function getComputerChoice() {
    const choices = ['r' , 'p' , 's'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function convertToWord (letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper'
    return 'Scissors';
}

function win(userChoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. YOU WIN!`;
    document.getElementById(userChoice).classList.add('green-glow');
        setTimeout(() => userChoice_div.classList.remove('green-glow'), 1000);
}


function lose(userChoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. YOU LOST!`;
    document.getElementById(userChoice).classList.add('red-glow');
        setTimeout(() => userChoice_div.classList.remove('red-glow'), 1000);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. DRAW!`;
    document.getElementById(userChoice).classList.add('gray-glow');
        setTimeout(() => userChoice_div.classList.remove('gray-glow'), 1000);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "pr":
        case "sp":
        case "rs":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => {
        game("r");
        endGame(userScore, computerScore);
    }
    );

    paper_div.addEventListener('click', () => {
        game("p");
        endGame(userScore, computerScore);
    }
    );

    scissors_div.addEventListener('click', () => {
        game("s");
        endGame(userScore, computerScore);
    }
    );
}

main();

function endGame(userScore, computerScore) {
        switch (true) {
        case (userScore === 5 || computerScore === 5):
            console.log('Game Over');
            gameOver(gameOver_div);
            showWinner(userScore, computerScore)
            showResetBtn(); 
            break;
        default:
            console.log('Continue Playing');     
    }
}

function gameOver(id) {
   let endGame = gameOver_div;
   let hideR = rock_div;
   let hideP = paper_div;
   let hideS = scissors_div;
   let hideActionMessage = actionMessage_p;
   if(endGame.style.display == 'block'){
    endGame.style.display = 'none';
    }
   else {
    endGame.style.display = 'block';
    hideR.style.visibility = 'hidden';
    hideP.style.visibility = 'hidden';
    hideS.style.visibility = 'hidden';
    hideActionMessage.style.visibility = 'hidden';
    }
}

function showWinner(userScore, computerScore) {
    if (userScore > computerScore) {
        gameOver_div.innerHTML = 'Game Over. <br> User Wins <br>';
    }
    else if (userScore < computerScore) {
        gameOver_div.innerHTML = 'Game Over. <br> Comp Wins <br>';
    }
}

function showResetBtn() {
    let btn = document.createElement('button')
    btn.innerHTML = "Play Again";
    btn.classList.add('button-reset');
    let endGame = gameOver_div;
    endGame.appendChild(btn);
    btn.addEventListener('click',resetGame)
    
}

function resetGame() {
    location.reload();
    // somehow the code below does not work to reset
    /* let userScore = 0;
    let computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
  
    let endGame = gameOver_div;
    let showR = rock_div;
    let showP = paper_div;
    let showS = scissors_div;
    let showActionMessage = actionMessage_p;

    endGame.style.display = 'none';
    showR.style.visibility = 'visible';
    showP.style.visibility = 'visible';
    showS.style.visibility = 'visible';
    showActionMessage.style.visibility = 'visible'; */ 
   
}

console.log('hello')
function getComputerChoice() {
    let random = Math.ceil(3*Math.random());
    return (random==1) ? 'rock' :
            (random==2) ? 'paper' :
            'scissors';
}

function playRound(humanChoice,computerChoice) {
    results.replaceChildren();
    const roundResult = document.createElement('p');
    results.appendChild(roundResult);
    if((humanChoice==='rock'&&computerChoice==='scissors')||
            (humanChoice==='paper'&&computerChoice==='rock')||
            (humanChoice==='scissors'&&computerChoice==='paper')) {
        roundResult.textContent = `You are win, ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    } else if((humanChoice==='rock'&&computerChoice==='rock')||
            (humanChoice==='paper'&&computerChoice==='paper')||
            (humanChoice==='scissors'&&computerChoice==='scissors')) {
        roundResult.textContent = `It's a draw, both of us choose ${humanChoice}!`;
    } else {
        roundResult.textContent = `You are lose, ${humanChoice} is beaten by ${computerChoice}!`;
        computerScore++;
    }              
}

let humanScore = 0;
let computerScore = 0;
let computerSelection = '';
const score = document.querySelector('#score');
const choices = document.querySelector('#button-wrapper');
const results = document.querySelector('#result-wrapper');
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
rockButton.setAttribute('id', 'rock');
paperButton.setAttribute('id', 'paper');
scissorsButton.setAttribute('id', 'scissors');
buttons = [rockButton, paperButton, scissorsButton];
buttons.forEach(button => {
    choices.appendChild(button);
    button.textContent = button.id[0].toUpperCase() + button.id.slice(1);
});
score.innerHTML = `5-Round Match<br>Score: ${humanScore} (You) - ${computerScore} (Computer)`;


choices.addEventListener('click', (event) => {
    computerSelection = getComputerChoice();
    playRound(event.target.id, computerSelection);
    score.innerHTML = `5-Round Match<br>Score: ${humanScore} (You) - ${computerScore} (Computer)`;
    if (humanScore == 5 || computerScore == 5) {
        choices.replaceChildren();
        const gameResult = document.createElement('h2');
        const questionToRepeat = document.createElement('p');
        results.appendChild(gameResult);
        results.appendChild(questionToRepeat);
        if (humanScore == 5) {
            gameResult.textContent = 'Congratulations, you are the winner!';
        } else {
            gameResult.textContent = 'Sorry, you are lose.';
        }   
    }
});
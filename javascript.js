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

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    score.innerHTML = `5-Round Match<br>Score: ${humanScore} (You) - ${computerScore} (Computer)`;
    const rockButton = document.createElement('button');
    const paperButton = document.createElement('button');
    const scissorsButton = document.createElement('button');
    rockButton.setAttribute('id', 'rock');
    paperButton.setAttribute('id', 'paper');
    scissorsButton.setAttribute('id', 'scissors');
    const buttons = [rockButton, paperButton, scissorsButton];
    buttons.forEach(button => {
        choices.appendChild(button);
        button.textContent = button.id[0].toUpperCase() + button.id.slice(1);
    });
    results.replaceChildren();
}

let humanScore = 0;
let computerScore = 0;
let computerSelection = '';
const score = document.querySelector('#score');
const choices = document.querySelector('#button-wrapper');
const results = document.querySelector('#result-wrapper');
resetGame();

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
        questionToRepeat.textContent = 'Do you want to repeat the game?'
        const yesButton = document.createElement('button');
        const noButton = document.createElement('button');
        yesButton.setAttribute('id', 'yes');
        noButton.setAttribute('id', 'no');
        const choiceButtons = [yesButton, noButton];
        choiceButtons.forEach(button => {
            results.appendChild(button);
            button.textContent = button.id[0].toUpperCase() + button.id.slice(1);
        });
        yesButton.addEventListener('click', () => resetGame()); 
        noButton.addEventListener('click', () => results.replaceChildren());
    }
});
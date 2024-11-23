function getComputerChoice() {
    let random = Math.ceil(3*Math.random());
    return (random==1) ? 'rock' :
            (random==2) ? 'paper' :
            'scissors';
}

function getHumanChoice() {
    let choice = '';
    let possibility = ['rock','paper','scissors'];
    while(!possibility.includes(choice)) {
        choice = prompt('Choose rock, paper, or scissors!').toLowerCase();
    }
    return choice;
}

function playRound(humanChoice,computerChoice) {
    if((humanChoice==='rock'&&computerChoice==='scissors')||
            (humanChoice==='paper'&&computerChoice==='rock')||
            (humanChoice==='scissors'&&computerChoice==='paper')) {
        console.log(`You are win, ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else if((humanChoice==='rock'&&computerChoice==='rock')||
            (humanChoice==='paper'&&computerChoice==='paper')||
            (humanChoice==='scissors'&&computerChoice==='scissors')) {
        console.log(`It's a draw, both of us choose ${humanChoice}!`);
    } else {
        console.log(`You are lose, ${humanChoice} is beaten by ${computerChoice}`);
        computerScore++;
    }              
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i=0; i<5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection,computerSelection);        
    }

    const condition = (humanScore>computerScore) ? 'win' :
                        (humanScore==computerScore) ? 'draw' :
                        'lose';

    console.log(`Score: ${humanScore} (You) - ${computerScore} (Computer) \n`);
    
    switch(condition) {
        default:
            console.log('Congratulations, you are the winner!');
            break;
        case 'draw':
            console.log('The result is draw!');
            break;
        case 'lose':
            console.log('Sorry, you are lose.')
    }
}

let humanScore = 0;
let computerScore = 0;




function getComputerChoice() {
    let option = ['rock', 'paper', 'scissors'];
    let cpuAnswer = option[Math.floor(Math.random() * option.length)];
    return cpuAnswer;
    
}

function getHumanChoice () {
    let option = ['rock', 'paper', 'scissors'];
    let answer = prompt('Choose: rock, paper or scissors.').toLowerCase();
    
    if (
        (answer === 'rock') || (answer === 'paper') || (answer === 'scissors')
    ){
        return answer;
    } else {
        alert('Please try again, write correctly the right option.');
        return getHumanChoice();
    }

}

function playRound(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice){
        alert('Nobody won, it\'s a draw!')
        return 'Draw';
    }   else if ( 
        (humanChoice === 'rock' && computerChoice === 'scissors')||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ){
        alert(`${humanChoice} beats ${computerChoice}.`);
        return 'Player';
    } else {
        alert(`${computerChoice} beats ${humanChoice}.`);
        return 'Computer';
    }

}

function playAgain(){
    let choice = ['yes', 'no'];
    let yourChoice = prompt('Do you wanna play again?');

    if (yourChoice === 'yes'){
        game();
    } else if (yourChoice === 'no'){
        alert('The game is OVER!');
    } else {
        playAgain();
    }
}

function game(){

    let playerScore = 0;
    let computerScore = 0;
    let gameRound = 0;


    for (i = 0; i < 5; i++){

        const roundResult = playRound();

        if (roundResult === 'Player'){
            gameRound++;
            playerScore++;
            alert(`Round ${gameRound}\nScore: Player ${playerScore} - ${computerScore} Computer.`);
        } else if ( roundResult === 'Computer') {
            gameRound++;
            computerScore++;
            alert(`Round ${gameRound}\nScore: Player ${playerScore} - ${computerScore} Computer.`);
        } else {
            gameRound++;
            alert(`Round ${gameRound}\nScore: Player ${playerScore} - ${computerScore} Computer.`);
        }

    }

    if (playerScore > computerScore){
        alert(`After ${gameRound} rounds, the big winner is the Player!`);
    } else if (computerScore > playerScore){
        alert(`After ${gameRound} rounds, the big winner is the Computer!`);
    } else {
        alert(`After ${gameRound} rounds, nobody won!`);
    }

    const isOver = playAgain();    

}

game();
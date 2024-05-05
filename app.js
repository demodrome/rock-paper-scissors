/**
 * Generate a random number
 * @returns {Number} A random number from 0-2
 */
function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

/**
 * Get the computer's choice
 * @returns {String} The computers choice of rock, paper, or scissors
 */
function getComputerChoice(choices) {
    const randomNumber = getRandomNumber();

    // Return the array value at a random index from 0 - 2
    return choices[randomNumber];
}

/**
 * Get the player's choice
 * @returns {String} The player's choice of rock, paper, or scissors
 */
function getPlayerChoice() {
    // Get the player's choice and convert to lowercase to avoid case sensitivity issues
    const playerChoice = prompt('Rock, Paper, or Scissors?').toLocaleLowerCase();

    // Return an error message if the player's input does not match any value in the choices array
    if (!choices.includes(playerChoice)) {
        return 'Invalid input. Please enter either rock, paper, or scissors.';
    }

    return playerChoice;
}

/**
 * The game loop
 */
function playGame() {
    // Game selection options
    const choices = ['rock', 'paper', 'scissors'];
    // Track scores
    let playerScore = 0;
    let computerScore = 0;
    // UI components
    const gameControls = document.querySelector('[data-controls]');
    const resultMessageUi = document.querySelector('[data-result-message]');
    const playerScoreUi = document.querySelector('[data-result-player]');
    const computerScoreUi = document.querySelector('[data-result-computer]');

    /**
     * Play a round
     * @param {String} playerChoice The player's choice of rock, paper, or scissors
     * @param {String} computerChoice The computer's choice of rock, paper, or scissors
     */
    function playRound(playerChoice, computerChoice) {
        // Check for a winner
        if (playerScore === 5) {
            resultMessageUi.textContent = 'You win!';
            resultMessageUi.style.color = 'green';
            return;
        }
        if (computerScore === 5) {
            resultMessageUi.textContent = 'You lose!';
            resultMessageUi.style.color = 'red';
            return;
        }

        // Check win cinditions
        if (playerChoice === 'rock') {
            if (computerChoice === 'rock') {
                resultMessageUi.textContent = 'It\'s a draw!';
            }
            else if (computerChoice === 'paper') {
                resultMessageUi.textContent = 'You lose! Paper beats Rock.'
                computerScore++;
            }
            else {
                resultMessageUi.textContent = 'You win! Rock beats Scissors.';
                playerScore++;
            }
        }
        else if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                resultMessageUi.textContent = 'You win! Paper beats Rock.';
                playerScore++;
            }
            else if (computerChoice === 'paper') {
                resultMessageUi.textContent = 'It\'s a draw!';
            }
            else {
                resultMessageUi.textContent = 'You lose! Scissors beats Paper.';
                computerScore++;
            }
        }
        else {
            if (computerChoice === 'rock') {
                resultMessageUi.textContent = 'You lose! Rock beats Scissors.';
                computerScore++;
            }
            else if (computerChoice === 'paper') {
                resultMessageUi.textContent = 'You win! Scissors beats Paper.';
                playerScore++;
            }
            else {
                resultMessageUi.textContent = 'It\'s a draw!';
            }
        }

        //  Update the UI
        playerScoreUi.textContent = playerScore;
        computerScoreUi.textContent = computerScore;
    }

    /**
     * Handle what happens when game control buttons are clicked
     * @param {Object} event The event object
     */
    function handleControlEvents(event) {
        const playerChoice = event.target.value;
        const computerChoice = getComputerChoice(choices);

        playRound(playerChoice, computerChoice);
    }

    gameControls.addEventListener('click', handleControlEvents);
}

playGame();
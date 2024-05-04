// Game selection options
const choices = ['rock', 'paper', 'scissors'];

// Track scores
let playerScore = 0;
let computerScore = 0;

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
function getComputerChoice() {
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
 * Play a round
 * @param {String} playerChoice The player's choice of rock, paper, or scissors
 * @param {String} computerChoice The computer's choice of rock, paper, or scissors
 */
function playRound(playerChoice, computerChoice) {
    // Check win cinditions
    if (playerChoice === 'rock') {
        if (computerChoice === 'rock') {
            console.log('It\'s a draw!');
        }
        else if (computerChoice === 'paper') {
            console.log('You lose! Paper beats Rock.');
            computerScore++;
        }
        else {
            console.log('You win! Rock beats Scissors.');
            playerScore++;
        }
    }
    else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log('You win! Paper beats Rock.');
            playerScore++;
        }
        else if (computerChoice === 'paper') {
            console.log('It\'s a draw!');
        }
        else {
            console.log('You lose! Scissors beats Paper.')
            computerScore++;
        }
    }
    else {
        if (computerChoice === 'rock') {
            console.log('You lose! Rock beats Scissors.');
            computerScore++;
        }
        else if (computerChoice === 'paper') {
            console.log('You win! Scissors beats Paper.');
            playerScore++;
        }
        else {
            console.log('It\'s a draw!');
        }
    }
}
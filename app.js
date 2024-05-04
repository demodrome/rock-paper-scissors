/**
 * Generate a random number
 * @returns {Number} A random number from 0-2
 */
function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

// Game selection options
const choices = ['rock', 'paper', 'scissors'];

// Track scores
let playerScore = 0;
let computerScore = 0;

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
/**
 * Generate a random number
 * @returns {Number} A random number from 0-2
 */
function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

const choices = ['rock', 'paper', 'scissors'];

/**
 * Get the computers choice
 * @returns {String} The computers choice of rock, paper, or scissors
 */
function getComputerChoice() {
    const randomNumber = getRandomNumber();

    // Return the array value at a random index from 0 - 2
    return choices[randomNumber];
}

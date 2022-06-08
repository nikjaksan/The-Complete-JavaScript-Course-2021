'use strict';
/*
// 072 Selecting and Manipulating Events
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13; //change '?'(HTML) >> '13' (DOM Manip.)
document.querySelector('.score').textContent = 10; //change '20'(HTML) >> '10' (DOM Manip.)


// 073 Handling Click Events
// using function declaration
// const func2 = function () {
//     console.log(document.querySelector('.guess').value);
//   };
//   document.querySelector('.check').addEventListener('click', func1);

// using function expression - IIFE: Immediately Invoked Function Expression
// document.querySelector('.check').addEventListener('click', function () {
// console.log(document.querySelector('.guess').value);

// RNG should be outside of button handler since it should only be calculated once and not every time a number is guessed.

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Not a number!'
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number'
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Choose a smaller number!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 🚯';
      document.querySelector('.score').textContent = '0';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Choose a larger number! '
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 🚯';
      document.querySelector('.score').textContent = '0';
    }
  } else {
    document.querySelector('.message').textContent = 'You MUST choose a number between 1 and 20!';
  }
});
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(typeof secretNumber, secretNumber);
document.querySelector('.number').textContent = secretNumber;

let score = 20;



console.log(typeof document.querySelector('.guess').value);


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Not a valid number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `${secretNumber} is the correct answer! 🎉`
  } else if (guess > secretNumber && guess < 21) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Choose a smaller number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🚯 You lose';
      document.querySelector('.score').textContent = '0';
    }
  } else if (guess < secretNumber && guess > 0) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Choose a larger number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🚯 You lose';
      document.querySelector('.score').textContent = '0';
    }
  } else {
    document.querySelector('.message').textContent = 'Choose a number between 1 & 20'
  }
})
if (document.querySelector(''))
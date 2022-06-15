'use strict';

// const dice = function () {
//   const generate = Math.trunc(Math.random() * 6) + 1;
//   return generate, console.log(generate);
// };
// console.log(diceRoll);

// Selecting elements (using ID) with #
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

// Selecting elements (using ID) without #
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

// Button variables
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Section variables
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

const scores = [0, 0];

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random diceroll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display dice value
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check if a '1' is rolled
  if (dice !== 1) {
    // if dice is not a 1, add the value to the player score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // if the dice is a 1, switch player turns
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
// // Rolling Dice Functionality
// btnRoll.addEventListener('click', function () {
//   // Generate a new dice roll
//   const dice = Math.trunc(Math.random() * 6) + 1;
//   console.log(dice);
//   //   Display the new dice value (img)
//   diceEl.classList.remove('hidden');
//   diceEl.src = `dice-${dice}.png`; //Dynamically link dice-image to the number generated
//   // Check if diceRoll === 1, if true: change player

// });

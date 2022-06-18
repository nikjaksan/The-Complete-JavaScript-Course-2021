'use strict';

// scores
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

//current scores
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// dice element
const diceEl = document.querySelector('.dice');

// buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// sections
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;

// score array
const scores = [0, 0];

// create an event listener that handles the rolling function
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  // Add current score to player's total score
  scores[activePlayer] += currentScore;
  document.getElementById(`current--${activePlayer}`)
  // Check if the player's score is >= 100

  // Switch player turns
})
// btnHold.addEventListener('click', function () {
//   document.getElementById(`score--${activePlayer}`).textContent = Number(document.getElementById(`score--${activePlayer}`).textContent) + currentScore;
//   // When we click HOLD we want to check that the score of the current plauer is greater/equal than 30
//   // if score of activePlayer >= 30 >> concatenate 'WON' to their name
//   currentScore = 0;
//   document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   document.querySelector('.player--0').classList.toggle('player--active');
//   document.querySelector('.player--1').classList.toggle('player--active');
// });


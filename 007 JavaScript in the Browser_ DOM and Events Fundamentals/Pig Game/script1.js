'use strict';

// scores
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

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
const player0El = document.querySelector('player--0');
const player1El = document.querySelector('playerr--1');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;

// create an event listener that handles the rolling function
btnRoll.addEventListener('click', function () {
  const diceRNG = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${diceRNG}.png`;
  diceEl.classList.remove('hidden');
  console.log(diceRNG);
  let score = diceRNG;
  if (diceRNG !== 1) {
    currentScore += score;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    btnHold.addEventListener('click', function () {
      document.getElementById(`score--${activePlayer}`).textContent =
        currentScore;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    });
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

'use strict';
/*
// 072 Selecting and Manipulating Events
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13; //change '?'(HTML) >> '13' (DOM Manip.)
document.querySelector('.score').textContent = 10; //change '20'(HTML) >> '10' (DOM Manip.)
*/

// 073 Handling Click Events
// using function declaration
// const func2 = function () {
//     console.log(document.querySelector('.guess').value);
//   };
//   document.querySelector('.check').addEventListener('click', func1);

// using function expression - IIFE: Immediately Invoked Function Expression
// document.querySelector('.check').addEventListener('click', function () {
// console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent = '⛔ Not a number!')
    );
  }
});

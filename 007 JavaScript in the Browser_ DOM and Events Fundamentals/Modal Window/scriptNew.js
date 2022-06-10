'use strict';

// start by selecting the elements you need to use and store them in a variable
// we need to access the buttons with '.show-modal' class

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

console.log(document.querySelectorAll('.show-modal'));
const btnsOpenModal = document.querySelectorAll('.show-modal');

// WET way
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', function () {
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
    })
}
btnCloseModal.addEventListener('click', function () {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
})
//////////
// DRY way of targeting open button object and adding functionality
// declaring a variable first
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
//using DRY loop with reference to the openModal variable
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

///////////
overlay.addEventListener('click', function () {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
})


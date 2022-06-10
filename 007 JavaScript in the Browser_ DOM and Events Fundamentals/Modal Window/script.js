'use strict';
// start by selecting everything you need for project
// store all the selections into variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// what if there are multiple elements with same class
// using the same method as above we only select the first element of the same class

// const btnsOpenModal = document.querySelector('.show-modal');
// console.log(btnsOpenModal);

// this is due to the limitations of the querySelector('.class) 
// solution : utilise querySelectorAll('.class')
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// output the text of each element of the class '.show-modal'
for (let i = 0; i < btnsOpenModal.length; i ++) {
    console.log(btnsOpenModal[i].textContent);
}

// 080 Working With Classes 
/*
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', function () {
        console.log('Button was clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })}

// don't use element object functionality if 'X' is singular operation that hide's the modal-window
// what should happen when we click the 'X' on the modal window
btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})
// what should happen when we click on the overlay
overlay.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})
*/
// REFACTORING PREVIOUS CODE FUNCTIONALITY ~ 
// how to combine the 'clicking overlay' and 'clicking X' functionality to keep code DRY
// utilise a variable stored function
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// using the same principle when we open the modal window
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for (let i = 0; i < btnsOpenModal.length; i ++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}


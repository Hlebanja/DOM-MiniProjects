'use strict';

let modalButtons = document.querySelectorAll('.show-modal');
let overlay = document.querySelector('.overlay');
let modalContent = document.querySelector('.modal');
let closeButton = document.querySelector('.close-modal');

//create functions to remove and add "hidden" classes from .modal and .overlay
//add event listener to modalButtons to use the functions
//add event listener to closeButton, adding hidden to the modal and Overlay
//add event listener to ESC and clicks outside the modal.

for (let i = 0; i < modalButtons.length; i++) {
  modalButtons[i].addEventListener('click', showModal);
}

closeButton.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
    hideModal();
  }
});

function showModal() {
  overlay.classList.remove('hidden');
  modalContent.classList.remove('hidden');
}

function hideModal() {
  overlay.classList.add('hidden');
  modalContent.classList.add('hidden');
}

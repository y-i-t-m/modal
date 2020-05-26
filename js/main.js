'use strict';

const modal = document.getElementById('modal');
const show = document.getElementById('modal__show');
const close = document.getElementById('modal__close');
const back = document.getElementById('modal__back');

show.addEventListener('click', () => {
  modal.classList.add('is-show');
  back.classList.add('is-show');
})

close.addEventListener('click', () => {
  modal.classList.remove('is-show');
  back.classList.remove('is-show');
})

back.addEventListener('click', () => {
  close.click();
})

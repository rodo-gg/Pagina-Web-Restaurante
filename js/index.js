const prevB = document.querySelector('.prev');
const nextB = document.querySelector('.next');
const menuC = document.querySelector('.menu-cards');

nextB.addEventListener('click', () => {
  menuC.scrollLeft += 200;
});

prevB.addEventListener('click', () => {
  menuC.scrollLeft -= 200;
});

// TOGGLE
const btnSwitch = document.querySelector('.switch');

btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('darkMode');
  btnSwitch.classList.toggle('active');
});

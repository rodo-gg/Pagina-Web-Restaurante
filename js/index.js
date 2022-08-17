const prevB = document.querySelector('.prev');
const nextB = document.querySelector('.next');
const menuC = document.querySelector('.menu-cards');

nextB.addEventListener('click', () => {
  menuC.scrollLeft += 200;
});

prevB.addEventListener('click', () => {
  menuC.scrollLeft -= 200;
});

const burgerMenuLabel = document.querySelector('.header__burger-icon');
const burgerMenuInput = document.querySelector('.heder__burger-checkbox');
const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.overlay');

burgerMenuLabel.addEventListener('click', () => {
  if(burgerMenuInput.checked) {
    sideMenu.classList.remove('hidden')
    overlay.classList.remove('hidden')
  } else {
    sideMenu.classList.add('hidden');
    overlay.classList.add('hidden')
  } 
});

overlay.addEventListener('click', () => {
  sideMenu.classList.add('hidden');
  overlay.classList.add('hidden') 
})
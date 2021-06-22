const headerBurger = document.querySelector('.header__burger');
const mobileNav = document.querySelector('.nav');

headerBurger.addEventListener('click', function(e) {
  headerBurger.classList.toggle('active');
  mobileNav.classList.toggle('active');
  document.body.classList.toggle('lock');
});
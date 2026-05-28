document.querySelector('.menu-toggle').addEventListener('click', () => {
  const nav = document.querySelector('.main-nav');
  nav.classList.toggle('open');
  console.log('Toggled menu, open:', nav.classList.contains('open'));
});
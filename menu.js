const menu = document.querySelector('.menu');
const close = document.querySelector('.times');
const mobileNavigation = document.querySelector('.mobile-nav-links');

menu.addEventListener('click', () => {
  // if (width)
  mobileNavigation.style.display = 'block';
  
});

close.addEventListener('click', () => {
  mobileNavigation.style.display = 'none';
});


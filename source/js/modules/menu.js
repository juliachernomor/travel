let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');
let headerPrimary = document.querySelector('.header-primary');

navMain.classList.remove('nav--nojs');

const effectMenu = () => {
  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('nav--closed')) {
      navMain.classList.remove('nav--closed');
      navMain.classList.add('nav--opened');
      headerPrimary.style.backgroundColor = 'white';
    } else {
      navMain.classList.add('nav--closed');
      navMain.classList.remove('nav--opened');
    }
  });
};

export {effectMenu};

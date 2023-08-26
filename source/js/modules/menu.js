let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');
let header = document.querySelector('#header');

navMain.classList.remove('nav--nojs');

const effectMenu = () => {
  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('nav--closed')) {
      navMain.classList.remove('nav--closed');
      navMain.classList.add('nav--opened');
      header.classList.add('header--active');
    } else {
      navMain.classList.add('nav--closed');
      navMain.classList.remove('nav--opened');
      header.classList.remove('header--active');
    }
  });
};

export {effectMenu};

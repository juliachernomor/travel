import {ScrollLock} from '../utils/scroll-lock';
window.scrollLock = new ScrollLock();


let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');
let header = document.querySelector('#header');
let navItems = document.querySelectorAll('.nav__item');


navMain.classList.remove('nav--nojs');

const closeMenu = () => {
  navMain.classList.add('nav--closed');
  navMain.classList.remove('nav--opened');
  header.classList.remove('header--active');
  window.scrollLock.enableScrolling();
  document.removeEventListener('click', onDocumentOutside);
};

const openMenu = () => {
  navMain.classList.remove('nav--closed');
  navMain.classList.add('nav--opened');
  header.classList.add('header--active');
  window.scrollLock.disableScrolling();
  document.addEventListener('click', onDocumentOutside);
};

const onDocumentOutside = (evt) => {
  if (evt.target === header || header.contains(evt.target)) {
    return;
  } else {
    closeMenu();
  }
};

navItems.forEach((element) => element.addEventListener('click', (evt) => {
  if (evt) {
    if (navMain.classList.contains('nav--opened')) {
      closeMenu();
    }
  }
}));

const effectMenu = () => {
  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('nav--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  });
};

export {effectMenu};

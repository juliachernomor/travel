import swiper from './swiper';

const createHeroSlider = () => {
  new swiper('.swiper--1', {
    loop: true,
    allowTouchMove: true,
    pagination: {
      el: '.hero__pagination',
      type: "bullets",
      clickable: true,
    },
  });
};

const createTourSlider = () => {
  new swiper('.swiper--2', {
    navigation: {
      nextEl: '.tours__swiper-next',
      prevEl: '.tours__swiper-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerColumn: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 18,
      },
      1200: {
      slidesPerView: 3,
      slidesPerColumn: 1,
      spaceBetween: 30,
    },
  }
});
};

const createEducationSlider = () => {
  new swiper('.swiper--3', {
    navigation: {
      nextEl: '.education__swiper-next',
      prevEl: '.education__swiper-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerColumn: 1,
      },
      768: {
        slidesPerView: 3,
        slidesPerColumn: 1,
        spaceBetween: 30,
      },
      1200: {
      slidesPerView: 4,
      slidesPerColumn: 1,
      spaceBetween: 30,
    },
  }
});
};



export {createHeroSlider, createTourSlider, createEducationSlider};




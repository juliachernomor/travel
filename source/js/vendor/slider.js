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
    slidesPerView: 3,
    slidesPerColumn: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.tours__swiper-next',
      prevEl: '.tours__swiper-prev',
    },
    // breakpoints: {
    //   1200: {
    //   slidesPerView: 3,
    //   slidesPerColumn: 1,
    //   spaceBetween: 30,
    // },
  // }
});
};



export {createHeroSlider, createTourSlider};




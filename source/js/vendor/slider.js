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

const createReviewsSlider = () => {
  new swiper('.swiper--4', {
    slidesPerView:1,
    allowTouchMove: true,
    navigation: {
      nextEl: '.reviews__swiper-next',
      prevEl: '.reviews__swiper-prev',
    },
  })
}

let init = false;
const createAdvSlider = () => {
    const mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    const tablet = window.matchMedia('(min-width: 768px) and (max-width: 1199px)');
    const desktop = window.matchMedia('(min-width: 1200px)');

    // Enable (for mobile)
    if(desktop.matches) {
        if (!init) {
            init = true;
            swiper = new swiper('.swiper--5', {
                slidesPerView: 3,
                loop: true,
                spaceBetween: 30,

                navigation: {
                    nextEl: '.advantages__swiper-next',
                    prevEl: '.advantages__swiper-prev',
                },
            });
        }

    }

    else if(tablet.matches) {
        swiper.destroy();
        init = false;
    }

    else if(mobile.matches) {
        swiper.destroy();
        init = false;
    }
}


export {createHeroSlider, createTourSlider, createEducationSlider, createReviewsSlider, createAdvSlider};




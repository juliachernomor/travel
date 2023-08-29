import swiper from './swiper';

const elementHero = document.querySelector('.swiper--1')
const createHeroSlider = () => {
  if (elementHero) {
    new swiper('.swiper--1', {
      loop: true,
      breakpoints: {
        320: {
          allowTouchMove: true,
        },
        768: {
          allowTouchMove: true,
        },
        1200: {
          allowTouchMove: false,
        },
      },
      pagination: {
        el: '.hero__pagination',
        type: "bullets",
        clickable: true,
        },
    });
  }
}

const elementTour = document.querySelector('.swiper--2');
const createTourSlider = () => {
  if (elementTour) {
    new swiper('.swiper--2', {
      loop: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 18,
          allowTouchMove: true,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
          allowTouchMove: false,
        },
      },
      navigation: {
        nextEl: '.tours__swiper-next',
        prevEl: '.tours__swiper-prev',
      },
    });
  };
}

const elementEducation = document.querySelector('.swiper--3');
const createEducationSlider = () => {
  if (elementEducation) {
    new swiper('.swiper--3', {
      loop: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween:20,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
          allowTouchMove: true,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
          allowTouchMove: false,
        },
      },
      navigation: {
        nextEl: '.education__swiper-next',
        prevEl: '.education__swiper-prev',
      },
    });
  };
}

const elementReviews = document.querySelector('.swiper--4');
const createReviewsSlider = () => {
  if (elementReviews) {
    new swiper('.swiper--4', {
      loop: false,
      slidesPerView:1,
      breakpoints: {
        320: {
          allowTouchMove: true,
        },
        768: {
          allowTouchMove: true,
        },
        1200: {
          allowTouchMove: false,
        },
      },
      navigation: {
        nextEl: '.reviews__swiper-next',
        prevEl: '.reviews__swiper-prev',
      },
    });
  }
}

const elementAdventure = document.querySelector('.swiper--5');
const createAdventureSlider = () => {
  if (elementAdventure) {

  let swiper5;
  const initSwiper = () => {
    swiper5 = new swiper('.swiper--5', {
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
          allowTouchMove: false,
          init:true,
        }
      },
      navigation: {
        nextEl: '.advantages__swiper-next',
        prevEl: '.advantages__swiper-prev',
      },
    });
  }

  function destroySwiper() {
    if(swiper5) {
      swiper5.destroy();
      swiper5 = null;
    }
  }

  const handleWindowSizeChange = () => {
    if(window.innerWidth > 1199) {
      if (!swiper5) {
        initSwiper();
      }
    } else if ((window.innerWidth < 1200)) {
      if (swiper5) {
        destroySwiper();
      }
    }
  };

    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
  }
};

const elementGallery = document.querySelector('.swiper--6');
const createGallerySlider = () => {
  if (elementGallery) {
    new swiper('.swiper--6', {
      loop: false,
      breakpoints: {
        320: {
          slidesPerView: 'auto',
          spaceBetween: 5.19,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 5.19,
          allowTouchMove: true,
        },
        1200: {
          slidesPerView: 'auto',
          spaceBetween: 5.19,
          allowTouchMove: false,
        },
      },
      navigation: {
        nextEl: '.photogallery__swiper-next',
        prevEl: '.photogallery__swiper-prev',
      },
    });
  };
}

export {createHeroSlider, createTourSlider, createEducationSlider, createReviewsSlider, createAdventureSlider, createGallerySlider};

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
        allowTouchMove: true,
        slidesPerView: 1,
        slidesPerColumn: 1,
      },
      768: {
        allowTouchMove: true,
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
        allowTouchMove: true,
        slidesPerView: 3,
        slidesPerColumn: 1,
        spaceBetween: 30,
      },
      1200: {
        allowTouchMove: true,
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 30,
      },
    }
  });
};

const createReviewsSlider = () => {
  new swiper('.swiper--4', {
    allowTouchMove: true,
    slidesPerView:1,
    allowTouchMove: true,
    navigation: {
      nextEl: '.reviews__swiper-next',
      prevEl: '.reviews__swiper-prev',
    },
  })
}

const createAdvSlider = () => {

  let swiper5 = null;
  const initSwiper = () => {
    swiper5 = new swiper('.swiper--5', {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 30,
      allowTouchMove: true,
      init:true,
      navigation: {
        nextEl: '.advantages__swiper-next',
        prevEl: '.advantages__swiper-prev',
      },
    });
  }

  function destroySwiper() {
    if(swiper5) {
      swiper5.destroy();
      swiper5 =null;
    }
  }

  const handleWindowSizeAdvantageChange = () => {
    if(window.innerWidth > 1199) {
      if (!swiper5) {
        initSwiper();
      } else {
        destroySwiper();
      }
    }
  }

  handleWindowSizeAdvantageChange();

  window.addEventListener('resize', handleWindowSizeAdvantageChange);
}

const createGallerySlider = () => {
  new swiper('.swiper--6', {
    navigation: {
      nextEl: '.photogallery__swiper-next',
      prevEl: '.photogallery__swiper-prev',
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 'auto',
        spaceBetween: 5.19,
      },
      768: {
        allowTouchMove: true,
        slidesPerView: 'auto',
        spaceBetween: 5.19,
      },
      1200: {
        slidesPerView: 'auto',
      spaceBetween: 5.19,
    },
  }
});
};


export {createHeroSlider, createTourSlider, createEducationSlider, createReviewsSlider, createAdvSlider, createGallerySlider};




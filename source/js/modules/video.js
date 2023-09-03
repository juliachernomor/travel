const video = document.querySelector('.video__wrapper');
const link = document.querySelector('.video__link');
const button = document.querySelector('.video__button');

const showButton = () => {
  button.style.display = 'block';
};

const createVideo = (element) => {
  if (document.querySelector('.video__wrapper iframe')) {
    document.querySelector('.video__wrapper iframe').remove();
  }
  const iframe = document.createElement('iframe');
  iframe.title = 'YouTube video player';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.loading = 'lazy';
  iframe.style = 'border: 0;';
  (element).appendChild(iframe);
};

const setupVideo = () => {
  if (video && button) {
    button.addEventListener('click', () => {
      button.style.display = 'none';
      createVideo(document.querySelector('.video__wrapper'));
      document.querySelector('.video__wrapper iframe').src = 'https://www.youtube.com/embed/4pNzGIpj6kM?autoplay=1';
    });
    link.removeAttribute('href');
    video.classList.add('video--enabled');
  }
};

export {setupVideo, createVideo, showButton};

const video = document.querySelector('.video__wrapper');
const link = document.querySelector('.video__link');
const button = document.querySelector('.video__button');

const setupVideo = () => {
  button.addEventListener('click', () => {
    link.remove();
    button.remove();
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';
    iframe.title = 'YouTube video player';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.loading = 'lazy';
    video.appendChild(iframe);
  });
  link.removeAttribute('href');
  video.classList.add('video--enabled');
};
export {setupVideo};

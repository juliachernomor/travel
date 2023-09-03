const createAudio = (element1) => {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://music.yandex.ru/iframe/#track/116266134/25474374';
  iframe.title = 'audio player';
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.border = 'none';
  (element1).appendChild(iframe);
};

const setupAudio = () => {
  if (document.querySelector('.hero-slider__audio')) {
    createAudio(document.querySelector('.hero-slider__audio'));
  }
};

export {setupAudio, createAudio};

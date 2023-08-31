import L from '../vendor/leaflet';

const iconOptions = {
  iconUrl: 'img/sprite/map-pin.svg',
  className: 'contact-map__map-pin',
};

const element = document.getElementById('map');

const initmap = () => {
  const map = L.map(element, {center: [55.8230, 37.623], zoomSnap: 0, scrollWheelZoom: false, zoom: 12.95});

  L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=WuihtyzONCDMrCzLaEOa').addTo(map);

  let customIcon = L.icon(iconOptions);
  const markerOptions = {
    icon: customIcon,
    draggable: true,
    title: 'Мы находимся здесь!',
  };

  L.marker([55.8207, 37.6319], markerOptions).addTo(map).bindPopup('Прекрасного дня!');
};

export {initmap};

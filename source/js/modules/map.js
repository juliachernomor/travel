import L from '../vendor/leaflet';

const element = document.getElementById('map');


const initmap = () => {
  let pointZoom;
  let iconOptions;

  let pointMapZoom = () => {
    if (window.innerWidth > 1199) {
      pointZoom = 12.95;
      return pointZoom;
    }
    if (window.innerWidth > 767 && window.innerWidth < 1200) {
      pointZoom = 12.9;
      return pointZoom;
    } else {
      pointZoom = 12.79;
      return pointZoom;
    }
  };

  let iconMapOptions = () => {
    if (window.innerWidth > 1199) {
      iconOptions = {
        iconUrl: 'img/sprite/map-pin.svg',
        iconSize: [48, 48],
        iconAnchor: [23, 21],
      };
      return iconOptions;
    }
    if (window.innerWidth > 767 && window.innerWidth < 1200) {
      iconOptions = {
        iconUrl: 'img/sprite/map-pin.svg',
        iconSize: [42, 42],
        iconAnchor: [20, 32],
      };
      return iconOptions;
    } else {
      iconOptions = {
        iconUrl: 'img/sprite/map-pin.svg',
        iconSize: [28, 28],
        iconAnchor: [12, 20],
      };
      return iconOptions;
    }
  };

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1199) {
      pointMapZoom();
      iconMapOptions();
      location.reload();
    }
    if (window.innerWidth > 767 && window.innerWidth < 1200) {
      pointMapZoom();
      iconMapOptions();
      location.reload();
    }
    if (window.innerWidth < 768) {
      pointMapZoom();
      iconMapOptions();
      location.reload();
    }
  });

  let customIcon = L.icon(iconMapOptions());
  const markerOptions = {
    icon: customIcon,
    draggable: true,
    title: 'Мы находимся здесь!',
  };

  let map = L.map(element, {center: [55.8230, 37.623], zoomSnap: 0, scrollWheelZoom: false, zoom: pointMapZoom()});
  L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=WuihtyzONCDMrCzLaEOa').addTo(map);
  L.marker([55.8183, 37.6363], markerOptions).addTo(map).bindPopup('Прекрасного дня!');
};

export {initmap};

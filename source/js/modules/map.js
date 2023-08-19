const iconOptions = {
  iconUrl: 'img/sprite/map-pin.svg',
  iconSize: [48, 48],
};
let L = window.L;
let map;
const initmap = () => {

  const mapOptions = () => {
    if (window.innerWidth > 1199) {
      map = L.map('map', {center: [55.8230, 37.623], zoomSnap: 0, zoom: 12.95});
      return map;
    }
    if (window.innerWidth > 767 && window.innerWidth < 1200) {
      map = L.map('map', {center: [55.8230, 37.623], zoomSnap: 0, zoom: 12.9});
      return map;
    }
    return map;
  };
  mapOptions();

  L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=WuihtyzONCDMrCzLaEOa').addTo(map);
  let customIcon = L.icon(iconOptions);
  const markerOptions = {
    icon: customIcon,
    draggable: true,
    title: 'Мы находимся здесь!',
  };
  L.marker([55.8183, 37.6363], markerOptions).addTo(map).bindPopup('Прекрасного дня!');
  window.addEventListener('resize', mapOptions);
};

export {initmap};

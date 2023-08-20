const iconOptions = {
  iconUrl: 'img/sprite/map-pin.svg',
  iconSize: [48, 48],
};
let L = window.L;
let map;
let icon;
const initmap = () => {

  const mapOptions = () => {
    let customIcon = L.icon(iconOptions);
    const markerOptions = {
      icon: customIcon,
      draggable: true,
      title: 'Мы находимся здесь!',
    };
    if (window.innerWidth > 1199) {
      map = L.map('map', {center: [55.8230, 37.623], zoomSnap: 0, zoom: 12.95});
      icon = L.marker([55.8183, 37.6363], markerOptions).addTo(map).bindPopup('Прекрасного дня!');
      return [map, icon];
    }
    if (window.innerWidth > 767 && window.innerWidth < 1200) {
      map = L.map('map', {center: [55.8230, 37.623], zoomSnap: 0, zoom: 12.9});
      icon = L.marker([55.8193, 37.637], markerOptions).addTo(map).bindPopup('Прекрасного дня!');
      return [map, icon];
    } else {
      map = L.map('map', {center: [55.8225, 37.623], zoomSnap: 0, zoom: 12.79});
      icon = L.marker([55.8172, 37.6388], markerOptions).addTo(map).bindPopup('Прекрасного дня!');
      return [map, icon];
    }
  };
  mapOptions();
  L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=WuihtyzONCDMrCzLaEOa').addTo(map);
  window.addEventListener('resize', mapOptions);
};

export {initmap};

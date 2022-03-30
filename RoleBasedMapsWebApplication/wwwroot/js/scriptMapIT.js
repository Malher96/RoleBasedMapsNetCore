

let map = L.map('map').setView([51.505, -0.09], 5);
const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

var marker = L.marker([50.5, 30.5]);
var popup = marker.bindPopup('This is a popup').openPopup();
popup.addTo(map)

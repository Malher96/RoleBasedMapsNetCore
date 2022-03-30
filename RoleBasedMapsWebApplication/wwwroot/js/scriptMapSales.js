

let map = L.map('map').setView([40.73, -73.935], 5);
const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

var marker = L.marker([40.73, -73.935]);
var popup = marker.bindPopup('This is a popup').openPopup();
popup.addTo(map)

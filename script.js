// Initialize the map centered on Granada
var map = L.map("map").setView([37.192, -3.5996], 12);

// Add OpenStreetMap tiles
//L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//attribution: "&copy; OpenStreetMap contributors",
//}).addTo(map);

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
  subdomains: "abcd",
  maxZoom: 20,
}).addTo(map);

// Load the GeoJSON with temperature data
fetch("areas_with_mean_temp.geojson")
  .then((response) => response.json())
  .then((data) => {
    L.geoJson(data, {
      style: (feature) => ({
        fillColor: getColor(feature.properties.temperature_mean),
        weight: 1.5,
        opacity: 1,
        color: "#ffffff",
        fillOpacity: 0.7,
      }),
      onEachFeature: (feature, layer) => {
        layer.bindPopup(
          `<b>${feature.properties.Name}</b><br>Average LST: ${feature.properties.temperature_mean}°C <br> Urban fabric: ${feature.properties.Style} <br> Vegatation: ${feature.properties.Vegetation}`
        );
      },
    }).addTo(map);
  });

// Color scale
function getColor(temp) {
  return temp > 50
    ? "#FE8E22"
    : temp > 48
    ? "#FFA451"
    : temp > 46
    ? "#FFB86A"
    : temp > 44
    ? "#FFCF92"
    : "#FFD54F";
}

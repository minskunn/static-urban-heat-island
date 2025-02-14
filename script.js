// Initialize the map centered on Granada
var map = L.map("map").setView([37.1773, -3.5986], 13);

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
          `<b>${feature.properties.Name}</b><br>Mean Temp: ${feature.properties.temperature_mean}°C`
        );
      },
    }).addTo(map);
  });

// Function to determine color scale
function getColor(temp) {
  return temp > 50
    ? "#FF5722"
    : temp > 48
    ? "#FF7043"
    : temp > 46
    ? "#FF8A65"
    : temp > 44
    ? "#FFAB91"
    : "#FFD54F";
}

// Initialize the map centered on Granada
var map = L.map("map").setView([37.1773, -3.5986], 13);

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Load GeoJSON and create heatmap
fetch("temperature_points.geojson")
  .then((response) => response.json())
  .then((data) => {
    // Extract coordinates and temperature values for the heatmap
    var heatData = data.features.map((feature) => {
      var [lon, lat] = feature.geometry.coordinates;
      var temp = feature.properties.temperature; // Adjust this to match your property name
      return [lat, lon, temp]; // Heatmap expects [lat, lon, intensity]
    });

    // Add heatmap layer
    L.heatLayer(heatData, { radius: 25, blur: 15, maxZoom: 17 }).addTo(map);
  })
  .catch((error) => console.error("Error loading GeoJSON:", error));

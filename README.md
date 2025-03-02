**Urban Heat Island (UHI) Project Using Landsat Thermal Infrared Data**

Overview

This project utilizes Landsat thermal infrared data accessed through Google Earth Engine (GEE) to analyze Land Surface Temperature (LST) variations across different urban neighborhoods in Granada. The primary goal is to explore how LST correlates with urban fabric and architectural styles. The processed data is visualized in QGIS, where neighborhood boundaries were manually drawn using polygons to facilitate analysis.

Features

Landsat Thermal Infrared Data: Extracts LST using GEE for an accurate urban heat analysis.

Manual Polygon Creation: Neighborhoods were manually delineated in QGIS to capture detailed spatial differences.

Interactive Web Map: Uses Leaflet.js to visualize temperature data in a user-friendly way.

Urban Fabric & Architecture Analysis: Compares LST variations with architectural styles and vegetation presence.

GeoJSON Data Integration: Loads temperature and neighborhood characteristics dynamically.

Data Processing Steps

Data Collection:

Landsat thermal data retrieved from Google Earth Engine (GEE).

Temperature values processed and exported as GeoJSON.

Polygon Digitization:

Neighborhoods drawn manually in QGIS based on urban characteristics.

Attributes include urban form, vegetation presence, and architectural style.

Web Map Development:

Implemented using Leaflet.js for interactive visualization.

Data is loaded dynamically from areas_with_mean_temp.geojson.

Color-coded temperature visualization.

Analysis:

Examines the relationship between LST, urban fabric, and vegetation.

Highlights temperature variations across different neighborhoods.



How to Use

View the Web Map: Open the link in the browser to explore the LST variations.

Interact with Data: Click on different neighborhoods to view details about temperature and urban characteristics.


Future Improvements

Enhanced Data Analysis: Incorporate more environmental factors like elevation and land cover.

Machine Learning Integration: Predict LST based on urban parameters.

Time Series Analysis: Evaluate seasonal changes in urban heat.

More Visualization Options: Improve UI with charts and graphs.


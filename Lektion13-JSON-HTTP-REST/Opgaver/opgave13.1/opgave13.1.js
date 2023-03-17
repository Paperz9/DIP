// opgave13.1.js

const earthquakeUrl = // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';


fetch(earthquakeUrl)
    .then(response => response.json())
    .then(data => {
        let earthquakes = data.features;
        let table = document.getElementById('earthquakes-table');

        earthquakes.sort((a, b) => {b.properties.mag - a.properties.mag;});
        
        earthquakes.forEach(earthquake => {
            let mag = earthquake.properties.mag;
            let loc = earthquake.properties.place;
            let time = new Date(earthquake.properties.time);

            if(mag > 5) {
                let row = '<tr><td>' + mag + '</td><td>' + loc + '</td><td>' + time + '</td></tr>';
                table.innerHTML += row;
            }
        });
    });
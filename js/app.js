(function () {

    // set default map positioning 
    var map = L.map('map').setView([40.7607793, -111.89104739999999], 13);

    // create base map
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Developed by <a href="#" target="_blank">Jade Allen Cook</a> & <a href="#" target="_blank">Geoffery Thatcher</a> for <a href="#" target="_blank">Deseret News</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiamFkZWFsbGVuY29vayIsImEiOiJjamU3cTA5ZDgwNTNnMnFvMWRjdnI1aXYzIn0.63_s4EQVQur7r670eBY3DA',
        style: 'mapbox://styles/mapbox/light-v9'
    }).addTo(map);

    // add map to container
    L.geoJSON(usm).addTo(map);

    // determine correct color
    function getColor(percent) {
        percent = Math.round(percent * 100);
        return percent < 20 ? '#fdf5f1' :
            percent < 40 ? '#f3c0a9' :
            percent < 60 ? '#e9785a' :
            percent < 80 ? '#c1352c' :
            percent < 100 ? '#5d0e12' :
            '#FFF';
    }

    // applying style to shapes
    function style(feature) {
        return {
            fillColor: getColor(feature.properties.URM_URM_Pe),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.50
        };
    }

    // apply style to map
    L.geoJson(usm, {
        style: style
    }).addTo(map);

    // highlighting for mouse events
    function highlightFeature(e) {
        var layer = e.target;
        layer.setStyle({
            weight: 2,
            color: '#fff',
            dashArray: '',
            fillOpacity: 0.75
        });
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
    }

    // resets shape after mouse leaves
    function resetHighlight(e) {
        geojson.resetStyle(e.target);
    }

    // zooms into shape after click
    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
    }

    // adds event to each shape
    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
    }

    // apply listeners
    geojson = L.geoJson(usm, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(map);

})();
(function () {

    // set default map positioning 
    var map = L.map('map').setView([40.7607793, -111.89104739999999], 13);

    // create base map
    L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png?access_token={accessToken}', {
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
        if (percent < 1) percent = Math.round(percent * 100);
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

    var info = L.control();

    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info');
        this.update();
        return this._div;
    };

    // method that we will use to update the control based on feature properties passed
    info.update = function (props) {
        this._div.innerHTML = '<h4>Will It Topple?</h4>';
        if (props !== undefined) {
            this._div.innerHTML += 'There\'s a <b>' + props.percent + '%</b> of fall<br />';
            this._div.innerHTML += 'Average build is <b>' + props.year + '</b>';
        } else {
            this._div.innerHTML += 'Hover over a section';
        }
    };

    info.addTo(map);

    function highlightFeature(e) {
        info.update({
            year: e.target.feature.properties.AvgYearBul,
            percent: Math.round(e.target.feature.properties.URM_URM_Pe * 100)
        });
    }

    function resetHighlight(e) {
        info.update();
    }

    var legend = L.control({
        position: 'bottomright'
    });

    legend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend'),
            grades = [20, 40, 60, 80, 100],
            labels = [];
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML += '<i style="background:' + getColor(grades[i] - 1) + '"></i> ';
            div.innerHTML += (grades[i] - 20) + '&ndash;' + grades[i] + '%<br />';
        }
        return div;
    };

    legend.addTo(map);

})();
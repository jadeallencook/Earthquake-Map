var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
        new ol.layer.Tile({
            'title': 'OSM HOT',
            'type': 'base',
            source: new ol.source.XYZ({
                url: 'http://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
                attributions: [new ol.Attribution({
                    html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
                })]
            })
        })
    ]
});
var format_Counties_0 = new ol.format.GeoJSON();
var features_Counties_0 = format_Counties_0.readFeatures(json_Counties_0, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_Counties_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({
        html: '<a href=""></a>'
    })],
});
jsonSource_Counties_0.addFeatures(features_Counties_0);
var lyr_Counties_0 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Counties_0,
    style: style_Counties_0,
    title: '<img src="styles/legend/Counties_0.png" /> Counties'
});
var format_PercentofbuildingslikelytobeURMS_1 = new ol.format.GeoJSON();
var features_PercentofbuildingslikelytobeURMS_1 = format_PercentofbuildingslikelytobeURMS_1.readFeatures(json_PercentofbuildingslikelytobeURMS_1, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_PercentofbuildingslikelytobeURMS_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({
        html: '<a href=""></a>'
    })],
});
jsonSource_PercentofbuildingslikelytobeURMS_1.addFeatures(features_PercentofbuildingslikelytobeURMS_1);
var lyr_PercentofbuildingslikelytobeURMS_1 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_PercentofbuildingslikelytobeURMS_1,
    style: style_PercentofbuildingslikelytobeURMS_1,
    title: 'Percent of buildings likely to be URMS<br />\
    <img src="styles/legend/PercentofbuildingslikelytobeURMS_1_0.png" />  0.00 - 0.20 <br />\
    <img src="styles/legend/PercentofbuildingslikelytobeURMS_1_1.png" />  0.20 - 0.40 <br />\
    <img src="styles/legend/PercentofbuildingslikelytobeURMS_1_2.png" />  0.40 - 0.60 <br />\
    <img src="styles/legend/PercentofbuildingslikelytobeURMS_1_3.png" />  0.60 - 0.80 <br />\
    <img src="styles/legend/PercentofbuildingslikelytobeURMS_1_4.png" />  0.80 - 0.91 <br />'
});

lyr_Counties_0.setVisible(true);
lyr_PercentofbuildingslikelytobeURMS_1.setVisible(true);
var layersList = [baseLayer, lyr_Counties_0, lyr_PercentofbuildingslikelytobeURMS_1];
lyr_Counties_0.set('fieldAliases', {
    'COUNTYNBR': 'COUNTYNBR',
    'ENTITYNBR': 'ENTITYNBR',
    'ENTITYYR': 'ENTITYYR',
    'NAME': 'NAME',
    'FIPS': 'FIPS',
    'STATEPLANE': 'STATEPLANE',
    'POP_LASTCE': 'POP_LASTCE',
    'POP_CURRES': 'POP_CURRES',
    'FIPS_STR': 'FIPS_STR',
    'COLOR4': 'COLOR4',
    'Shape_Leng': 'Shape_Leng',
    'Shape_Area': 'Shape_Area',
});
lyr_PercentofbuildingslikelytobeURMS_1.set('fieldAliases', {
    'OBJECTID': 'OBJECTID',
    'Tract': 'Tract',
    'CountyFips': 'CountyFips',
    'BldgScheme': 'BldgScheme',
    'Tract6': 'Tract6',
    'TractArea': 'TractArea',
    'NumAggrBoc': 'NumAggrBoc',
    'CenLat': 'CenLat',
    'CenLongit': 'CenLongit',
    'Length': 'Length',
    'Scheme': 'Scheme',
    'AvgYearBul': 'Avg. Build',
    'OBJECTID_1': 'OBJECTID_1',
    'ID': 'ID',
    'Tract_1': 'Tract_1',
    'W1I': 'W1I',
    'W2I': 'W2I',
    'S1LI': 'S1LI',
    'S1MI': 'S1MI',
    'S1HI': 'S1HI',
    'S2LI': 'S2LI',
    'S2MI': 'S2MI',
    'S2HI': 'S2HI',
    'S3I': 'S3I',
    'S4LI': 'S4LI',
    'S4MI': 'S4MI',
    'S4HI': 'S4HI',
    'S5LI': 'S5LI',
    'S5MI': 'S5MI',
    'S5HI': 'S5HI',
    'C1LI': 'C1LI',
    'C1MI': 'C1MI',
    'C1HI': 'C1HI',
    'C2LI': 'C2LI',
    'C2MI': 'C2MI',
    'C2HI': 'C2HI',
    'C3LI': 'C3LI',
    'C3MI': 'C3MI',
    'C3HI': 'C3HI',
    'PC1I': 'PC1I',
    'PC2LI': 'PC2LI',
    'PC2MI': 'PC2MI',
    'PC2HI': 'PC2HI',
    'RM1LI': 'RM1LI',
    'RM1MI': 'RM1MI',
    'RM2LI': 'RM2LI',
    'RM2MI': 'RM2MI',
    'RM2HI': 'RM2HI',
    'URMLI': 'URMLI',
    'URMMI': 'URMMI',
    'MHI': 'MHI',
    'TotalCount': 'TotalCount',
    'StrTract': 'StrTract',
    'SHAPE_Leng': 'SHAPE_Leng',
    'SHAPE_Area': 'SHAPE_Area',
    'URM_URM_Pe': '% of URMS',
});
lyr_Counties_0.set('fieldImages', {
    'COUNTYNBR': 'Hidden',
    'ENTITYNBR': 'Hidden',
    'ENTITYYR': 'Hidden',
    'NAME': 'TextEdit',
    'FIPS': 'Hidden',
    'STATEPLANE': 'Hidden',
    'POP_LASTCE': 'Hidden',
    'POP_CURRES': 'Hidden',
    'FIPS_STR': 'Hidden',
    'COLOR4': 'Hidden',
    'Shape_Leng': 'Hidden',
    'Shape_Area': 'Hidden',
});
lyr_PercentofbuildingslikelytobeURMS_1.set('fieldImages', {
    'OBJECTID': 'Hidden',
    'Tract': 'Hidden',
    'CountyFips': 'Hidden',
    'BldgScheme': 'Hidden',
    'Tract6': 'Hidden',
    'TractArea': 'Hidden',
    'NumAggrBoc': 'Hidden',
    'CenLat': 'Hidden',
    'CenLongit': 'Hidden',
    'Length': 'Hidden',
    'Scheme': 'Hidden',
    'AvgYearBul': 'TextEdit',
    'OBJECTID_1': 'Hidden',
    'ID': 'Hidden',
    'Tract_1': 'Hidden',
    'W1I': 'Hidden',
    'W2I': 'Hidden',
    'S1LI': 'Hidden',
    'S1MI': 'Hidden',
    'S1HI': 'Hidden',
    'S2LI': 'Hidden',
    'S2MI': 'Hidden',
    'S2HI': 'Hidden',
    'S3I': 'Hidden',
    'S4LI': 'Hidden',
    'S4MI': 'Hidden',
    'S4HI': 'Hidden',
    'S5LI': 'Hidden',
    'S5MI': 'Hidden',
    'S5HI': 'Hidden',
    'C1LI': 'Hidden',
    'C1MI': 'Hidden',
    'C1HI': 'Hidden',
    'C2LI': 'Hidden',
    'C2MI': 'Hidden',
    'C2HI': 'Hidden',
    'C3LI': 'Hidden',
    'C3MI': 'Hidden',
    'C3HI': 'Hidden',
    'PC1I': 'Hidden',
    'PC2LI': 'Hidden',
    'PC2MI': 'Hidden',
    'PC2HI': 'Hidden',
    'RM1LI': 'Hidden',
    'RM1MI': 'Hidden',
    'RM2LI': 'Hidden',
    'RM2MI': 'Hidden',
    'RM2HI': 'Hidden',
    'URMLI': 'Hidden',
    'URMMI': 'Hidden',
    'MHI': 'Hidden',
    'TotalCount': 'Hidden',
    'StrTract': 'Hidden',
    'SHAPE_Leng': 'Hidden',
    'SHAPE_Area': 'Hidden',
    'URM_URM_Pe': 'TextEdit',
});
lyr_Counties_0.set('fieldLabels', {
    'NAME': 'no label',
});
lyr_PercentofbuildingslikelytobeURMS_1.set('fieldLabels', {
    'AvgYearBul': 'inline label',
    'URM_URM_Pe': 'inline label',
});
lyr_PercentofbuildingslikelytobeURMS_1.on('precompose', function (evt) {
    evt.context.globalCompositeOperation = 'normal';
});
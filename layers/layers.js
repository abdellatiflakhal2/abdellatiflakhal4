var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2_1 = new ol.format.GeoJSON();
var features_2_1 = format_2_1.readFeatures(json_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_1.addFeatures(features_2_1);
var lyr_2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2_1, 
                style: style_2_1,
                popuplayertitle: '2',
                interactive: true,
                title: '<img src="styles/legend/2_1.png" /> 2'
            });
var format_2_2 = new ol.format.GeoJSON();
var features_2_2 = format_2_2.readFeatures(json_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_2.addFeatures(features_2_2);
var lyr_2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2_2, 
                style: style_2_2,
                popuplayertitle: '2',
                interactive: true,
                title: '<img src="styles/legend/2_2.png" /> 2'
            });
var format_1_3 = new ol.format.GeoJSON();
var features_1_3 = format_1_3.readFeatures(json_1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_3.addFeatures(features_1_3);
var lyr_1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1_3, 
                style: style_1_3,
                popuplayertitle: '1',
                interactive: true,
                title: '<img src="styles/legend/1_3.png" /> 1'
            });
var format_1_4 = new ol.format.GeoJSON();
var features_1_4 = format_1_4.readFeatures(json_1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_4.addFeatures(features_1_4);
var lyr_1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1_4, 
                style: style_1_4,
                popuplayertitle: '1',
                interactive: true,
                title: '<img src="styles/legend/1_4.png" /> 1'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_2_1.setVisible(true);lyr_2_2.setVisible(true);lyr_1_3.setVisible(true);lyr_1_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2_1,lyr_2_2,lyr_1_3,lyr_1_4];
lyr_2_1.set('fieldAliases', {'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'centre_ré': 'centre_ré', });
lyr_2_2.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'centre_ré': 'centre_ré', });
lyr_1_3.set('fieldAliases', {'Airport_Na': 'Airport_Na', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Google_Map': 'Google_Map', });
lyr_1_4.set('fieldAliases', {'fid': 'fid', 'Airport_Na': 'Airport_Na', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Google_Map': 'Google_Map', });
lyr_2_1.set('fieldImages', {'REGION': '', 'NOM_REGION': '', 'centre_ré': '', });
lyr_2_2.set('fieldImages', {'fid': '', 'REGION': '', 'NOM_REGION': '', 'centre_ré': '', });
lyr_1_3.set('fieldImages', {'Airport_Na': '', 'Latitude': '', 'Longitude': '', 'Google_Map': '', });
lyr_1_4.set('fieldImages', {'fid': '', 'Airport_Na': '', 'Latitude': '', 'Longitude': '', 'Google_Map': '', });
lyr_2_1.set('fieldLabels', {'REGION': 'no label', 'NOM_REGION': 'no label', 'centre_ré': 'no label', });
lyr_2_2.set('fieldLabels', {'fid': 'no label', 'REGION': 'no label', 'NOM_REGION': 'no label', 'centre_ré': 'no label', });
lyr_1_3.set('fieldLabels', {'Airport_Na': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Google_Map': 'no label', });
lyr_1_4.set('fieldLabels', {'fid': 'no label', 'Airport_Na': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Google_Map': 'no label', });
lyr_1_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
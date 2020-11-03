var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_countofmontecristo_1 = new ol.format.GeoJSON();
var features_countofmontecristo_1 = format_countofmontecristo_1.readFeatures(json_countofmontecristo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_countofmontecristo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_countofmontecristo_1.addFeatures(features_countofmontecristo_1);
var lyr_countofmontecristo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_countofmontecristo_1, 
                style: style_countofmontecristo_1,
                interactive: true,
    title: 'count of monte cristo<br />\
    <img src="styles/legend/countofmontecristo_1_0.png" /> Island<br />\
    <img src="styles/legend/countofmontecristo_1_1.png" /> Italy<br />\
    <img src="styles/legend/countofmontecristo_1_2.png" /> Marseille<br />\
    <img src="styles/legend/countofmontecristo_1_3.png" /> Paris<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_countofmontecristo_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_countofmontecristo_1];
lyr_countofmontecristo_1.set('fieldAliases', {'Name': 'Name', 'Y': 'Y', 'X': 'X', 'Summary or Label': 'Summary or Label', 'location': 'location', });
lyr_countofmontecristo_1.set('fieldImages', {'Name': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Summary or Label': 'TextEdit', 'location': 'TextEdit', });
lyr_countofmontecristo_1.set('fieldLabels', {'Name': 'header label', 'Summary or Label': 'header label', 'location': 'header label', });
lyr_countofmontecristo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];

var format_MUKIM_0 = new ol.format.GeoJSON();
var features_MUKIM_0 = format_MUKIM_0.readFeatures(json_MUKIM_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUKIM_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUKIM_0.addFeatures(features_MUKIM_0);
var lyr_MUKIM_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUKIM_0, 
                style: style_MUKIM_0,
                popuplayertitle: 'MUKIM',
                interactive: true,
                title: '<img src="styles/legend/MUKIM_0.png" /> MUKIM'
            });
var format_OCEANcopy_1 = new ol.format.GeoJSON();
var features_OCEANcopy_1 = format_OCEANcopy_1.readFeatures(json_OCEANcopy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OCEANcopy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OCEANcopy_1.addFeatures(features_OCEANcopy_1);
var lyr_OCEANcopy_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OCEANcopy_1, 
                style: style_OCEANcopy_1,
                popuplayertitle: 'OCEAN copy',
                interactive: true,
                title: '<img src="styles/legend/OCEANcopy_1.png" /> OCEAN copy'
            });
var format_WATERWAY_2 = new ol.format.GeoJSON();
var features_WATERWAY_2 = format_WATERWAY_2.readFeatures(json_WATERWAY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WATERWAY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WATERWAY_2.addFeatures(features_WATERWAY_2);
var lyr_WATERWAY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WATERWAY_2, 
                style: style_WATERWAY_2,
                popuplayertitle: 'WATERWAY',
                interactive: true,
    title: 'WATERWAY<br />\
    <img src="styles/legend/WATERWAY_2_0.png" /> Stream<br />\
    <img src="styles/legend/WATERWAY_2_1.png" /> River<br />' });
var format_PARKcopy_3 = new ol.format.GeoJSON();
var features_PARKcopy_3 = format_PARKcopy_3.readFeatures(json_PARKcopy_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARKcopy_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARKcopy_3.addFeatures(features_PARKcopy_3);
var lyr_PARKcopy_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARKcopy_3, 
                style: style_PARKcopy_3,
                popuplayertitle: 'PARK copy',
                interactive: true,
                title: '<img src="styles/legend/PARKcopy_3.png" /> PARK copy'
            });
var format_FOREST_4 = new ol.format.GeoJSON();
var features_FOREST_4 = format_FOREST_4.readFeatures(json_FOREST_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FOREST_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOREST_4.addFeatures(features_FOREST_4);
var lyr_FOREST_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FOREST_4, 
                style: style_FOREST_4,
                popuplayertitle: 'FOREST',
                interactive: true,
                title: '<img src="styles/legend/FOREST_4.png" /> FOREST'
            });
var format_PARK2_5 = new ol.format.GeoJSON();
var features_PARK2_5 = format_PARK2_5.readFeatures(json_PARK2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARK2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARK2_5.addFeatures(features_PARK2_5);
var lyr_PARK2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARK2_5, 
                style: style_PARK2_5,
                popuplayertitle: 'PARK 2',
                interactive: true,
                title: '<img src="styles/legend/PARK2_5.png" /> PARK 2'
            });
var format_wetland_6 = new ol.format.GeoJSON();
var features_wetland_6 = format_wetland_6.readFeatures(json_wetland_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wetland_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wetland_6.addFeatures(features_wetland_6);
var lyr_wetland_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wetland_6, 
                style: style_wetland_6,
                popuplayertitle: 'wetland',
                interactive: true,
                title: '<img src="styles/legend/wetland_6.png" /> wetland'
            });
var format_SWAMP_7 = new ol.format.GeoJSON();
var features_SWAMP_7 = format_SWAMP_7.readFeatures(json_SWAMP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SWAMP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SWAMP_7.addFeatures(features_SWAMP_7);
var lyr_SWAMP_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SWAMP_7, 
                style: style_SWAMP_7,
                popuplayertitle: 'SWAMP',
                interactive: true,
                title: '<img src="styles/legend/SWAMP_7.png" /> SWAMP'
            });
var format_SAND_8 = new ol.format.GeoJSON();
var features_SAND_8 = format_SAND_8.readFeatures(json_SAND_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAND_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAND_8.addFeatures(features_SAND_8);
var lyr_SAND_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAND_8, 
                style: style_SAND_8,
                popuplayertitle: 'SAND',
                interactive: true,
                title: '<img src="styles/legend/SAND_8.png" /> SAND'
            });
var format_BKTPELINDUNG_9 = new ol.format.GeoJSON();
var features_BKTPELINDUNG_9 = format_BKTPELINDUNG_9.readFeatures(json_BKTPELINDUNG_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BKTPELINDUNG_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BKTPELINDUNG_9.addFeatures(features_BKTPELINDUNG_9);
var lyr_BKTPELINDUNG_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BKTPELINDUNG_9, 
                style: style_BKTPELINDUNG_9,
                popuplayertitle: 'BKT PELINDUNG',
                interactive: true,
                title: '<img src="styles/legend/BKTPELINDUNG_9.png" /> BKT PELINDUNG'
            });
var format_SECROAD_10 = new ol.format.GeoJSON();
var features_SECROAD_10 = format_SECROAD_10.readFeatures(json_SECROAD_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SECROAD_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SECROAD_10.addFeatures(features_SECROAD_10);
var lyr_SECROAD_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SECROAD_10, 
                style: style_SECROAD_10,
                popuplayertitle: 'SEC ROAD',
                interactive: true,
                title: '<img src="styles/legend/SECROAD_10.png" /> SEC ROAD'
            });
var format_MAINROADcopy_11 = new ol.format.GeoJSON();
var features_MAINROADcopy_11 = format_MAINROADcopy_11.readFeatures(json_MAINROADcopy_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAINROADcopy_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAINROADcopy_11.addFeatures(features_MAINROADcopy_11);
var lyr_MAINROADcopy_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAINROADcopy_11, 
                style: style_MAINROADcopy_11,
                popuplayertitle: 'MAIN ROAD copy',
                interactive: true,
                title: '<img src="styles/legend/MAINROADcopy_11.png" /> MAIN ROAD copy'
            });
var format_BUILDING2_12 = new ol.format.GeoJSON();
var features_BUILDING2_12 = format_BUILDING2_12.readFeatures(json_BUILDING2_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUILDING2_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUILDING2_12.addFeatures(features_BUILDING2_12);
var lyr_BUILDING2_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUILDING2_12, 
                style: style_BUILDING2_12,
                popuplayertitle: 'BUILDING 2',
                interactive: true,
                title: '<img src="styles/legend/BUILDING2_12.png" /> BUILDING 2'
            });
var format_LOCALATT_13 = new ol.format.GeoJSON();
var features_LOCALATT_13 = format_LOCALATT_13.readFeatures(json_LOCALATT_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOCALATT_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOCALATT_13.addFeatures(features_LOCALATT_13);
var lyr_LOCALATT_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOCALATT_13, 
                style: style_LOCALATT_13,
                popuplayertitle: 'LOCAL ATT',
                interactive: true,
                title: '<img src="styles/legend/LOCALATT_13.png" /> LOCAL ATT'
            });
var format_BEACH2_14 = new ol.format.GeoJSON();
var features_BEACH2_14 = format_BEACH2_14.readFeatures(json_BEACH2_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BEACH2_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BEACH2_14.addFeatures(features_BEACH2_14);
var lyr_BEACH2_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BEACH2_14, 
                style: style_BEACH2_14,
                popuplayertitle: 'BEACH 2',
                interactive: true,
                title: '<img src="styles/legend/BEACH2_14.png" /> BEACH 2'
            });
var format_FISHING_15 = new ol.format.GeoJSON();
var features_FISHING_15 = format_FISHING_15.readFeatures(json_FISHING_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FISHING_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FISHING_15.addFeatures(features_FISHING_15);
var lyr_FISHING_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FISHING_15, 
                style: style_FISHING_15,
                popuplayertitle: 'FISHING',
                interactive: true,
                title: '<img src="styles/legend/FISHING_15.png" /> FISHING'
            });
var format_COFFEESHOP_16 = new ol.format.GeoJSON();
var features_COFFEESHOP_16 = format_COFFEESHOP_16.readFeatures(json_COFFEESHOP_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COFFEESHOP_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COFFEESHOP_16.addFeatures(features_COFFEESHOP_16);
var lyr_COFFEESHOP_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COFFEESHOP_16, 
                style: style_COFFEESHOP_16,
                popuplayertitle: 'COFFEE SHOP',
                interactive: true,
                title: '<img src="styles/legend/COFFEESHOP_16.png" /> COFFEE SHOP'
            });
var format_FOODSPOT_17 = new ol.format.GeoJSON();
var features_FOODSPOT_17 = format_FOODSPOT_17.readFeatures(json_FOODSPOT_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FOODSPOT_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOODSPOT_17.addFeatures(features_FOODSPOT_17);
var lyr_FOODSPOT_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FOODSPOT_17, 
                style: style_FOODSPOT_17,
                popuplayertitle: 'FOOD SPOT',
                interactive: true,
                title: '<img src="styles/legend/FOODSPOT_17.png" /> FOOD SPOT'
            });

lyr_MUKIM_0.setVisible(true);lyr_OCEANcopy_1.setVisible(true);lyr_WATERWAY_2.setVisible(true);lyr_PARKcopy_3.setVisible(true);lyr_FOREST_4.setVisible(true);lyr_PARK2_5.setVisible(true);lyr_wetland_6.setVisible(true);lyr_SWAMP_7.setVisible(true);lyr_SAND_8.setVisible(true);lyr_BKTPELINDUNG_9.setVisible(true);lyr_SECROAD_10.setVisible(true);lyr_MAINROADcopy_11.setVisible(true);lyr_BUILDING2_12.setVisible(true);lyr_LOCALATT_13.setVisible(true);lyr_BEACH2_14.setVisible(true);lyr_FISHING_15.setVisible(true);lyr_COFFEESHOP_16.setVisible(true);lyr_FOODSPOT_17.setVisible(true);
var layersList = [lyr_MUKIM_0,lyr_OCEANcopy_1,lyr_WATERWAY_2,lyr_PARKcopy_3,lyr_FOREST_4,lyr_PARK2_5,lyr_wetland_6,lyr_SWAMP_7,lyr_SAND_8,lyr_BKTPELINDUNG_9,lyr_SECROAD_10,lyr_MAINROADcopy_11,lyr_BUILDING2_12,lyr_LOCALATT_13,lyr_BEACH2_14,lyr_FISHING_15,lyr_COFFEESHOP_16,lyr_FOODSPOT_17];
lyr_MUKIM_0.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_OCEANcopy_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'natural': 'natural', 'leisure': 'leisure', 'golf': 'golf', 'place': 'place', 'name:en': 'name:en', 'name': 'name', 'reservoir_type': 'reservoir_type', 'water': 'water', 'type': 'type', 'waterway': 'waterway', });
lyr_WATERWAY_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'waterway': 'waterway', 'name': 'name', });
lyr_PARKcopy_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'leisure': 'leisure', 'landuse': 'landuse', 'natural': 'natural', 'name': 'name', });
lyr_FOREST_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'name': 'name', });
lyr_PARK2_5.set('fieldAliases', {'id': 'id', });
lyr_wetland_6.set('fieldAliases', {'id': 'id', });
lyr_SWAMP_7.set('fieldAliases', {'id': 'id', });
lyr_SAND_8.set('fieldAliases', {'id': 'id', });
lyr_BKTPELINDUNG_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_SECROAD_10.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'crossing:markings': 'crossing:markings', 'start_date': 'start_date', 'width': 'width', 'informal': 'informal', 'crossing': 'crossing', 'footway': 'footway', 'ford': 'ford', 'parking:lane:right:parallel': 'parking:lane:right:parallel', 'parking:lane:left:diagonal': 'parking:lane:left:diagonal', 'construction': 'construction', 'name:en': 'name:en', 'golf_cart': 'golf_cart', 'golf': 'golf', 'addr:postcode': 'addr:postcode', 'emergency': 'emergency', 'motorroad': 'motorroad', 'motorcycle': 'motorcycle', 'goods': 'goods', 'bus': 'bus', 'parking:lane:left:parallel': 'parking:lane:left:parallel', 'abandoned': 'abandoned', 'overtaking': 'overtaking', 'level': 'level', 'incline': 'incline', 'handrail:right': 'handrail:right', 'handrail:left': 'handrail:left', 'handrail': 'handrail', 'covered': 'covered', 'destination:ref:lanes': 'destination:ref:lanes', 'destination:lanes': 'destination:lanes', 'embankment': 'embankment', 'tracktype': 'tracktype', 'moped': 'moped', 'hgv': 'hgv', 'sidewalk': 'sidewalk', 'tunnel': 'tunnel', 'official_name': 'official_name', 'motorcar': 'motorcar', 'man_made': 'man_made', 'loc_name:ms': 'loc_name:ms', 'parking:lane:both:diagonal': 'parking:lane:both:diagonal', 'smoothness': 'smoothness', 'lane_markings': 'lane_markings', 'destination:symbol': 'destination:symbol', 'loc_name:zh-Hant': 'loc_name:zh-Hant', 'loc_name:zh-Hans': 'loc_name:zh-Hans', 'loc_name:zh': 'loc_name:zh', 'loc_name': 'loc_name', 'old_name': 'old_name', 'foot': 'foot', 'bicycle': 'bicycle', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'destination:ref': 'destination:ref', 'turn:lanes': 'turn:lanes', 'motor_vehicle': 'motor_vehicle', 'access': 'access', 'noname': 'noname', 'short_name': 'short_name', 'service': 'service', 'source:name': 'source:name', 'junction': 'junction', 'maxheight': 'maxheight', 'alt_name': 'alt_name', 'name:zh-Hant': 'name:zh-Hant', 'name:zh-Hans': 'name:zh-Hans', 'name:zh': 'name:zh', 'name:ms': 'name:ms', 'maxspeed': 'maxspeed', 'bridge:structure': 'bridge:structure', 'bridge:name': 'bridge:name', 'layer': 'layer', 'bridge': 'bridge', 'ref': 'ref', 'oneway': 'oneway', 'mapillary': 'mapillary', 'lit': 'lit', 'lanes': 'lanes', 'destination': 'destination', 'surface': 'surface', 'name': 'name', 'horse': 'horse', 'description': 'description', });
lyr_MAINROADcopy_11.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'ref': 'ref', 'tunnel': 'tunnel', 'bridge': 'bridge', 'level': 'level', 'sac_scale': 'sac_scale', });
lyr_BUILDING2_12.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'amenity': 'amenity', 'brand': 'brand', 'wheelchair': 'wheelchair', });
lyr_LOCALATT_13.set('fieldAliases', {'LOCAL ATTRACTIONS': 'LOCAL ATTRACTIONS', 'STAR RATING': 'STAR RATING', 'FEE': 'FEE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'field_6': 'field_6', 'Raw Rating': 'Raw Rating', 'Total Reviews': 'Total Reviews', 'Average Rating': 'Average Rating', 'field_10': 'field_10', });
lyr_BEACH2_14.set('fieldAliases', {'BEACHES': 'BEACHES', 'field_2': 'field_2', 'field_3': 'field_3', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', });
lyr_FISHING_15.set('fieldAliases', {'BEACHES': 'BEACHES', 'field_2': 'field_2', 'field_3': 'field_3', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', });
lyr_COFFEESHOP_16.set('fieldAliases', {'Café': 'Café', 'STAR RATING': 'STAR RATING', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'field_5': 'field_5', 'STAR': 'STAR', 'REVIEWS': 'REVIEWS', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', });
lyr_FOODSPOT_17.set('fieldAliases', {'FOOD SPOTS': 'FOOD SPOTS', 'STAR': 'STAR', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', 'field_11': 'field_11', });
lyr_MUKIM_0.set('fieldImages', {'shapeName': '', 'shapeISO': '', 'shapeID': '', 'shapeGroup': '', 'shapeType': '', });
lyr_OCEANcopy_1.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'natural': '', 'leisure': '', 'golf': '', 'place': '', 'name:en': '', 'name': '', 'reservoir_type': '', 'water': '', 'type': '', 'waterway': '', });
lyr_WATERWAY_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'waterway': '', 'name': '', });
lyr_PARKcopy_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'boundary': '', 'leisure': '', 'landuse': '', 'natural': '', 'name': '', });
lyr_FOREST_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'landuse': '', 'name': '', });
lyr_PARK2_5.set('fieldImages', {'id': '', });
lyr_wetland_6.set('fieldImages', {'id': '', });
lyr_SWAMP_7.set('fieldImages', {'id': '', });
lyr_SAND_8.set('fieldImages', {'id': '', });
lyr_BKTPELINDUNG_9.set('fieldImages', {'fid': '', 'id': '', });
lyr_SECROAD_10.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'crossing:markings': '', 'start_date': '', 'width': '', 'informal': '', 'crossing': '', 'footway': '', 'ford': '', 'parking:lane:right:parallel': '', 'parking:lane:left:diagonal': '', 'construction': '', 'name:en': '', 'golf_cart': '', 'golf': '', 'addr:postcode': '', 'emergency': '', 'motorroad': '', 'motorcycle': '', 'goods': '', 'bus': '', 'parking:lane:left:parallel': '', 'abandoned': '', 'overtaking': '', 'level': '', 'incline': '', 'handrail:right': '', 'handrail:left': '', 'handrail': '', 'covered': '', 'destination:ref:lanes': '', 'destination:lanes': '', 'embankment': '', 'tracktype': '', 'moped': '', 'hgv': '', 'sidewalk': '', 'tunnel': '', 'official_name': '', 'motorcar': '', 'man_made': '', 'loc_name:ms': '', 'parking:lane:both:diagonal': '', 'smoothness': '', 'lane_markings': '', 'destination:symbol': '', 'loc_name:zh-Hant': '', 'loc_name:zh-Hans': '', 'loc_name:zh': '', 'loc_name': '', 'old_name': '', 'foot': '', 'bicycle': '', 'lanes:forward': '', 'lanes:backward': '', 'destination:ref': '', 'turn:lanes': '', 'motor_vehicle': '', 'access': '', 'noname': '', 'short_name': '', 'service': '', 'source:name': '', 'junction': '', 'maxheight': '', 'alt_name': '', 'name:zh-Hant': '', 'name:zh-Hans': '', 'name:zh': '', 'name:ms': '', 'maxspeed': '', 'bridge:structure': '', 'bridge:name': '', 'layer': '', 'bridge': '', 'ref': '', 'oneway': '', 'mapillary': '', 'lit': '', 'lanes': '', 'destination': '', 'surface': '', 'name': '', 'horse': '', 'description': '', });
lyr_MAINROADcopy_11.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'railway': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'ref': 'TextEdit', 'tunnel': 'TextEdit', 'bridge': 'TextEdit', 'level': 'TextEdit', 'sac_scale': 'TextEdit', });
lyr_BUILDING2_12.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'brand': 'TextEdit', 'wheelchair': 'TextEdit', });
lyr_LOCALATT_13.set('fieldImages', {'LOCAL ATTRACTIONS': '', 'STAR RATING': '', 'FEE': '', 'LATITUDE': '', 'LONGITUDE': '', 'field_6': '', 'Raw Rating': '', 'Total Reviews': '', 'Average Rating': '', 'field_10': '', });
lyr_BEACH2_14.set('fieldImages', {'BEACHES': '', 'field_2': '', 'field_3': '', 'LATITUDE': '', 'LONGITUDE': '', 'field_6': '', 'field_7': '', 'field_8': '', 'field_9': '', 'field_10': '', 'field_11': '', 'field_12': '', });
lyr_FISHING_15.set('fieldImages', {'BEACHES': '', 'field_2': '', 'field_3': '', 'LATITUDE': '', 'LONGITUDE': '', 'field_6': '', 'field_7': '', 'field_8': '', 'field_9': '', 'field_10': '', 'field_11': '', 'field_12': '', });
lyr_COFFEESHOP_16.set('fieldImages', {'Café': '', 'STAR RATING': '', 'LATITUDE': '', 'LONGITUDE': '', 'field_5': '', 'STAR': '', 'REVIEWS': '', 'field_8': '', 'field_9': '', 'field_10': '', });
lyr_FOODSPOT_17.set('fieldImages', {'FOOD SPOTS': '', 'STAR': '', 'LATITUDE': '', 'LONGITUDE': '', 'field_5': '', 'field_6': '', 'field_7': '', 'field_8': '', 'field_9': '', 'field_10': '', 'field_11': '', });
lyr_MUKIM_0.set('fieldLabels', {'shapeName': 'no label', 'shapeISO': 'no label', 'shapeID': 'no label', 'shapeGroup': 'no label', 'shapeType': 'no label', });
lyr_OCEANcopy_1.set('fieldLabels', {'fid': 'inline label - always visible', 'full_id': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_type': 'inline label - always visible', 'natural': 'inline label - always visible', 'leisure': 'inline label - always visible', 'golf': 'inline label - always visible', 'place': 'inline label - always visible', 'name:en': 'inline label - always visible', 'name': 'inline label - always visible', 'reservoir_type': 'inline label - always visible', 'water': 'inline label - always visible', 'type': 'inline label - always visible', 'waterway': 'inline label - always visible', });
lyr_WATERWAY_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'waterway': 'no label', 'name': 'no label', });
lyr_PARKcopy_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'boundary': 'no label', 'leisure': 'no label', 'landuse': 'no label', 'natural': 'no label', 'name': 'no label', });
lyr_FOREST_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'name': 'no label', });
lyr_PARK2_5.set('fieldLabels', {'id': 'no label', });
lyr_wetland_6.set('fieldLabels', {'id': 'no label', });
lyr_SWAMP_7.set('fieldLabels', {'id': 'no label', });
lyr_SAND_8.set('fieldLabels', {'id': 'no label', });
lyr_BKTPELINDUNG_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_SECROAD_10.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'crossing:markings': 'no label', 'start_date': 'no label', 'width': 'no label', 'informal': 'no label', 'crossing': 'no label', 'footway': 'no label', 'ford': 'no label', 'parking:lane:right:parallel': 'no label', 'parking:lane:left:diagonal': 'no label', 'construction': 'no label', 'name:en': 'no label', 'golf_cart': 'no label', 'golf': 'no label', 'addr:postcode': 'no label', 'emergency': 'no label', 'motorroad': 'no label', 'motorcycle': 'no label', 'goods': 'no label', 'bus': 'no label', 'parking:lane:left:parallel': 'no label', 'abandoned': 'no label', 'overtaking': 'no label', 'level': 'no label', 'incline': 'no label', 'handrail:right': 'no label', 'handrail:left': 'no label', 'handrail': 'no label', 'covered': 'no label', 'destination:ref:lanes': 'no label', 'destination:lanes': 'no label', 'embankment': 'no label', 'tracktype': 'no label', 'moped': 'no label', 'hgv': 'no label', 'sidewalk': 'no label', 'tunnel': 'no label', 'official_name': 'no label', 'motorcar': 'no label', 'man_made': 'no label', 'loc_name:ms': 'no label', 'parking:lane:both:diagonal': 'no label', 'smoothness': 'no label', 'lane_markings': 'no label', 'destination:symbol': 'no label', 'loc_name:zh-Hant': 'no label', 'loc_name:zh-Hans': 'no label', 'loc_name:zh': 'no label', 'loc_name': 'no label', 'old_name': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'destination:ref': 'no label', 'turn:lanes': 'no label', 'motor_vehicle': 'no label', 'access': 'no label', 'noname': 'no label', 'short_name': 'no label', 'service': 'no label', 'source:name': 'no label', 'junction': 'no label', 'maxheight': 'no label', 'alt_name': 'no label', 'name:zh-Hant': 'no label', 'name:zh-Hans': 'no label', 'name:zh': 'no label', 'name:ms': 'no label', 'maxspeed': 'no label', 'bridge:structure': 'no label', 'bridge:name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'ref': 'no label', 'oneway': 'no label', 'mapillary': 'no label', 'lit': 'no label', 'lanes': 'no label', 'destination': 'no label', 'surface': 'no label', 'name': 'no label', 'horse': 'no label', 'description': 'no label', });
lyr_MAINROADcopy_11.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'highway': 'no label', 'name': 'no label', 'surface': 'no label', 'ref': 'no label', 'tunnel': 'no label', 'bridge': 'no label', 'level': 'no label', 'sac_scale': 'no label', });
lyr_BUILDING2_12.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'amenity': 'no label', 'brand': 'no label', 'wheelchair': 'no label', });
lyr_LOCALATT_13.set('fieldLabels', {'LOCAL ATTRACTIONS': 'no label', 'STAR RATING': 'no label', 'FEE': 'no label', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'no label', 'field_6': 'no label', 'Raw Rating': 'no label', 'Total Reviews': 'no label', 'Average Rating': 'no label', 'field_10': 'no label', });
lyr_BEACH2_14.set('fieldLabels', {'BEACHES': 'no label', 'field_2': 'no label', 'field_3': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'field_6': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', 'field_10': 'no label', 'field_11': 'no label', 'field_12': 'no label', });
lyr_FISHING_15.set('fieldLabels', {'BEACHES': 'no label', 'field_2': 'no label', 'field_3': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'field_6': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', 'field_10': 'no label', 'field_11': 'no label', 'field_12': 'no label', });
lyr_COFFEESHOP_16.set('fieldLabels', {'Café': 'inline label - always visible', 'STAR RATING': 'no label', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'no label', 'field_5': 'no label', 'STAR': 'no label', 'REVIEWS': 'no label', 'field_8': 'no label', 'field_9': 'no label', 'field_10': 'no label', });
lyr_FOODSPOT_17.set('fieldLabels', {'FOOD SPOTS': 'no label', 'STAR': 'no label', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'no label', 'field_5': 'no label', 'field_6': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', 'field_10': 'no label', 'field_11': 'no label', });
lyr_FOODSPOT_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
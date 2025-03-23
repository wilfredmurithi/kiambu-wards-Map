var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CountyBoundary_1 = new ol.format.GeoJSON();
var features_CountyBoundary_1 = format_CountyBoundary_1.readFeatures(json_CountyBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountyBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyBoundary_1.addFeatures(features_CountyBoundary_1);
var lyr_CountyBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountyBoundary_1, 
                style: style_CountyBoundary_1,
                popuplayertitle: 'County Boundary',
                interactive: true,
                title: '<img src="styles/legend/CountyBoundary_1.png" /> County Boundary'
            });
var format_Wards_2 = new ol.format.GeoJSON();
var features_Wards_2 = format_Wards_2.readFeatures(json_Wards_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wards_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wards_2.addFeatures(features_Wards_2);
var lyr_Wards_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wards_2, 
                style: style_Wards_2,
                popuplayertitle: 'Wards',
                interactive: true,
                title: '<img src="styles/legend/Wards_2.png" /> Wards'
            });
var format_Rivers_3 = new ol.format.GeoJSON();
var features_Rivers_3 = format_Rivers_3.readFeatures(json_Rivers_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rivers_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rivers_3.addFeatures(features_Rivers_3);
var lyr_Rivers_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rivers_3, 
                style: style_Rivers_3,
                popuplayertitle: 'Rivers',
                interactive: true,
                title: '<img src="styles/legend/Rivers_3.png" /> Rivers'
            });
var format_RoadClass_4 = new ol.format.GeoJSON();
var features_RoadClass_4 = format_RoadClass_4.readFeatures(json_RoadClass_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadClass_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadClass_4.addFeatures(features_RoadClass_4);
var lyr_RoadClass_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadClass_4, 
                style: style_RoadClass_4,
                popuplayertitle: 'Road Class',
                interactive: true,
    title: 'Road Class<br />\
    <img src="styles/legend/RoadClass_4_0.png" /> A<br />\
    <img src="styles/legend/RoadClass_4_1.png" /> B<br />\
    <img src="styles/legend/RoadClass_4_2.png" /> C<br />\
    <img src="styles/legend/RoadClass_4_3.png" /> D<br />' });
var format_CountyHeadquarter_5 = new ol.format.GeoJSON();
var features_CountyHeadquarter_5 = format_CountyHeadquarter_5.readFeatures(json_CountyHeadquarter_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountyHeadquarter_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyHeadquarter_5.addFeatures(features_CountyHeadquarter_5);
var lyr_CountyHeadquarter_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountyHeadquarter_5, 
                style: style_CountyHeadquarter_5,
                popuplayertitle: 'County Headquarter',
                interactive: true,
                title: '<img src="styles/legend/CountyHeadquarter_5.png" /> County Headquarter'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_CountyBoundary_1.setVisible(true);lyr_Wards_2.setVisible(true);lyr_Rivers_3.setVisible(true);lyr_RoadClass_4.setVisible(true);lyr_CountyHeadquarter_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CountyBoundary_1,lyr_Wards_2,lyr_Rivers_3,lyr_RoadClass_4,lyr_CountyHeadquarter_5];
lyr_CountyBoundary_1.set('fieldAliases', {'MIN_IEBCCt': 'MIN_IEBCCt', 'FIRST_COUN': 'FIRST_COUN', 'FIRST_FIRS': 'FIRST_FIRS', 'SUM_SUM_Ma': 'SUM_SUM_Ma', 'SUM_SUM_Fe': 'SUM_SUM_Fe', 'SUM_SUM_To': 'SUM_SUM_To', 'SUM_SUM_Ho': 'SUM_SUM_Ho', 'SUM_SUM_AR': 'SUM_SUM_AR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Wards_2.set('fieldAliases', {'gid': 'gid', 'pop2009': 'pop2009', 'county': 'county', 'subcounty': 'subcounty', 'ward': 'ward', 'uid': 'uid', 'scuid': 'scuid', 'cuid': 'cuid', 'name': 'name', });
lyr_Rivers_3.set('fieldAliases', {'DGC_CODICE': 'DGC_CODICE', 'TYPE': 'TYPE', 'NAME': 'NAME', 'CODE': 'CODE', 'Named': 'Named', 'length': 'length', 'Category': 'Category', 'PartOfName': 'PartOfName', });
lyr_RoadClass_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SURFTYPE': 'SURFTYPE', 'NUMLANES': 'NUMLANES', 'SURFCOND': 'SURFCOND', 'TERRAIN': 'TERRAIN', 'DISTRICT': 'DISTRICT', 'ROADCLASS': 'ROADCLASS', 'FROMDESCR': 'FROMDESCR', 'TODESCR': 'TODESCR', 'ROUGHNESS': 'ROUGHNESS', 'VEHICLETAG': 'VEHICLETAG', 'INVENTDATE': 'INVENTDATE', 'UPDATEDATE': 'UPDATEDATE', 'MAX_PDOP': 'MAX_PDOP', 'CORR_TYPE': 'CORR_TYPE', 'RCVR_TYPE': 'RCVR_TYPE', 'GPS_DATE': 'GPS_DATE', 'GPS_TIME': 'GPS_TIME', 'FEAT_NAME': 'FEAT_NAME', 'DATAFILE': 'DATAFILE', 'UNFILT_POS': 'UNFILT_POS', 'FILT_POS': 'FILT_POS', 'UPDATE_STA': 'UPDATE_STA', 'GPS_LENGTH': 'GPS_LENGTH', 'GPS_3DLENG': 'GPS_3DLENG', 'AVG_HORZ_P': 'AVG_HORZ_P', 'AVG_VERT_P': 'AVG_VERT_P', 'WORST_HORZ': 'WORST_HORZ', 'WORST_VERT': 'WORST_VERT', 'LINE_ID': 'LINE_ID', 'DATA_DICTI': 'DATA_DICTI', 'GPS_WEEK': 'GPS_WEEK', 'GPS_SECOND': 'GPS_SECOND', 'ROADNUM': 'ROADNUM', 'SECTNUM': 'SECTNUM', 'SEGNUM': 'SEGNUM', 'CARS': 'CARS', 'LGOODS': 'LGOODS', 'MATATU': 'MATATU', 'MGOODS': 'MGOODS', 'MTANKER': 'MTANKER', 'HGOODS': 'HGOODS', 'HTANKER': 'HTANKER', 'BUSES': 'BUSES', 'TOTAL': 'TOTAL', 'SHAPE_LEN': 'SHAPE_LEN', 'CONCAT': 'CONCAT', 'PROVINCE': 'PROVINCE', 'LENGTH_KM': 'LENGTH_KM', 'DUMY': 'DUMY', 'SOURCETHM': 'SOURCETHM', 'LENGTH': 'LENGTH', });
lyr_CountyHeadquarter_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'FID_1': 'FID_1', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'DISTRICT': 'DISTRICT', 'STATUS': 'STATUS', 'POPULATION': 'POPULATION', 'TYPE': 'TYPE', 'PROVINCE': 'PROVINCE', 'LAT': 'LAT', 'LONG': 'LONG', 'styles': 'styles', 'CountyTown': 'CountyTown', });
lyr_CountyBoundary_1.set('fieldImages', {'MIN_IEBCCt': 'Range', 'FIRST_COUN': 'TextEdit', 'FIRST_FIRS': 'TextEdit', 'SUM_SUM_Ma': 'TextEdit', 'SUM_SUM_Fe': 'TextEdit', 'SUM_SUM_To': 'TextEdit', 'SUM_SUM_Ho': 'TextEdit', 'SUM_SUM_AR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Wards_2.set('fieldImages', {'gid': 'TextEdit', 'pop2009': 'TextEdit', 'county': 'TextEdit', 'subcounty': 'TextEdit', 'ward': 'TextEdit', 'uid': 'TextEdit', 'scuid': 'TextEdit', 'cuid': 'TextEdit', 'name': 'TextEdit', });
lyr_Rivers_3.set('fieldImages', {'DGC_CODICE': 'TextEdit', 'TYPE': 'TextEdit', 'NAME': 'TextEdit', 'CODE': 'TextEdit', 'Named': 'Range', 'length': 'TextEdit', 'Category': 'Range', 'PartOfName': 'TextEdit', });
lyr_RoadClass_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'SURFTYPE': 'TextEdit', 'NUMLANES': 'Range', 'SURFCOND': 'TextEdit', 'TERRAIN': 'TextEdit', 'DISTRICT': 'TextEdit', 'ROADCLASS': 'TextEdit', 'FROMDESCR': 'TextEdit', 'TODESCR': 'TextEdit', 'ROUGHNESS': 'TextEdit', 'VEHICLETAG': 'TextEdit', 'INVENTDATE': 'DateTime', 'UPDATEDATE': 'DateTime', 'MAX_PDOP': 'TextEdit', 'CORR_TYPE': 'TextEdit', 'RCVR_TYPE': 'TextEdit', 'GPS_DATE': 'DateTime', 'GPS_TIME': 'TextEdit', 'FEAT_NAME': 'TextEdit', 'DATAFILE': 'TextEdit', 'UNFILT_POS': 'TextEdit', 'FILT_POS': 'TextEdit', 'UPDATE_STA': 'TextEdit', 'GPS_LENGTH': 'TextEdit', 'GPS_3DLENG': 'TextEdit', 'AVG_HORZ_P': 'TextEdit', 'AVG_VERT_P': 'TextEdit', 'WORST_HORZ': 'TextEdit', 'WORST_VERT': 'TextEdit', 'LINE_ID': 'TextEdit', 'DATA_DICTI': 'TextEdit', 'GPS_WEEK': 'TextEdit', 'GPS_SECOND': 'TextEdit', 'ROADNUM': 'TextEdit', 'SECTNUM': 'Range', 'SEGNUM': 'Range', 'CARS': 'Range', 'LGOODS': 'Range', 'MATATU': 'Range', 'MGOODS': 'Range', 'MTANKER': 'Range', 'HGOODS': 'Range', 'HTANKER': 'Range', 'BUSES': 'Range', 'TOTAL': 'Range', 'SHAPE_LEN': 'TextEdit', 'CONCAT': 'TextEdit', 'PROVINCE': 'TextEdit', 'LENGTH_KM': 'TextEdit', 'DUMY': 'TextEdit', 'SOURCETHM': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_CountyHeadquarter_5.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'FID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATUS': 'TextEdit', 'POPULATION': 'TextEdit', 'TYPE': 'TextEdit', 'PROVINCE': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'styles': 'Range', 'CountyTown': 'TextEdit', });
lyr_CountyBoundary_1.set('fieldLabels', {'MIN_IEBCCt': 'no label', 'FIRST_COUN': 'no label', 'FIRST_FIRS': 'no label', 'SUM_SUM_Ma': 'no label', 'SUM_SUM_Fe': 'no label', 'SUM_SUM_To': 'no label', 'SUM_SUM_Ho': 'no label', 'SUM_SUM_AR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Wards_2.set('fieldLabels', {'gid': 'no label', 'pop2009': 'no label', 'county': 'no label', 'subcounty': 'no label', 'ward': 'no label', 'uid': 'no label', 'scuid': 'no label', 'cuid': 'no label', 'name': 'no label', });
lyr_Rivers_3.set('fieldLabels', {'DGC_CODICE': 'no label', 'TYPE': 'no label', 'NAME': 'no label', 'CODE': 'no label', 'Named': 'no label', 'length': 'no label', 'Category': 'no label', 'PartOfName': 'no label', });
lyr_RoadClass_4.set('fieldLabels', {'OBJECTID': 'no label', 'SURFTYPE': 'no label', 'NUMLANES': 'no label', 'SURFCOND': 'no label', 'TERRAIN': 'no label', 'DISTRICT': 'no label', 'ROADCLASS': 'no label', 'FROMDESCR': 'no label', 'TODESCR': 'no label', 'ROUGHNESS': 'no label', 'VEHICLETAG': 'no label', 'INVENTDATE': 'no label', 'UPDATEDATE': 'no label', 'MAX_PDOP': 'no label', 'CORR_TYPE': 'no label', 'RCVR_TYPE': 'no label', 'GPS_DATE': 'no label', 'GPS_TIME': 'no label', 'FEAT_NAME': 'no label', 'DATAFILE': 'no label', 'UNFILT_POS': 'no label', 'FILT_POS': 'no label', 'UPDATE_STA': 'no label', 'GPS_LENGTH': 'no label', 'GPS_3DLENG': 'no label', 'AVG_HORZ_P': 'no label', 'AVG_VERT_P': 'no label', 'WORST_HORZ': 'no label', 'WORST_VERT': 'no label', 'LINE_ID': 'no label', 'DATA_DICTI': 'no label', 'GPS_WEEK': 'no label', 'GPS_SECOND': 'no label', 'ROADNUM': 'no label', 'SECTNUM': 'no label', 'SEGNUM': 'no label', 'CARS': 'no label', 'LGOODS': 'no label', 'MATATU': 'no label', 'MGOODS': 'no label', 'MTANKER': 'no label', 'HGOODS': 'no label', 'HTANKER': 'no label', 'BUSES': 'no label', 'TOTAL': 'no label', 'SHAPE_LEN': 'no label', 'CONCAT': 'no label', 'PROVINCE': 'no label', 'LENGTH_KM': 'no label', 'DUMY': 'no label', 'SOURCETHM': 'no label', 'LENGTH': 'no label', });
lyr_CountyHeadquarter_5.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'FID_1': 'no label', 'OBJECTID': 'no label', 'NAME': 'no label', 'DISTRICT': 'no label', 'STATUS': 'no label', 'POPULATION': 'no label', 'TYPE': 'no label', 'PROVINCE': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'styles': 'no label', 'CountyTown': 'no label', });
lyr_CountyHeadquarter_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
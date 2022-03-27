ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([72.650857, 18.879342, 73.568711, 19.319847]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MumbaiHospitalpoint_1 = new ol.format.GeoJSON();
var features_MumbaiHospitalpoint_1 = format_MumbaiHospitalpoint_1.readFeatures(json_MumbaiHospitalpoint_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MumbaiHospitalpoint_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MumbaiHospitalpoint_1.addFeatures(features_MumbaiHospitalpoint_1);
var lyr_MumbaiHospitalpoint_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MumbaiHospitalpoint_1, 
                style: style_MumbaiHospitalpoint_1,
                interactive: true,
    title: 'MumbaiHospital-point<br />\
    <img src="styles/legend/MumbaiHospitalpoint_1_0.png" /> <100 Bedded Hospital<br />\
    <img src="styles/legend/MumbaiHospitalpoint_1_1.png" /> 100-500 Bedded Hospital<br />\
    <img src="styles/legend/MumbaiHospitalpoint_1_2.png" /> Civil Hospital/General Hospital<br />\
    <img src="styles/legend/MumbaiHospitalpoint_1_3.png" /> Dispensaries<br />\
    <img src="styles/legend/MumbaiHospitalpoint_1_4.png" /> District Hospital<br />\
    <img src="styles/legend/MumbaiHospitalpoint_1_5.png" /> Maternity Home<br />\
    <img src="styles/legend/MumbaiHospitalpoint_1_6.png" /> Medical Colleges Hospital<br />\
    <img src="styles/legend/MumbaiHospitalpoint_1_7.png" /> Primary Health Centre<br />\
    <img src="styles/legend/MumbaiHospitalpoint_1_8.png" /> Sub-District Hospital<br />\
    <img src="styles/legend/MumbaiHospitalpoint_1_9.png" /> Urban Health Centre<br />\
    <img src="styles/legend/MumbaiHospitalpoint_1_10.png" /> Urban Health Posts<br />\
    <img src="styles/legend/MumbaiHospitalpoint_1_11.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_MumbaiHospitalpoint_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MumbaiHospitalpoint_1];
lyr_MumbaiHospitalpoint_1.set('fieldAliases', {'SrNo': 'SrNo', 'Health Fac': 'Health Fac', 'Address': 'Address', 'street': 'street', 'landmark': 'landmark', 'locality': 'locality', 'pincode': 'pincode', 'landline_n': 'landline_n', 'latitude': 'latitude', 'longitude': 'longitude', 'altitude': 'altitude', 'Facility T': 'Facility T', 'State_Name': 'State_Name', 'District_N': 'District_N', });
lyr_MumbaiHospitalpoint_1.set('fieldImages', {'SrNo': 'Hidden', 'Health Fac': 'TextEdit', 'Address': 'Hidden', 'street': 'Hidden', 'landmark': 'Hidden', 'locality': 'Hidden', 'pincode': 'Hidden', 'landline_n': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', 'altitude': 'Hidden', 'Facility T': 'TextEdit', 'State_Name': 'TextEdit', 'District_N': 'TextEdit', });
lyr_MumbaiHospitalpoint_1.set('fieldLabels', {'Health Fac': 'inline label', 'landline_n': 'inline label', 'Facility T': 'inline label', 'State_Name': 'inline label', 'District_N': 'inline label', });
lyr_MumbaiHospitalpoint_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
exports.mapa2 = function(navController){
	Ti.include('/json/json.js')	
	var winFoto2 = Titanium.UI.createWindow({
	title:'la linea',	
	backgroundColor:'#000000'
});

//////////////////////////////////////////////////////////////////////////////////////////////



var mapita = Ti.Map.createView({
			mapType : Titanium.Map.STANDARD_TYPE,
			region : {
				latitude : 19.432608,
				longitude : -99.133208,
				latitudeDelta : 0.01,
				longitudeDelta : 0.01
			},
			animate : true,
			regionFit : true,
			userLocation : true,
		});
winFoto2.add(mapita);


function datosJson() {
	
	new ActualizarDatos("http://www.generandomaldad.org/hackday/index.php/recibe_fotos/gps_emx", aVentanaS);
	function aVentanaS(actualizacion) {
		var datos = [];
		for(var i = 1; i < actualizacion.sedes.length; i++) {
			sede = actualizacion.sedes[i];
			dat = Titanium.Map.createAnnotation({
				latitude : parseFloat(sede.latitud),
				longitude : parseFloat(sede.longitud),
				title : sede.alias,
				subtitle : sede.descripcion,
				pincolor : Titanium.Map.ANNOTATION_RED,
				animate : true
			});
			Ti.API.info(sede.latitud + ' ' + sede.longitud + ' ' + sede.alias + ' ' + sede.descripcion);
			datos.push(dat);
		mapita.addAnnotation(dat);	
				
		}
	}

}

datosJson();		






//////////////////////////////////////////////////////////////////////////////////////////////

	return winFoto2;



	
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////

}
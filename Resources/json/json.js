ActualizarDatos = function(url, callback) {

	var xhr = Ti.Network.createHTTPClient();

	xhr.open("GET", url);

	xhr.onload = function() {

		try {
			actualizacion = new Object();

			actualizacion.sedes = new Array();
			json = JSON.parse(this.responseText);

			for( i = 1; i < json.length; i++) {

				var sede = new Object();
				sedeJSON = json[i];

				sede.foto_url = sedeJSON.foto_url;
				sede.alias = sedeJSON.alias;
				sede.descripcion = sedeJSON.descripcion;
				sede.fecha = sedeJSON.fecha;
				sede.latitud = sedeJSON.latitud;
				sede.longitud = sedeJSON.longitud;

				actualizacion.sedes[i] = sede;
			}
			Ti.API.info("Funciona");
			callback(actualizacion);

		} catch(E) {
			Ti.API.info("Aun no funciona");
			alert(E);

		}

	};

	xhr.send();

}

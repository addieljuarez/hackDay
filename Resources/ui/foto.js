exports.foto = function(navController){
	
	var winFoto = Titanium.UI.createWindow({
	title:'foto',	
	backgroundColor:'#fff'
});
	
	
	var back = Titanium.UI.createImageView({
		image:'/imagenes/hard/back.png',
		height:'80dp',
		width:'320',
		center:{x:'160dp', y:'30dp' },
	});
	
	winFoto.add(back);
	
	////////////////////////////////////////////////////////////////////////////////////////

	
	var mapa = Titanium.UI.createImageView({
		image:'/imagenes/hard/Geolocalizacion.png',
		//title:'toma tu fotografia',
		height:'100dp',
		width:'100',
		center:{x:'160dp', y:'150dp' },
	});
	
	winFoto.add(mapa);
	
	mapa.addEventListener( 'click', function(){
					 var mapa2 = require('mapa2').mapa2;
					 navController.open(new mapa2(navController));
				});
	

	//Ti.include('controller/geo.js');
// 	
	// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// 	
	var foto = Titanium.UI.createImageView({
		//title:'la linea',
		image:'/imagenes/hard/foto.png',
		height:'100dp',
		width:'100',
		center:{x:'160dp', y:'260dp' },
	});
	
	winFoto.add(foto);
	
	foto.addEventListener( 'click', function(){
					 var foto1 = require('ui/foto1').foto1;
					 navController.open(new foto1(navController));
				});
	
	
	
	/ ////////////////////////////////////////////////////////////////////////////////////////////////////////
// 	
	var redes = Titanium.UI.createImageView({
		//title:'la linea',
		image:'/imagenes/hard/t.png',
		height:'100dp',
		width:'100',
		center:{x:'160dp', y:'370dp' },
	});
	
	winFoto.add(redes);
	
	redes.addEventListener( 'click', function(){
					 var redes = require('ui/redes').redes;
					 navController.open(new redes(navController));
				});
	
	
	
	
	return winFoto;
	
}

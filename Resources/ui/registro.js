exports.registro = function(navController){
	var winRegistro = Titanium.UI.createWindow({
		title:'registro',
		backgroundColor:'#fff',
		//backgroundImage:'/imagenes/background.png',
	});
	
	
	
	var back = Titanium.UI.createImageView({
		image:'/imagenes/hard/back.png',
		height:'80dp',
		width:'320',
		center:{x:'160dp', y:'30dp' },
	});
	
	winRegistro.add(back);

	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var nombre = Titanium.UI.createTextField({
	color : '#336699',
	center:{x:'200dp', y:'150dp'},
	width : '200dp',
	height : '50dp',
	hintText : 'Nombre',
	keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	winRegistro.add(nombre);
	
 	var nombreLabel = Ti.UI.createLabel({
 		text:'nombre',
 		font:{size:'30dp'},
 		color:'#000000',
 		center:{x:'50dp', y:'150dp'},
 		
 	});
 	
 	winRegistro.add(nombreLabel);
 	
 	
 	////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	var correo = Titanium.UI.createTextField({
	color : '#336699',
	center:{x:'200dp', y:'200dp'},
	width : '200dp',
	height : '50dp',
	hintText : 'Correo/Usuario',
	keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	winRegistro.add(correo);
	
 	var correoLabel = Ti.UI.createLabel({
 		text:'correo',
 		font:{size:'30dp'},
 		color:'#000000',
 		center:{x:'50dp', y:'200dp'},
 		
 	});
 	
 	winRegistro.add(correoLabel);
 	
 	///////////////////////////////////////////////////////////////////////////////////////////////
	
	
	var confCorreo = Titanium.UI.createTextField({
	color : '#336699',
	center:{x:'200dp', y:'250dp'},
	width : '200dp',
	height : '50dp',
	hintText : 'Correo/Usuario',
	keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	winRegistro.add(confCorreo);
	
 	var confcorreoLabel = Ti.UI.createLabel({
 		text:'correo',
 		font:{size:'30dp'},
 		color:'#000000',
 		center:{x:'50dp', y:'250dp'},
 		
 	});
 	
 	winRegistro.add(confcorreoLabel);
 	
 	
 	///////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
	
	var contrasena = Titanium.UI.createTextField({
	color : '#336699',
	center:{x:'200dp', y:'300dp'},
	width : '200dp',
	height : '50dp',
	hintText : 'pass',
	passwordMask:true,  
	keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	winRegistro.add(contrasena);
	
 	var passLabel = Ti.UI.createLabel({
 		text:'contraseña',
 		font:{size:'30dp'},
 		color:'#000000',
 		center:{x:'50dp', y:'300dp'},
 		
 	});
 	
 	winRegistro.add(passLabel);
	
	
	
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	var entrar = Titanium.UI.createButton({
	title:'Entrar',
	center:{x:'160dp', y:'370dp'},
	width:'260dp',
	height:'40dp',
	
	});
	
	winRegistro.add(entrar);
	
	entrar.addEventListener('click', function(){
		var registro2 = require('/ui/registro2').registro2;
		navController.open(new registro2(navController));
	})
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	
	return winRegistro;
	
}



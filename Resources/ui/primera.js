// 
//  regiones.js
//  flisol3
//  
//  Created by addiel on 2012-01-23.
//  Copyright 2012 addiel. All rights reserved.
// 


exports.primera = function(navController) {


	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	var win = Titanium.UI.createWindow({  
	title:'inicio',
	backgroundColor:'#fff',
   // backgroundImage:'/imagenes/hard/back.png',
   

});
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var back = Titanium.UI.createImageView({
		image:'/imagenes/hard/back.png',
		height:'80dp',
		width:'320',
		center:{x:'160dp', y:'30dp' },
	});
	
	win.add(back);


var boton1 = Titanium.UI.createImageView({
		image:'/imagenes/hard/foto.png',
		height:'100dp',
		width:'100',
		center:{x:'160dp', y:'190dp' },
	});
	
	win.add(boton1);
	
	boton1.addEventListener( 'click', function(){
					 var foto = require('ui/foto').foto;
					 navController.open(new foto(navController));
				});
	

	

	// ////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	// var boton2 = Titanium.UI.createButton({
		// title:'mapa',
		// height:'80dp',
		// width:'150',
		// center:{x:'160dp', y:'50dp' },
	// });
// 	
	// win.add(boton2);
// 	
	// boton2.addEventListener( 'click', function(){
					 // var mapa = require('ui/mapa').mapa;
					 // navController.open(new mapa(navController));
// 					
				// } );
	
		//////////////////////////////////////////////////////////////	
			var login = Titanium.UI.createImageView({
				image:'/imagenes/hard/LOGIN.png',
         	   width:'250dp',
         	   height:'50dp',
         	   center:{x:'160dp', y:'300dp'},
			 //  image:'/imagenes/login.png',
        	});
	        
			win.add(login);	
			
			
			login.addEventListener( 'click', function(){
				
				 var login = require('ui/login').login;
				 navController.open(new login(navController));
			});
			
			//////////////////////////////////////////////////////////////////////////////////////////////////
			
			
			var registro = Titanium.UI.createImageView({
         	   
			   width:'250dp',
         	   height:'50dp',        	   
			  center:{x:'160dp', y:'380dp'},
			  image:'/imagenes/hard/Registro.png',
        	});
        	
	        
			win.add(registro);
			
			
			registro.addEventListener( 'click', function(){
				
				 var registro = require('ui/registro').registro;
				 navController.open(new registro(navController));
			});		
	
	
	
	return win;
};
////////////////////////////////////////////////////////////////////////////////////////////////////
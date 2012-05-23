
exports.login = function(navController){
	var win1 = Titanium.UI.createWindow({
		title:'log in',
		backgroundColor:'#fff',
		//backgroundImage:'/imagenes/background.png',
		
	});
	
	
	var back = Titanium.UI.createImageView({
		image:'/imagenes/hard/back.png',
		height:'80dp',
		width:'320',
		center:{x:'160dp', y:'30dp' },
	});
	
	win1.add(back);

	
	
	var correo = Titanium.UI.createTextField({
	color : '#336699',
	center:{x:'200dp', y:'250dp'},
	width : '200dp',
	height : '50dp',
	hintText : 'Correo/Usuario',
	keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	win1.add(correo);
	
 	var correoLabel = Ti.UI.createLabel({
 		text:'correo',
 		font:{size:'30dp'},
 		color:'#000000',
 		center:{x:'50dp', y:'250dp'},
 		
 	});
 	
 	win1.add(correoLabel);
 	
 	
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
	
	win1.add(contrasena);
	
 	var passLabel = Ti.UI.createLabel({
 		text:'contraseña',
 		font:{size:'30dp'},
 		color:'#000000',
 		center:{x:'50dp', y:'300dp'},
 		
 	});
 	
 	win1.add(passLabel);
	
	
	
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	var entrar = Titanium.UI.createButton({
	title:'Entrar',
	center:{x:'160dp', y:'370dp'},
	width:'260dp',
	height:'40dp',
	
	});
	
	win1.add(entrar);
	
	// entrar.addEventListener('click', function(){
		// var login2 = require('/ui/login2').login2;
		// navController.open(new login2(navController));
	// })
	
	
	// var loginResp = Titanium.Network.createHTTPClient();  
//   
	// entrar.addEventListener('click',function()  
	// {  
		// xhr.onload = function (e) 
		// { 
        	// Ti.API.log('I should be first'); 
		// };
// 
		// xhr.open('POST', "http://www.generandomaldad.com/hackday/index.php/usuario/consulta", true);
		// xhr.send({correo:correo , password: contrasena });
		// Ti.API.log('I should be second')
// 		
		// if (correo =='')
		// {
			// alert('inserta los datos');
		// }
// 		
// 	    
	// });  
	
	var loginReq = Titanium.Network.createHTTPClient();
loginReq.onload = function()
{
var json = this.responseText;
var response = JSON.parse(json);
if (response.logged == true)
{
alert(response.message);
}
else
{
alert(response.message);
}
};

loginReq.onerror = function()
{
alert("Network error");
};
  
entrar.addEventListener('click',function(e)  
{  
    if (correo.value != '' && contrasena.value != '')  
    {  
        loginReq.open("POST","http://www.generandomaldad.org/hackday/index.php/usuario/consulta");  
        var params = {  
            nombre: correo.value,  
            password: contrasena.value
        };  
        loginReq.send(params);  
    }  
    else  
    {  
        alert("Username/Password are required");  
    }  
});  
	
		
	
		
		
		
		
		
		
		
	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	
	return win1;
}




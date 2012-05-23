exports.foto1 = function(navController){
	
	var winFoto1 = Titanium.UI.createWindow({
	title:'foto1',	
	backgroundColor:'#CEE3F6'
});
	
	//////////////////////////////////////////////////////////////////
	
	var scrollView = Ti.UI.createScrollView({
	contentHeight : 'auto',
	contentWidth : 'auto'
});

var view = Ti.UI.createView({
	height : '480dp',
	width : '320dp'
});

winFoto1.add(view);

view.add(scrollView);

var dialog = Titanium.UI.createOptionDialog({
	title : 'Seleccione fotografia..',
	options : ['Camara', 'Galeria', 'Cancelar'],
	cancel : 2
});

var btnGetPhoto = Titanium.UI.createButton({
	title : 'Elegir',
	center:{x:'160dp', y:'25dp'},
	height:'45dp',
	width:'260dp',
});

btnGetPhoto.addEventListener('click', function(e) {
	dialog.show();
});

winFoto1.add(btnGetPhoto);

var imgView = Ti.UI.createImageView({
	height : '200dp',
	width : '200dp',
	borderColor : '#000',
	center:{x:'160dp', y:'180dp'},
	//backgroundColor:'fff'
});

scrollView.add(imgView);

var ta2 = Titanium.UI.createTextArea({
	value : 'Comentarios..',
	height : '90dp',
	width : '230dp',
	center:{x:'160dp', y:'330dp'},
	font : {
		fontSize : '20dp',
		fontFamily : 'Marker Felt',
		fontWeight : 'bold'
	},
	color : '#888',
	textAlign : 'left',
	borderWidth : 2,
	borderColor : '#555',
	borderRadius : 5
});

scrollView.add(ta2);
ciudadB = Ti.UI.createButton({
	title : 'Ciudad',
	height : '40dp',
	width : '130dp',
	center:{x:'90dp', y:'400dp'},
	
});

scrollView.add(ciudadB);
delegacionB = Ti.UI.createButton({
	title : 'Delegacion',
	height : '40dp',
	width : '130dp',
	center:{x:'230dp', y:'400dp'},
});
scrollView.add(delegacionB);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var sende = Ti.UI.createAlertDialog({
	title:'enviar',
	options:['Facebook', 'Servidor', 'cancelar'],
	cancel: 2,
	
});




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

seendB = Ti.UI.createButton({
	title : 'Enviar',
	height : '30dp',
	width : '130dp',
	center:{x:'160dp', y:'440dp'},
});
scrollView.add(seendB);

seendB.addEventListener('click', function(e){
	sende.show();
	
});

sende.addEventListener ('click', function(e){
	if(e.index == 0 ){
		postToFacebook()
	}else if(e.index == 1) {
var image = imgView.image;
var ind = Titanium.UI.createProgressBar({
width : 200,
height : 50,
min : 0,
max : 1,
value : 0,
style : Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
top : 10,
message : 'Uploading Image',
font : {
fontSize : 12,
fontWeight : 'bold'
},
color : '#888'
});

win.add(ind);
ind.show();

var xhr = Titanium.Network.createHTTPClient();

xhr.onerror = function(e) {
Ti.API.info('IN ERROR ' + e.error);
};
xhr.onload = function() {
Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState);
};
xhr.onsendstream = function(e) {
ind.value = e.progress;
Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
};
// open the client
xhr.open('POST', 'http://www.generandomaldad.org/hackday/upload.php ');
xhr.setRequestHeader("Connection", "close");
// send the data
xhr.send({
media : image
});

}
});




ciudadD = Ti.UI.createOptionDialog({
	title : 'Ciudad',
	options : ['Distrito Federal', 'Estado de Mexico', 'Cancelar'],
	cancel : 2
});
delegacionD = Ti.UI.createOptionDialog({
	title : 'Delegacion',
	options : ['Azcapotzalco', 'Benito Juarez', 'Cancelar'],
	cancel : 2
});

delegacionB.addEventListener('click', function() {
	delegacionD.show();
});

ciudadB.addEventListener('click', function() {
	ciudadD.show();
});

dialog.addEventListener('click', function(e) {

	if(e.index == 1) {

		Titanium.Media.openPhotoGallery({
			success : function(event) {
				var image = event.media;
				if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
					imgView.image = image;
				}
			},
			cancel : function() {
			}
		});
	} else if(e.index == 0) {
		Titanium.Media.showCamera({
			success : function(event) {
				var image = event.media;
				if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
					imgView.image = image;
				}
			},
			cancel : function() { },
			error : function(error) { var a = Titanium.UI.createAlertDialog({ title : 'Camera' });
				if(error.code == Titanium.Media.NO_CAMERA) { a.setMessage('Device does not have image recording capabilities');} 
				else { a.setMessage('Unexpected error: ' + error.code); }
				a.show(); },
			allowImageEditing : true,
			saveToPhotoGallery : false });
}

});

function postToFacebook() {
//if the user is not logged in, do so, else post to wall
if(Titanium.Facebook.loggedIn == false) {
Titanium.Facebook.appid = '252235321506456';
Titanium.Facebook.permissions = ['publish_stream'];

// Permissions your app needs
Titanium.Facebook.addEventListener('login', function(e) {
if(e.success) {
alert('You are now logged in!');
} else if(e.error) {
alert('Error: ' + e.error);
} else if(e.cancelled) {
alert('You cancelled the login');
}
});
//call the facebook authorize method to login
Titanium.Facebook.authorize();
} else {
// Now post the photo after you've confirmed that we have an access token
var data = {
caption : ta2.value,
picture : imgView.image
};

Titanium.Facebook.requestWithGraphPath('me/photos', data, "POST", function(e) {
if(e.success) {
alert("Success! Your image has been posted to your Facebook wall.");
Ti.API.info("Success! The image you posted has the new ID: " + e.result);
} else {
alert('Your image could not be posted to Facebook at this time. Try again later.');
Ti.API.error(e.error);
}
});
} //end if else loggedIn
}

	
	
	////////////////////////////////////////////////
return  winFoto1;
}
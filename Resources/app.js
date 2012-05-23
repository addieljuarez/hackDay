// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//require the UI components necessary to drive the test
var NavigationController = require('NavigationController').NavigationController,
	primera = require('/ui/primera').primera;
	// flow_dos = require('flow_dos').flow_dos;
	// flow_tres = require('flow_tres').flow_tres;

//create NavigationController which will drive our simple application
var controller = new NavigationController();

//open initial window
controller.open(new primera(controller));


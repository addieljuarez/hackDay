exports.NavigationController = function() {
	this.windowStack = [];
};

exports.NavigationController.prototype.open = function(/*Ti.UI.Window*/windowToOpen) {
	//add the window to the stack of windows managed by the controller
	this.windowStack.push(windowToOpen);

	//grab a copy of the current nav controller for use in the callback
	
	var that = this;
	windowToOpen.addEventListener('close', function() {
		that.windowStack.pop();
	});
	
	//hack - setting this property ensures the window is "heavyweight" (associated with an Android activity)
	windowToOpen.navBarHidden = windowToOpen.navBarHidden || false;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//This is the first window
	if(this.windowStack.length === 1) {
			windowToOpen.exitOnClose = true;
			windowToOpen.open();
		
	}
	//All subsequent windows
	else {
		
		windowToOpen.open();
		 
	}
};

//go back to the initial window of the NavigationController
exports.NavigationController.prototype.home = function() {
	//store a copy of all the current windows on the stack
	var windows = this.windowStack.concat([]);
	for(var i = 1, l = windows.length; i < l; i++) {
		//cierra las view pa
		(this.navGroup) ? this.navGroup.close(windows[i]) : windows[i].close();
	}
	this.windowStack = [this.windowStack[0]]; //reset stack
};

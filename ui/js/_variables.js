var syncStatusMarker,
	remoteLastModified,
	remoteLastModifiedMarker,
	localLastModified,
	localLastModifiedMarker,
	editable,
	user,
	sync_mode,
	timerInt;
	
var refresh_rate = 5000; 
var localstorage_var_name = 'memotab';
var debug = false;
var hasChanged = false;
var editable = $('editable');
var localLastModifiedMarker = $('localLastModified');
var localKeyUpTimer;
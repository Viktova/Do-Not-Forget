var syncStatusMarker,
	remoteLastModified,
	remoteLastModifiedMarker,
	localLastModified,
	localLastModifiedMarker,
	editable,
	medium,
	user,
	sync_mode,
	timerInt,
	localSaveTimer, 
	parseHtmlTimer;
	
var sync_push_time = 5000; // milliseconds
var sync_pull_time = 20; // seconds
var localstorage_var_name = 'memotab';
var debug = false;
var hasChanged = false;
var editable = $('editable');
var localLastModifiedMarker = $('localLastModified');
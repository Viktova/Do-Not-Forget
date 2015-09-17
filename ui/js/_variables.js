var syncStatusMarker,
	remoteLastModified,
	remoteLastModifiedMarker,
	localLastModified,
	localLastModifiedMarker,
	editable,
	medium,
	sync_mode,
	timerInt,
	online_save_timer,
	localSaveTimer, 
	parseHtmlTimer,
	autolinker,
	urlTip,
	caret_position,
	editMode = true;

var localstorage_var_name = 'memotab';
var debug = false;
var hasChanged = false;

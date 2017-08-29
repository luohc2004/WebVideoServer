define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
	var today=new Date();
	function getLastFriday(day) {
		var gap=[2,3,4,5,6,7,1];	
		var lastFriday=new Date();	
		lastFriday.setDate(day.getDate()-gap[day.getDay()]);
		return lastFriday;
	}
	
	return {
		captureDate:ko.observable( getLastFriday(today).toISOString().split('T')[0]),
		today:today.toISOString().split('T')[0]
	};
});
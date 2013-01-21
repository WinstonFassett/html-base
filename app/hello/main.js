define(['require', 'require.paths'], function(require){
	require(['./hello', 'knockout'], function(app, ko){
		app.start();
		ko.applyBindings(app);
	})	
});
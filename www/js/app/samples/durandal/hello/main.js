define(['require', 'require.paths'], function(require){
	require(['./hello', 'knockout'], function(app, ko){
		//app.start();
		console.log('binding', app);
		ko.applyBindings(app);
	})	
});
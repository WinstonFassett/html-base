define(['require', 'require.paths'], function(require){
	require(['./shell', 'knockout'], function(app, ko){
		//app.start();
		console.log('binding', app);
		ko.applyBindings(app);
	})	
});
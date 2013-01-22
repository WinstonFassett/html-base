require.config({
    paths: {

        text: 'require/text',
        css: 'require/css',

	    knockout: 'lib/knockout-2.2.1.debug',
	    jquery: 'lib/jquery-1.7.2.min',
	    hasher: 'lib/hasher',
	    crossroads: 'lib/crossroads',
	    signals: 'lib/signals',
        bootstrap: 'lib/bootstrap/js/bootstrap'
	},
	map: {
	},
	shim: {
        jquery: '$',
	    bootstrap: { deps: ['jquery'] }
	}
});

require.config({
    config: {
        'app/spa/router': {
            defaultRoute: 'home'
        }
    },
    paths: {
        // require plugins
        text: 'app/require/text',
        css: 'app/require/css',

        // libraries
	    knockout: 'lib/knockout-2.2.1.debug',
	    jquery: 'lib/jquery-1.7.2.min',
	    hasher: 'lib/hasher',
	    crossroads: 'lib/crossroads',
	    signals: 'lib/signals',
	    bootstrap: 'lib/bootstrap/js/bootstrap',
	    sammy: 'lib/sammy'
	},
    // shim for non-AMD libraries
	shim: {
        jquery: '$',
        bootstrap: { deps: ['jquery'] },
        sammy: { deps: ['jquery'] }
	}
});

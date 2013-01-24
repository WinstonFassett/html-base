require.config({

    config: {
        'app/spa/router': {
            defaultRoute: 'home'
        }
    },
    paths: {

        text: 'app/require/text',
        css: 'app/require/css',

	    knockout: 'lib/knockout-2.2.1.debug',
	    jquery: 'lib/jquery-1.7.2.min',
	    hasher: 'lib/hasher',
	    crossroads: 'lib/crossroads',
	    signals: 'lib/signals',
	    bootstrap: 'lib/bootstrap/js/bootstrap',
        sammy: 'lib/sammy'
	},
	map: {
	},
	shim: {
        jquery: '$',
        bootstrap: { deps: ['jquery'] },
        sammy: { deps: ['jquery'] }
	}
});

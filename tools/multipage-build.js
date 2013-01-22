{


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
    },

    appDir: '../www',
    baseUrl: 'js',
    /*paths: {
        app: '../app'
    },
    */
    dir: '../www-built',
    modules: [
        //First set up the common build layer.
        {
            //module names are relative to baseUrl
            name: 'common',
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            include: ['jquery',
                      'app/ux/consoleFallback',
                      'app/spa/router'

            ]
        },

        //Now set up a build layer for each page, but exclude
        //the common one. "exclude" will exclude nested
        //the nested, built dependencies from "common". Any
        //"exclude" that includes built modules should be
        //listed before the build layer that wants to exclude it.
        //"include" the appropriate "app/main*" module since by default
        //it will not get added to the build since it is loaded by a nested
        //require in the page*.js files.
        {
            //module names are relative to baseUrl/paths config
            name: 'bootstrap-page',
            include: [
                'app/samples/bootstrap/main'
            ],
            exclude: ['common']
        }
        /*,

        {
            //module names are relative to baseUrl
            name: '../page2',
            include: ['app/main2'],
            exclude: ['../common']
        }
        */

    ]
}

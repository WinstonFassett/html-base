{
    findNestedDependencies: true,
    optimizeCss: "standard",
    mainConfigFile: '../www/js/require.paths.js',
    appDir: '../www',
    baseUrl: 'js',
    /*paths: {
        app: '../app'
    },
    */
    dir: '../www-built',
    //wrap: true,
    //insertRequire: ['bootstrap-page'],
    modules: [
        //{
        //    name: 'bootstrap-page'
        //},
        //{
        //    name: 'bootstrap-page',
        //    include: 'lib/almond'
        //}
            {
                name: 'bootstrap-page-almond',
                include: ['bootstrap-page'],
                insertRequire: ['bootstrap-page'],
                wrap: true
            }
            //,
            //{
            //    baseUrl: '.',
            //    name: 'path/to/almond',
            //    include: ['main'],
            //    insertRequire: ['main'],
            //    out: 'main-built.js',
            //    wrap: true
            //}
    ]
}

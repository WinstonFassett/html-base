{
    findNestedDependencies: true,
    optimizeCss: "standard",
    mainConfigFile: '../www/js/require.paths.js',
    skipDirOptimize: true,
    appDir: '../www',
    baseUrl: 'js',
    /*paths: {
        app: '../app'
    },
    */
    dir: '../www-built',
    modules: [
            { name: 'bootstrap-page' },
            { name: 'app/samples/ko-webmail/main' }
        //,
        //{
        //    name: 'app/samples/ko-webmail/main'
        //}
    ]
}

define(['require', 'knockout', 'crossroads', 'hasher', 'module'],
    function (require, ko, crossroads, hasher, module) {
    // does a sort of r-v-c thing

    var config;
    var _currentRoute = ko.observable();

    function init() {
        config = module.config();
        //log('configuring hasher');
        hasher.initialized.add(initHash); //parse initial hash
        hasher.changed.add(parseHash); //parse hash changes
        // log('configured hasher');
    }

    function start(cb) {
        console.log('initializing hasher');
        hasher.init(); //start listening for history change
        if (cb) cb();
    }

    function route(uri, defaultOpts) {
        // log('routing', uri, crossroads);
        defaultOpts = defaultOpts || [];
        defaultOpts.unshift(uri);
        crossroads.parse(uri, defaultOpts);
    }

    function initHash(newHash, oldHash) {
        if (newHash) {
            parseHash(newHash, oldHash);
        } else {
            if (config.defaultRoute) {
                // log('going to default route:', config.defaultRoute);
                hasher.setHash(config.defaultRoute);
            }
        }
    }

    function parseHash(newHash, oldHash) {
        _currentRoute(newHash);
        if (newHash) {
            console.log('parsing hash', arguments);
            route(newHash);
        } 
    }

    function registerRoute(path, handler) {
        // log('registering route', arguments);
        crossroads.registerRoute(path, function () {
            // log('handling route', path);
            handler.apply(handler, arguments);
            //log('done with handler');
        });
    }

    init();
    return {
        start: start,
        route: route,
        register: registerRoute,
        current: _currentRoute
        //map: mapRoute,
        //go: go
    };

});
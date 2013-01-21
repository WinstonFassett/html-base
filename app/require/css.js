define(["require", 'ux/addCssLink'], function (require, addCssLink) {
    "use strict";
    //function load(path) {
    function load(name, require, load, config) {
        //console.log('load css', arguments);
        var url = require.toUrl(name)
        console.log('url', url);
        addCssLink(url);
        load(true);
    }
    return { load: load };
});
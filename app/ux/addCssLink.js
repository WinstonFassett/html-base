define(['require'], function (require) {

    function loadCss(url) {
        //console.log('resourceDef', resourceDef);
        //var url = require.toUrl(resourceDef);
        //console.log('url', url);
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    return loadCss;

});
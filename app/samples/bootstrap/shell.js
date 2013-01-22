define(['require', 'knockout', 'spa/router', 'ux/showPane', 'crossroads', 'jquery',
        'bootstrap',
        'css!ux/panes.css',
        'css!lib/bootstrap/css/bootstrap.css',
        'css!lib/bootstrap/css/bootstrap-responsive.css',

], function (require, ko, router, showPane, crossroads, jquery) {
	
    $ = jquery;

    var title_ = ko.observable('Boostrap App!');
    
    require([

    ]);
    

    crossroads.bypassed.add(function (request) {        
        showPane(request);
    });
    router.start();

    return {
		title: title_,
		sayHello: function () {
            alert('Hello ' + title_() + '!', 'Greetings');
        }
    };
	
});
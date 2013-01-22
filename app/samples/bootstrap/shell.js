define(['require', 'knockout', 'spa/router', 'ux/showPane', 'crossroads', 'jquery',
    // additional resources    
    'bootstrap',
    'css!ux/panes.css',
    'css!lib/bootstrap/css/bootstrap.css',
    'css!lib/bootstrap/css/bootstrap-responsive.css',

], function (require, ko, router, showPane, crossroads, jquery) {
	
    $ = jquery;

    var title_ = ko.observable('Boostrap App!');

    function afterRender(){
        $('[rel=tooltip]').tooltip();
        $('[rel=popover]').popover();
    }

    crossroads.bypassed.add(function (request) {
        showPane(request);
    });
    router.start();


    return {
        afterRender: afterRender,
		title: title_,
		sayHello: function () {
            alert('Hello ' + title_() + '!', 'Greetings');
        }
    };
	
});
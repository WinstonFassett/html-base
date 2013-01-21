define(['require','knockout', 'spa/router', 'ux/showPane', 'crossroads'], function(require, ko, router, showPane, crossroads){
	
    var title_ = ko.observable('You can change this');
    
    require(['css!ux/panes.css']);    
    require(['css!lib/bootstrap/css/bootstrap.css']);
    require(['css!lib/bootstrap/css/bootstrap-responsive.css']);

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
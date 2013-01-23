define(['require','knockout', 'app/spa/router', 'app/ux/showPane', 'crossroads'], function(require, ko, router, showPane, crossroads){
	
    var title_ = ko.observable('hello');
    
    require(['css!app/ux/panes.css']);    


    crossroads.bypassed.add(function (request) {
        // try showPane
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
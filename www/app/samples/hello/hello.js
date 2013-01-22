define(['require','knockout'], function(require, ko){
	
    var title_ = ko.observable('hello');
    
    return {
		title: title_,
		sayHello: function () {
            alert('Hello ' + title_() + '!', 'Greetings');
        }
    };
	
});
define(['require','knockout'], function(require, ko){
	
    var name = ko.observable();
    var canSayHello = ko.computed(function () {
        return name() ? true : false;
    });

    return {
        displayName: 'What is your name?',
        name: name,
        sayHello: function () {
            alert('Hello ' + name() + '!', 'Greetings');
        },
        canSayHello: canSayHello
    };
	
});
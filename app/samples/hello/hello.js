define(['require','knockout'], function(require, ko){
	
	var title_ = ko.observable('title');
	
	function start(){
		//alert('hello');
	}	
	
	return {
		start: start,		
		title: title_
	};
});
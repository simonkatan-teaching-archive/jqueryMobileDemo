$('document').ready(function(){ //lets wait until the HTML is loaded so Jquery knows what we're referring to

	$('#tapButton').on("tap", function(e){

		var str = $('#outputArea').val();
		$('#outputArea').val(str + " tap \n");
	});

	$('#holdButton').on("taphold", function(e){
		var str = $('#outputArea').val();
		$('#outputArea').val(str + " hold \n");
	});

	//Try adding other mobile events from the api 
	//How about a swipe event ? 

	// http://api.jquerymobile.com/category/events/

});


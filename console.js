$(document).ready(function(){

	//grabbing user input from form
	$('#getConsole').submit(function(e){
	e.preventDefault(); //so we don't submit the form again
		var consoleValue = null;
		consoleValue = document.getElementById("getConsole").elements[0].value; //grab console value
		console.log("console: " + consoleValue);
		sessionStorage.setItem('console', consoleValue);	
		window.location.href = 'results.html'; //redirect to result page
	});

});

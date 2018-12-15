$(document).ready(function(){
	
	//grabbing user input from form
	$('#getGenre').submit(function(e){
		e.preventDefault(); //so we don't submit the form again
		var genreValue = null;
		genreValue = document.getElementById("getGenre").elements[0].value; //grab genre value
		//sessionStorage.setItem('genre', genreValue);
		window.location.href = 'console.html'; //redirect to next page
	});

});

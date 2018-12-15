$(document).ready(function () { 

    //grabbing user input from form upon submit button being hit
    $('#getYear').submit(function (e){
            	e.preventDefault(); //so we don't submit the form again

		// Declare another variable so that we can hold the value of our
		// input field. Assign with `null` at first so we will know it's empty
		var yearValue = null;
	    	var x;

	    	//Set yearInput variable equal to id-selector = 'yearInput' from HTML file
		var x = document.getElementById("getYear").elements[0].value; //we are accessing the first (and only) form
		
	    	// Check if the input's value has at least 4 digits
  		if (x / 1000 >= 1) 
	    	{
    			if (x > 2000) 
			{
      				// If number is above 2000, have the browser display an alert dialog to the user
      				window.alert('Please enter a year before 2000');
    			} 
			else if (x < 1980) 
			{
      				// If number is below 1980, have the browser display an alert dialog to the user
      				window.alert('Please enter a year after 1980');
    			} 
			else //year is good
			{
				yearValue = x; //assign to yearValue variable
				sessionStorage.setItem('year', yearValue); //put into local storage
				window.location.href = 'genre.html'; //redirect to next page
			}
    		}
	    	else //input value has less than 3 digits 
	    	{
			window.alert('Input must have 4 digits or more');	
	    	}

	    
	    
    });
});



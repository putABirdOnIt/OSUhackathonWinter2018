$(document).ready(function () { 

    //grabbing user input from form upon submit button being hit
    $('#getYear').submit(function (e){
            	e.preventDefault(); //so we don't submit the form again

	    	//Set yearInput variable equal to id-selector = 'yearInput' from HTML file
		var yearInput = document.getElementById("getYear").elements[0].value; //we are accessing the first (and only) form
		console.log(yearInput);
    });
});

/*
// Declare another variable so that we can hold the value of our
// input field. Assign with `null` at first so we will know it's empty
var yearValue = null;

// This is our function that we want to react to the input element's events
function handleInput(event) {
  //Is console.log() similar to cout in C++?

  console.log(event.target.value);

  // Check if the input's value has at least 4 digits
  if (event.target.value / 1000 >= 1) {
    if (event.target.value > 2000) {
      // If number is above 2000, have the browser display an alert dialog to the user
      window.alert('Please enter a year before 2000')
    } else if (event.target.value < 1980) {
      // If number is below 1980, have the browser display an alert dialog to the user
      window.alert('Please enter a year after 1980')
    } else {
      // Set yearValue equal to'event' argument property 'target' which accesses 'value' currently held inside of input element  
      // Not sure if this will work!
      yearValue = event.target.value;
    }
  }
}

yearInput.addEventListener('input', handleInput)
*/

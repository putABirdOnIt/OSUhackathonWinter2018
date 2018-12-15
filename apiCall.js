//$(document).ready(function(){
	//grab query values from session storage
	//var year = sessionStorage.year;
	var year = '1990'; //for testing purposes

	//API call
	var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	var apiKey = 'db8cb3d339c6f4785beee44b79b3ec96';
	var req = new XMLHttpRequest();
	var queryString = 'https://api-endpoint.igdb.com/games/?search='+year+'&fields=name,first_release_date,human';
	//var queryString = 'https://api-endpoint.igdb.com/release_dates/?search=65585&fields=id,game,y';

	//queryString+=year;
	req.open('GET', queryString, false);
	req.withCredentials = true;
	req.setRequestHeader("user-key", apiKey);
	req.setRequestHeader("Accept", "application/json");
	req.send(); //request json data
	var response = JSON.parse(req.responseText); //response variable holds all the API data returned
	console.log(response);
	//console.log(response[3].first_release_date.human);


//});

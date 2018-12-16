/* Instructions: on command line/putty, run node apiCall.js
 * There will be alot of results at one time so I would mute one section at a time to work on it */
 

 /* For this first call, you will see the resulting array results for platform_id and platform_names */ 

/*
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var queryString = 'https://api.mobygames.com/v1/platforms?&api_key=FhVfEFsB6RGpjwCqLtrw1g==';
var req = new XMLHttpRequest();
req.open('GET', queryString, false);
req.withCredentials = false;
req.send(); //request json data
var response = JSON.parse(req.responseText); //response variable holds all the API data returned
console.log(response);
*/

/* For this second call, you will see the results for genre_id and genre_names */

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var queryString = 'https://api.mobygames.com/v1/genres?&api_key=FhVfEFsB6RGpjwCqLtrw1g==';
var req = new XMLHttpRequest();
req.open('GET', queryString, false);
req.withCredentials = false;
req.send(); //request json data
var response = JSON.parse(req.responseText); //response variable holds all the API data returned
console.log(response);



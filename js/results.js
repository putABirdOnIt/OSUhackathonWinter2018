$(document).ready(function () {
    //grab stored values
    var year = sessionStorage.year;
    var genre = sessionStorage.genre;
    var platform = sessionStorage.console;
    console.log("year: " + year);
    console.log("genre: " + genre);
    console.log("console: " + platform);

    //API call
    
 

    //get platform id
    var req = new XMLHttpRequest();
    var queryString = 'https://api.mobygames.com/v1/games?platform=' + platform + '&genre=' + genre + '&api_key=FhVfEFsB6RGpjwCqLtrw1g==';
    //var queryString = 'https://api.mobygames.com/v1/platforms?platform_name=Linux&api_key=FhVfEFsB6RGpjwCqLtrw1g==';
    req.open('GET', queryString, false);
    req.withCredentials = false;
    req.send(); //request json data
    var response = JSON.parse(req.responseText); //response variable holds all the API data returned
    //console.log("length: " +response.games.length);
    //console.log(response.games[0].platforms[0].first_release_date);

    
    //look for the individual response with the year specified and store into array
    var results = [];
    var j = 0;
    for (var i=0; i<response.games.length; i++)
    {
        if (response.games[i].platforms[0].first_release_date == year) {
            results[j] = response.games[i];
            j++;
        }
    }
    
    /* some testing
    console.log("length: " + results.length);
    for (var i = 0; i < 10; i++) {
        var num = Math.floor(Math.random() * (results.length-1)+1);
        console.log(num + " ");
    }    
    console.log("results: ")
    for (var i=0; i<results.length; i++)
    {
        console.log(results[i]);

    }
    */
   
    var result = results[Math.floor(Math.random() * (results.length - 1) + 1)]; //randomly pick a result from our array of queries that meet the user criteria
    var imageString = '<img id="image" style="width:60px;height:70px" src="' + result.sample_cover.image + '"/>';


    $('#gameTitleHere').text(result.title); //append text to a div
    $('#gameImageHere').prepend(imageString); //append picture to a div


    });
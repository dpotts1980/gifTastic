// create an array of cities, new cities will be pushed into this array;
//loop through the array 
// run a function that will create the gif buttons
// .empty will erase anything in the div to prevent duplication
// we'll need a function to create a new city button and form method to create the input place
// we'll need to link to the gif api as well to 

var citiesArray = ["Chicago", "Detroit", "San Francisco", "Panama City", "Sevilla", "Tangier", "Barcelona", "Paris"];

    
    
    function displayButtons(){
        $("#cityButtonsDisplayed").empty();
    //for loop through the cities and create the buttons//
    for(i = 0; i < citiesArray.length; i++) {
        console.log(citiesArray[i].length);
        var cityButtons =  $("<button>" + citiesArray[i] + "</button>");
        cityButtons.addClass("action");
        cityButtons.addClass("btn btn-info search-giphy");
        var cityButtonsDisplayed = $('#cityButtonsDisplayed');
        cityButtonsDisplayed.append(cityButtons);
        console.log(cityButtonsDisplayed);
        
        };
    


    }
    displayButtons();

    $(document).on("click", ".search-giphy", searchGiphy);
    
    function searchGiphy(){
        console.log('hi')
        var cityData= $(this).text();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cityData + "&api_key=wb7VXuuCp9IduDjRrvhZZ2RNrAA1U1KV";
        $.ajax({
            url: queryURL,
            type: "GET"
          }).then(function(response){

            var url = response.data[0].images.fixed_height.url
          })
    }

      /*
     $("button").on("click", function() {
      var person = $(this).attr("data-person");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          var results = response.data
    */
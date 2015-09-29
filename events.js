// 2R7L7O3TRSW67FVBFR
// Here is our events API Key ^^^
// WKHDWF4S3ZPN5R6UKQSC
// OAUTH Tokens ^^ 
// HMJT6CNE2X3WBEVWWSZ2OBFBC4TMVN2VIVZMRHLT4XPGNUANWO
// Client Secret ^^

$(document).ready(function()
	{

		$("#btn-submit").click(function(e){
    var value = $("#city").val();
    console.log(value);
    
     e.preventDefault();
    
    // Rest of Ajax call here: 
    var myurl= "https://api.wunderground.com/api/936feb76a9ce7997/geolookup/conditions/q/UT/";
    myurl += value;
    myurl += ".json";
    console.log(myurl);
    $.ajax({
        url : myurl,
        dataType : "jsonp",
        success : function(data) {
            console.log(data);
            var location = data['location']['city'];
              var temp_string = data['current_observation']['temperature_string'];
              var current_weather = data['current_observation']['weather'];
              var everything = "<ul>";
              everything += "<li>Location: "+location;
              everything += "<li>Temperature: "+temp_string;
              everything += "<li>Weather: "+current_weather;
              everything += "</ul>";
              $("#currentWeather").html(everything);
        }
      }) // end of ajax
});


});




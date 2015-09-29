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
            var title = data['location']['city'];
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

$('#mybutton').click(function(e) {
	e.preventDefault();
	var city = $('#city').val();
	var state = $('#state').val();
	var category = $('#category').val();
	var todaysDate = new Date(); 
	var year = todaysDate.getFullYear().toString();
	var month = (todaysDate.getMonth() + 1).toString();
	if(month.length == 1){month = "0" + month;}
	var day = todaysDate.getDate().toString();
	if(day.length == 1){day = "0" + day;}
	
	console.log(month);
  var myurl= "https://www.eventbriteapi.com/v3/events/search/?venue.city=" + city + "&venue.region= " + state + "&categories=" + category + "&start_date.range_start=" + year + "-" + month + "-" + day + "T01%3A00%3A00Z&start_date.range_end=" + year + "-" + month + "-" + day + "T23%3A59%3A59Z&token=WKHDWF4S3ZPN5R6UKQSC";
  $.ajax({
	url : myurl,
    success : function(parsed_json) {
      console.log(parsed_json);
    },
	error: function(e) {
		alert(e);
	}
  });
});


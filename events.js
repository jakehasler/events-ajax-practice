// 2R7L7O3TRSW67FVBFR
// Here is our events API Key ^^^
// WKHDWF4S3ZPN5R6UKQSC
// OAUTH Tokens ^^ 
// HMJT6CNE2X3WBEVWWSZ2OBFBC4TMVN2VIVZMRHLT4XPGNUANWO
// Client Secret ^^

var jsonData;

$(document).ready(function()
	{

		$("#btn-submit").click(function(e){
    var value = $("#city").val();
    console.log(value);
    
     e.preventDefault();
    
    // Rest of Ajax call here: 
    var city = $('#city').val();
	var state = $('#state').val();
	var category = $('#category').val();
	var todaysDate = new Date(); 
	var year = todaysDate.getFullYear().toString();
	var month = (todaysDate.getMonth() + 1).toString();
	if(month.length == 1){month = "0" + month;}
	var day = todaysDate.getDate().toString();
	if(day.length == 1){day = "0" + day;}
	var nextWeek = "2015-10-20";
	console.log(month);
	var myurl = "https://www.eventbriteapi.com/v3/events/search/?venue.city=" + city + "&venue.region=" + state + "&categories=" + category + "&start_date.range_start=" + year + "-" + month + "-" + day + "T01%3A00%3A00Z&start_date.range_end=" + nextWeek + "T23%3A59%3A59Z&token=WKHDWF4S3ZPN5R6UKQSC";
  	//var myurl= "https://www.eventbriteapi.com/v3/events/search/?venue.city=" + city + "&venue.region=" + state + "&categories=" + category + "&start_date.range_start=" + year + "-" + month + "-" + day + "T01%3A00%3A00Z&start_date.range_end=" + year + "-" + month + "-" + day + "T23%3A59%3A59Z&token=WKHDWF4S3ZPN5R6UKQSC";
  	console.log(myurl);
    $.ajax({
        url : myurl,

        success : function(data) {
        	jsonData = data;
            console.log(data);
       
            var everything = "<div>";
            
            for(var i in data['events'])
            {
	            var title = data['events'][i]['name']['text'];
	            // var startTime = data['current_observation']['temperature_string'];
	            var logoUrl = data['events'][i]['logo']['url'];
	            var eventUrl = data['events'][i]['url'];
	            // var current_weather = data['current_observation']['weather'];
	            everything += "<div class=\"col-sm-6 col-md-3 \">";
	            everything += "<div class=\"thumbnail featured-product\">";
	            everything += "<img src=\"" + logoUrl + "\">";
	            everything += "<h3>"+ title + "</h3>" ;
	            everything += "<div class=\"input-group\"><a href=\"" + eventUrl + "\"";
	            everything += "<button class=\"btn btn-primary\" type=\"button\">See More Details</button>";
	            everything += "</a></div>";
	            everything += "</div>";
	            everything += "</div>";
        	}
            // After Loop
        	everything += "</div>"
            console.log(everything);
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


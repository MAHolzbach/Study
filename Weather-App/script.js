$(document).ready(function() {
  var lat;
  var long;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      long = position.coords. longitude;
      $("#data").html("latitude: " + lat + "<br>longitude: " + long);
    });
  }
  var temp;
  var main;
  $.getJSON('api.openweathermap.org/data/2.5/weather?id=524901&APPID={0ff953d6ecfea419d01dc91de431d825}&lat={lat}&lon={long}', function(json) {
    $('#data').html(json);
    // temp = json.;
    //  = json.coord.lon;
    // $('#data').html('Current conditions are ' + json.)
  });
});

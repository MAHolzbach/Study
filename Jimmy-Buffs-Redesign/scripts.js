function initMap() {
  var jimmyBuffs = {lat: 40.676492, lng: -74.291977};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: jimmyBuffs
  });
  var marker = new google.maps.Marker({
    position: jimmyBuffs,
    map: map
  });
}


function init() {
  var domMap = document.getElementById("mapR");
  var map = GUTIL.makeMap(domMap);
  
  map.zoom = 12;
  map.disableDefaultUI =  false;
  map.keyboardShortcuts = true;
  map.scrollwheel = true;
  map.navigationControl = true;
  map.scaleControl = true;
  map.draggable = true;
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  directionsDisplay.setMap(map);
}

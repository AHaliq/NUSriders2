/** given a DOM id of a input text field, initialize google search box to it */
function makeSearchBox(id) {
  var input = document.getElementById(id);
  return new google.maps.places.SearchBox(input);
}

/** given a DOM id of a div, initialize maps api into it */
function makeMap(id) {
  var mapDiv = document.getElementById("map" + id);
  // get map DOM div object

  return new google.maps.Map(mapDiv, {
    center: {lat: 1.35, lng: 103.82},
    zoom: 10,
    disableDefaultUI: true,
    keyboardShortcuts: false,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false
  });
}

/** given a google map object, generate a places service*/
function loadService(map) {
  return new google.maps.places.PlacesService(map);
}

/** given the map, its service, and marker arguments, return marker via a
callback function and also the name of the marker */
function loadMarker(service, map, label, placeId, callback) {
  service.getDetails({
    placeId: placeId
  }, function(place, status) {
    if(status == "OK") {
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        label: label
      });
      callback(marker, place.name);
    }else {
      callback(undefined, undefined);
    }
  });
}

/** resize viewport of map given two google position objects */
function updateMapBounds(posA, posB, map) {
  var bounds = new google.maps.LatLngBounds();
  bounds.extend(posA);
  bounds.extend(posB);
  map.fitBounds(bounds);
}

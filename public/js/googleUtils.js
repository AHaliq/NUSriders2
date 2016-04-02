var GUTIL = {
  makeSearchBox : function(boxDivId) {
    var input = document.getElementById(boxDivId);
    return new google.maps.places.SearchBox(input);
  },
  makeMap : function(mapDiv) {
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
  },
  setMapBounds : function(gMapObj) {
    var bounds = new google.maps.LatLngBounds();
    for(var i = 1; i < arguments.length; i++)
      bounds.extend(arguments[i].getPosition());
    gMapObj.fitBounds(bounds);
  },
  makeService : function(gMapObj) {
    return new google.maps.places.PlacesService(gMapObj);
  },
  makeMarker : function(gMapObj, label) {
    return new google.maps.Marker({
      map : gMapObj,
      label : label
    });
  },
  resolveIDtoPlace : function(service, placeID, gMarker, callback) {
    service.getDetails({placeId: placeID},
      function(place, status) {
        if(status == google.maps.places.PlacesServiceStatus.OK) {
          gMarker.setPosition(place.geometry.location);
          gMarker.placeName = place.name;
          callback(gMarker);
        }else {
          setTimeout(function() {
            GUTIL.resolveIDtoPlace(service, placeID, gMarker, callback);
          }, Math.random() * 10);
          // forceful reload until pass, should probably have a timeout.. but no
        }
    });
  }
}

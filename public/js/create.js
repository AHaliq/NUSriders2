
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
  map.directionsService = new google.maps.DirectionsService;
  map.directionsDisplay = new google.maps.DirectionsRenderer;
  map.directionsDisplay.setMap(map);

  map.A = new Point("A", document.getElementById("pac-input-A"), map);
  map.B = new Point("B", document.getElementById("pac-input-B"), map);
}
function Point(lbl, dom, gMapObj) {
  this.label = lbl;
  this.pobj = undefined;
  this.dom = dom;
  this.map = gMapObj;
  this.auc = new google.maps.places.Autocomplete(this.dom);
  this.auc.bindTo('bounds', gMapObj);
  var pointObj = this;
  this.auc.addListener('place_changed', function() {
    var place = pointObj.auc.getPlace();
    if(!place.geometry) return;
    pointObj.pobj = place;
    _pEventCallback(pointObj);
  });
}
function _pEventCallback(pt) {
  if(pt.pobj.geometry.viewport) {
    pt.map.fitBounds(pt.pobj.geometry.viewport);
  }else {
    pt.map.setCenter(pt.pobj.geometry.location);
    pt.map.setZoom(17);
  }
  // set bounds
  if(pt.map.A.pobj != undefined && pt.map.B.pobj != undefined) {
    pt.map.directionsService.route({
      origin: {'placeId': pt.map.A.pobj.place_id},
      destination: {'placeId': pt.map.B.pobj.place_id},
      travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        pt.map.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
  // plot route if both points loaded
}

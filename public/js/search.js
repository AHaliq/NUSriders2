
function init() {
  var fromBox = makeSearchBox("pac-input-A");
  var toBox = makeSearchBox("pac-input-B");
  var list = new List("list", "sl");

  // TEST CODE TO FORCE GENERATE SOME ENTITIES
  //-----------------------------------------------------
  // notice how real implementation is like only 3 lines
  for(var i = 0; i < 13; i++) {
    var ent = list.addEntity(makeAB);
    // force create entities
    ent.intf.updateDriverName("driver"+ i.toString());
    list.updateMarkers(i,
      "ChIJOdueMVIa2jERhE4TnhWtNpo",
      "ChIJSeUa7KcZ2jERNVg2CvmlVbk");
    // concrete fake entries of driver name and routes
  }
  setTimeout(function() {
    list.updateMarkers(2,
      "ChIJHSrGJ5EZ2jERTzbUyme7KuQ",
      "ChIJFQYC8YwZ2jERDRaSlDO1Q0k");
    list.updateMarkers(4,
      "ChIJb-ErmBYX2jERBl1gF7cPIj4",
      "ChIJVVRNg0oX2jERxH0FUCJhoz4");
  }, 10000);
  // testing marker updates
  // END OF TEST CODE
  //-----------------------------------------------------
}

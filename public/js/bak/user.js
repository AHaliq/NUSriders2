function init() {
  var list = new List("list", "pl");
  switch(tpe) {
    case 10:
      for(var i = 0; i < 4; i++) list.addEntity(makeRTP);
      list.addEntity(makeAddRouteBtn, false);
    break;
    case 11:
      for(var i = 0; i < 4; i++) list.addEntity(makeRTU);
    break;
    case 20:
    alert("blom crash");
      for(var i = 0; i < 4; i++) list.addEntity(makeABU);
      alert("ayy");
    break;
    case 21:
      for(var i = 0; i < 4; i++) list.addEntity(makeAB);
    break;
    case 3:

    break;
  }
  //TEMP MAKE FAKE DATA RATHER THAN PULL FROM DB
}

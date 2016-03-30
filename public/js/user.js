function init() {
  var list = new List("list", "pl");
  switch(tpe) {
    case 1:
      for(var i = 0; i < 4; i++) list.addEntity(makeRTP);
      list.addEntity(makeAddRouteBtn, false);
    break;
    case 2:

    break;
    case 3:

    break;
  }
}

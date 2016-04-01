function init() {
  var list = new List("list");
  switch(tpe) {
    case 10:
      for(var i = 0; i < 4; i++)
        list.addCard(ASM.ABRoute);
      //RTP
    break;
    case 11:
      for(var i = 0; i < 4; i++)
        list.addCard(ASM.AB);
    break;
    case 20:
      for(var i = 0; i < 4; i++)
        list.addCard(ASM.ABTripBook);
    break;
    case 21:
      for(var i = 0; i < 4; i++)
        list.addCard(ASM.ABTripCancel);
    break;
    case 3:
      for(var i = 0; i < 4; i++) {
        list.addCard(ASM.ABTripHistory);
        list.cards[i].addPassenger("admin", "admin@gmail.com");
      }
      list.cards[2].addPassenger("AHaliq", "haliq@nus.edu.sg");
    break;
  }
  //TEMP MAKE FAKE DATA RATHER THAN PULL FROM DB
}

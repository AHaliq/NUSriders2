

function init() {
  var fromBox = GUTIL.makeSearchBox("pac-input-A");
  var toBox = GUTIL.makeSearchBox("pac-input-B");
  //var list = LIST_FACTORY.List("list", "sl");
  //list.addCard(LIST_FACTORY.ASSEMBLER_LIBRARY.ABSBook);
  var list = new List("list");
  for(var i = 0; i < 10; i++) {
    list.addCard(ASM.ABTripBook);
    list.cards[i].updateAB("ChIJOdueMVIa2jERhE4TnhWtNpo", "ChIJFQYC8YwZ2jERDRaSlDO1Q0k");
  }
  list.cards[1].segs[0].updateUSeg("admin", "admin@gmail.com");
  list.cards[2].segs[0].updateUSeg("AHaliq", "haliq@nus.edu.sg");
  // fake data...
}

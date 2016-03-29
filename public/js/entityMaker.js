/**
a maker function consists of a public card property
  - DOM object of entity
  - created by using the methods listed below i.e. makeEntityMap, etc.
interface methods to manipulate the DOM object
  - you can specify anything you want
  - specifically we can modify field values or driver name
any post constructor calls
  - this can be calling the interface methods to setup the entity
TODO consider inheritance of maker functions... but its so chim...
*/

/** make driver's routes entities */
function makeRTP(id) {
  var fields = 3;
  var buttonLabel = "advertize";

  this.card = document.createElement('div');
  this.card.setAttribute('class', "itemCard");

  this.card.appendChild(makeEntityMap(id));
  this.card.appendChild(makeEntityDataCont(fields));
  this.card.appendChild(makeButton(buttonLabel));

  var FIELDS = 1;
  var FIELDS_ROW_LABEL = 0;
  var FIELDS_ROW_VALUE = 1;
  var BUTTON = 2;
  this.updateDriverName = function (driver) {

  };
  /** ensure row index exists otherwise it will fuck up */
  this.updateFieldName = function(row, field) {
    this.card.childNodes[FIELDS].childNodes[row].childNodes[FIELDS_ROW_LABEL].childNodes[0].nodeValue = field;
  }

  this.updateFieldValue = function(row, value) {
    this.card.childNodes[FIELDS].childNodes[row].childNodes[FIELDS_ROW_VALUE].childNodes[0].nodeValue = value;
  }
  this.removeButtonEvent = function() {
    this.card.childNodes[BUTTON].onclick = null;
  }
  // setup interface
  this.updateFieldName(0, "From");
  this.updateFieldName(1, "To");
  this.updateFieldName(2, "ALooo");
  // END OF IMPLEMENTATION
}

/** Make search results entities */
function makeAB(id) {
  var fields = 2;
  var buttonLabel = "book";

  this.card = document.createElement('div');
  this.card.setAttribute('class', "itemCard");

  this.card.appendChild(makeEntityHead());
  this.card.appendChild(makeEntityMap(id));
  this.card.appendChild(makeEntityDataCont(fields));
  this.card.appendChild(makeButton(buttonLabel));

  var HEAD = 0;
  var HEAD_NAMEFIELD = 1;
  var FIELDS = 2;
  var FIELDS_ROW_LABEL = 0;
  var FIELDS_ROW_VALUE = 1;
  var BUTTON = 3;
  this.updateDriverName = function (driver) {
    this.card.childNodes[HEAD].childNodes[HEAD_NAMEFIELD].childNodes[0].nodeValue = driver;
  };
  /** ensure row index exists otherwise it will fuck up */
  this.updateFieldName = function(row, field) {
    this.card.childNodes[FIELDS].childNodes[row].childNodes[FIELDS_ROW_LABEL].childNodes[0].nodeValue = field;
  }
  this.updateFieldValue = function(row, value) {
    this.card.childNodes[FIELDS].childNodes[row].childNodes[FIELDS_ROW_VALUE].childNodes[0].nodeValue = value;
  }
  this.removeButtonEvent = function() {
    this.card.childNodes[HEAD].onclick = null;
    this.card.childNodes[BUTTON].onclick = null;
  }
  // setup interface
  this.updateFieldName(0, "From");
  this.updateFieldName(1, "To");
  // END OF IMPLEMENTATION
}

function makeAddRouteBtn() {
  this.card = document.createElement('div');
  this.card.setAttribute('class', "btnCard");

  var icCn = document.createElement('div');
  icCn.setAttribute('class', "btnIconIC");
  var icIm = document.createElement('img');
  icIm.src = "../img/addIcon.png";
  icCn.appendChild(icIm);
  this.card.appendChild(icCn);

  var cont = document.createElement('div');
  cont.setAttribute('class', "btnLabelCont");
  cont.appendChild(document.createTextNode("ADD NEW ROUTE"));
  this.card.appendChild(cont);
  this.removeButtonEvent = function() {
    this.card.onclick = null;
  }
  this.card.onclick = function(){
    window.location.href = './createRoute.html';
  }
}

// DIV ELEMENTS CONSTRUCTOR METHODS ===========================================

/** create div which displays driver name*/
function makeEntityHead() {
  var cont = document.createElement('div');
  cont.setAttribute('class', "userIC");

  var icCn = document.createElement('div');
  icCn.setAttribute('class', "userIconIC");

  var icIm = document.createElement('img');
  icIm.src = "../img/userIcon3.png";
  //TODO load from db? else default

  var icNm = document.createElement('div');
  icNm.setAttribute('class', "userNameIC");
  icNm.appendChild(document.createTextNode("-"));

  icCn.appendChild(icIm);
  cont.appendChild(icCn);
  cont.appendChild(icNm);

  cont.onclick = function() {
    window.location.href = './profilePage.html';
  }
  return cont;
}
/** create div to hold map instance */
function makeEntityMap(id) {
  var cont = document.createElement('div');
  cont.setAttribute('class', "mapIC");
  cont.setAttribute('id', "map" + id);
  return cont;
}
/** create div to parent list of field inputs divs */
function makeEntityDataCont(fields) {
  var cont = document.createElement('div');
  cont.setAttribute('class', "dataIC");
  for(var i = 0; i < fields; i++) {
    cont.appendChild(makeEntityDataRow());
  }
  return cont;
}
/** create div of field inputs*/
function makeEntityDataRow() {
  var cont = document.createElement('div');
  cont.setAttribute('class', "dataPartitionIC");

  var ficon = document.createElement('div');
  ficon.setAttribute('class', "iconDPIC pIC");
  ficon.appendChild(document.createTextNode("-"));

  var fvalu = document.createElement('div');
  fvalu.setAttribute('class', "valueDPIC pIC");
  fvalu.appendChild(document.createTextNode("-"));

  cont.appendChild(ficon);
  cont.appendChild(fvalu);
  return cont;
}
/** given a text it will create the div for button at bottom of entity */
function makeButton(label) {
  var cont = document.createElement('div');
  cont.setAttribute('class', "btnIC");
  cont.appendChild(document.createTextNode(label));

  cont.onclick = function() {
    alert("do something");
  }

  return cont;
}

/** Singleton module as an interface to create list objects */
var LIST_FACTORY = (function() {
var makeDiv = function(className) {
  var obj = document.createElement('div');
  obj.setAttribute('class', className);
  return obj;
};
var makeDivText = function(className, txt) {
  var obj = makeDiv(className);
  obj.appendChild(document.createTextNode(txt));
  return obj;
};
var makeImg = function(src) {
  var obj = document.createElement('img');
  obj.src = src;
  return obj;
};
/** Method that creates card DOM & interfaces for assembler */
var CARD_FACTORY = function() {
  var card = makeDiv('itemCard');
  /** array of segments in the card */
  card.segments = [];
  /** interface to append segments to the card */
  card.appendSegment = function(seg) {
    this.segments.push(seg);
    this.appendChild(seg);
  };
  /** inteface to remove segments at specified index */
  card.removeSegment = function(index) {
    this.removeChild(this.segments[index]);
    this.segments.splice(index,1);
  };
  return card;
};
/** Singleton module of all segments an assembler can create for a card */
var SEGMENT_FACTORY = (function() { return {
  UserSegment   : function() {
    var seg = makeDiv('userIC');
    var imgCont = makeDiv('userIconIC');
    imgCont.appendChild(makeImg('./img/userIcon.png'));
    var nmeCont = makeDivText('userNameIC', '-');
    seg.appendChild(imgCont);
    seg.appendChild(nmeCont);
    // setup dom

    seg.update = function(name, email) {
      nmeCont.childNodes[0].nodeValue = name;
      seg.onclick = function() {
        window.location.href = './user.php?user='+email;
      }
    };
    // setup interfaces

    return seg;
  },
  MapSegment    : function(id) {
    var seg = makeDiv('mapIC');
    seg.setAttribute('id', 'map'+id);
    //TODO load google maps
    return seg;
  },
  DataSegment    : function() {
    var seg = makeDiv('dataz');
    seg.rows = [];
    seg.addNewRow = function() {
      var obj = makeDiv('rowz');
      obj.updateField = function(field) { console.log("yo " + field); };
      this.rows.push(obj);
    }
    return seg;
  },
  ButtonSegment : function(label) {
    var seg = makeDiv("aiight");
    return seg;
  },
  AddSegment    : function() {
    var seg = makeDiv("hellaaa");
    return seg;
  }
};})();

return {
  /** Creates a list object
  @param  id:string  id of div to be used as list */
  List :  function(id) {
    /** rolling index to uniquely identify each card instance */
    var ri = 0;
    /** created list object */
    return {
      /** reference to dom of list object */
      dom         : document.getElementById(id),
      /** array of cards in the list */
      cards       : [],
      /** interface to add new cards to the list altering the DOM of the list
      @param  assembler a assembler method declared in ASSEMBLER_LIBRARY */
      addCard     : function(assembler) {
        /** create the card object
        which is also the DOM of the card object */
        var card = CARD_FACTORY();
        assembler(card, id + (ri++));
        // decorate card to assembler contract
        this.cards.push(card);
        this.dom.appendChild(card);
        // add card to list
      },
      /** inteface to remove card at specified index */
      removeCard  : function(index) {
        this.dom.removeChild(this.cards[index]);
        this.cards.splice(index,1);
      }
    };
  },
  /** Singleton module to declare all assemblers (contracts)
  an assembler appends segments and interfaces amongs other things to cards */
  ASSEMBLER_LIBRARY : (function() {
    var AB = function(card, id) {
      card.appendSegment(SEGMENT_FACTORY.MapSegment(id));
      var dseg = SEGMENT_FACTORY.DataSegment();
      card.appendSegment(dseg);
      subAssembleFields(["From", "To"], dseg);
      //TODO add interfaces for markerLoader
    }
    /**
    @precondition AB's contract assumed to be [map, dataSeg[From, To]] */
    var ABSearch = function(card, id, label) {
      card.appendSegment(SEGMENT_FACTORY.UserSegment());
      AB(card, id);
      card.appendSegment(SEGMENT_FACTORY.ButtonSegment(label));
      subAssembleFields(["Trip Start", "Capacity", "Cost to Join"],
        card.segments[2], 2);
    }
    // AB abstract assemblers
    var subAssembleFields = function(fields, dseg, offset) {
      if(offset == undefined) offset = 0;
      for(var i = 0; i < fields.length; i++) {
        dseg.addNewRow();
        dseg.rows[i + offset].updateField(fields[i]);
      }
    }
    // sub assemblers
    return {
    ABSBook: function(card, id) {
      ABSearch(card, id, "book");
    },
    ABSCancel: function(card, id) {
      ABSearch(card, id, "cancel");
    }
  };})()
};})();

function init() {
  var fromBox = makeSearchBox("pac-input-A");
  var toBox = makeSearchBox("pac-input-B");
  var list = LIST_FACTORY.List("list", "sl");
console.log("AHHHHAHSDASDAS");
  list.addCard(LIST_FACTORY.ASSEMBLER_LIBRARY.ABSBook);
}


/*
  // TEST CODE TO FORCE GENERATE SOME ENTITIES
  //-----------------------------------------------------
  // notice how real implementation is like only 3 lines
  for(var i = 0; i < 13; i++) {
    var ent = list.addEntity(makeAB);
    // force create entities
    ent.intf.updateDriverName("driver"+ i.toString(), "user"+ i.toString() + "@gmail.com");
    list.updateMarkers(i,
      "ChIJOdueMVIa2jERhE4TnhWtNpo",
      "ChIJSeUa7KcZ2jERNVg2CvmlVbk");
    // concrete fake entries of driver name and routes
  }
  list.objs[3].intf.updateDriverName("admin", "admin@gmail.com");
  list.objs[6].intf.updateDriverName("AHaliq", "haliq@nus.edu.sg");
  // for testing GET to user page
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
*/

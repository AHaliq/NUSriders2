/**
Manages a list dom that creates and destroys entities
@param  domID:String    id in html to the div to be a list
@param  id:String       unique id for the list so as not to clash with other lists
@param  maker:function  see entityMaker.js for example of maker functions
*/
function List(domID, id) {

  // PROPERTIES================================================================

  /** reference to dom object of list */
  this.listDOM = document.getElementById(domID);
  /** array of entity doms */
  this.objs = [];

  // METHODS ==================================================================
  /** Creates a new entity */
  this.addEntity = function(maker, disableMap){
    var curID = id + this.objs.length.toString();
    var entity = wrapEntity(new maker(curID));
    this.listDOM.appendChild(entity.obj);
    // create entity instance

    if(disableMap == undefined) {
    this.objs.push(entity);
    entity.map = makeMap(curID);
    entity.service = loadService(entity.map);
    cascadeToPoint(entity, entity.A);
    cascadeToPoint(entity, entity.B);
    // load and manage google map services
    }
    return entity;
  }
  /** Remove the last entity created */
  this.removeLastEntity = function(){
    var obj = this.objs.pop();
    obj.intf.removeButtonEvent();
    this.listDOM.removeChild(obj.obj);
    obj = null;
  }

  /** declare dom object into entity wrapper */
  function wrapEntity(entity) {
    return {
      loaded: false,
      intf: entity,
      obj: entity.card,
      map: undefined,
      A: point('A'),
      B: point('B'),
      markersLoaded: 0
    };
  }
  /** create point object */
  function point(lbl) {
    return {
      marker: undefined,
      label: lbl,
      map: undefined,
      service: undefined,
      id: undefined,
      name: undefined,
    };
  }
  /** pass google map object references to point object */
  function cascadeToPoint(entity, point) {
    point.map = entity.map;
    point.service = entity.service;
  }
  /** change entity at index the marker's placeID
  @param  index:int   index of entity
  @param  idA:String  google API placeID
  @param  idB:String  google API placeID */
  this.updateMarkers = function(index, idA, idB) {
    var obj = this.objs[index];
    if(obj.A.marker != undefined) obj.A.marker.setMap(null);
    if(obj.B.marker != undefined) obj.B.marker.setMap(null);
    obj.markersLoaded = 0;
    obj.A.id = idA;
    obj.B.id = idB;
    markerLoader.queuePt(obj.A, obj);
    markerLoader.queuePt(obj.B, obj);
  }
}

/*
1.35, 103.82, 10
'ChIJOdueMVIa2jERhE4TnhWtNpo', 'ChIJSeUa7KcZ2jERNVg2CvmlVbk'
https://developers.google.com/places/place-id
*/

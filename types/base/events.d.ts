export interface MapEvents {
  click: Function;
  dblclick: Function;
  rightclick: Function;
  rightdblclick: Function;
  maptypechange: Function;
  mousemove: Function;
  mouseover: Function;
  mouseout: Function;
  movestart: Function;
  moving: Function;
  moveend: Function;
  zoomstart: Function;
  zoomend: Function;
  addoverlay: Function;
  addcontrol: Function;
  removecontrol: Function;
  removeoverlay: Function;
  clearoverlays: Function;
  dragstart: Function;
  dragging: Function;
  dragend: Function;
  addtilelayer: Function;
  removetilelayer: Function;
  load: Function;
  resize: Function;
  hotspotclick: Function;
  hotspotover: Function;
  hotspotout: Function;
  tilesloaded: Function;
  touchstart: Function;
  touchmove: Function;
  touchend: Function;
  longpress: Function;
}

export interface GeolocationEvents {
  locationSuccess: Function;
  locationError: Function;
}

export interface OverviewMapEvents {
  viewchanged: Function;
  viewchanging: Function;
}

export interface LabelEvents {
  click: Function;
  dblclick: Function;
  mousedown: Function;
  mouseup: Function;
  mouseout: Function;
  mouseover: Function;
  remove: Function;
  rightclick: Function;
}

export interface InfoWindowEvents {
  close: Function;
  open: Function;
  maximize: Function;
  restore: Function;
  clickclose: Function;
}

export interface PolylineEvents {
  click: Function;
  dblclick: Function;
  mousedown: Function;
  mouseup: Function;
  mouseout: Function;
  mouseover: Function;
  remove: Function;
  lineupdate: Function;
}

export interface CircleEvents {
  click: Function;
  dblclick: Function;
  mousedown: Function;
  mouseup: Function;
  mouseout: Function;
  mouseover: Function;
  remove: Function;
  lineupdate: Function;
}

export interface PolygonEvents {
  click: Function;
  dblclick: Function;
  mousedown: Function;
  mouseup: Function;
  mouseout: Function;
  mouseover: Function;
  remove: Function;
  lineupdate: Function;
}

export interface PointCollectionEvents {
  click: Function;
  mouseover: Function;
  mouseout: Function;
}

export interface GroundEvents {
  click: Function;
  dbclick: Function;
}

export interface DrawingManagerEvents {
  circlecomplete: Function;
  markercomplete: Function;
  overlaycomplete: Function;
  polygoncomplete: Function;
  polylinecomplete: Function;
  rectanglecomplete: Function;
}

export interface DistanceToolEvents {
  onaddpoint: Function;
  ondrawend: Function;
}

export interface AutoCompleteEvents {
  onconfirm: Function;
  onhighlight: Function;
}

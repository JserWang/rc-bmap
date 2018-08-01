'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MAP = exports.MAP = ['click', 'dblclick', 'rightclick', 'rightdblclick', 'maptypechange', 'mousemove', 'mouseover', 'mouseout', 'movestart', 'moving', 'moveend', 'zoomstart', 'zoomend', 'addoverlay', 'addcontrol', 'removecontrol', 'removeoverlay', 'clearoverlays', 'dragstart', 'dragging', 'dragend', 'addtilelayer', 'removetilelayer', 'load', 'resize', 'hotspotclick', 'hotspotover', 'hotspotout', 'tilesloaded', 'touchstart', 'touchmove', 'touchend', 'longpress'];

var OVERVIEW_MAP = exports.OVERVIEW_MAP = ['viewchanged', 'viewchanging'];

var GEOLOCATION = exports.GEOLOCATION = ['locationSuccess', 'locationError'];

var MARKER = exports.MARKER = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'infowindowclose', 'infowindowopen', 'dragstart', 'dragging', 'dragend', 'rightclick'];

var LABEL = exports.LABEL = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'rightclick'];

var POLYLINE = exports.POLYLINE = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'lineupdate'];

var POLYGON = exports.POLYGON = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'lineupdate'];

var CIRCLE = exports.CIRCLE = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'lineupdate'];

var INFO_WINDOW = exports.INFO_WINDOW = ['close', 'open', 'maximize', 'restore', 'clickclose'];

var GROUND = exports.GROUND = ['click', 'dbclick'];

var POINT_COLLECTION = exports.POINT_COLLECTION = ['click', 'mouseover', 'mouseout'];

var CONTEXT_MENU = exports.CONTEXT_MENU = ['open', 'close'];
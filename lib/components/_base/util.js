'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPoint = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.replaceInitialToUpper = replaceInitialToUpper;
exports.getPoint = getPoint;
exports.getSize = getSize;
exports.getBounds = getBounds;
exports.getMapBounds = getMapBounds;
exports.bindEvents = bindEvents;
exports.unBindEvents = unBindEvents;
exports.createIcon = createIcon;
exports.createLabel = createLabel;
exports.createSymbol = createSymbol;
exports.createContextMenu = createContextMenu;
exports.createPolygon = createPolygon;
exports.processSetOptions = processSetOptions;
exports.processBooleanOptions = processBooleanOptions;
exports.isSupportContext = isSupportContext;
exports.isSupportCanvas = isSupportCanvas;
exports.appendCss = appendCss;
exports.getPoiByKeyword = getPoiByKeyword;
exports.convertPoint = convertPoint;

var _events = require('./events');

var EVENT = _interopRequireWildcard(_events);

var _options = require('./options');

var OPTIONS = _interopRequireWildcard(_options);

var _ContextMenuIcon = require('../../constants/ContextMenuIcon');

var _ContextMenuIcon2 = _interopRequireDefault(_ContextMenuIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var reg = /[a-z]/;

function replaceInitialToUpper(value) {
  return value.replace(reg, function (val) {
    return val.toUpperCase();
  });
}

function getPoint(lng, lat) {
  return new global.BMap.Point(lng, lat);
}

function getSize(width, height) {
  return new global.BMap.Size(width, height);
}

function getBounds(bounds) {
  var sw = bounds.sw,
      ne = bounds.ne;

  return new global.BMap.Bounds(getPoint(sw.lng, sw.lat), getPoint(ne.lng, ne.lat));
}

function getMapBounds() {
  return global.bMapInstance.getBounds();
}

var isPoint = exports.isPoint = function isPoint(obj) {
  return obj.lng && obj.lat;
};

function bindEvents(target, eventKey, events) {
  if (events && EVENT[eventKey]) {
    EVENT[eventKey].forEach(function (eventName) {
      if (events[eventName]) {
        var callback = function callback() {
          var _events$eventName;

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          (_events$eventName = events[eventName]).call.apply(_events$eventName, [null].concat(args));
        };
        target.events = target.events || {};
        if (target.events['' + eventName]) {
          target.removeEventListener(eventName, target.events['' + eventName]);
        }
        target.addEventListener(eventName, callback);
        target.events['' + eventName] = callback;
      }
    });
  }
}

function unBindEvents(target) {
  var events = target.events;
  if (events) {
    var eventNames = Object.keys(events);
    for (var i = 0; i < eventNames.length; i += 1) {
      var eventName = eventNames[i];
      var event = events[eventName];
      target.removeEventListener(eventName, event);
    }
  }
}

function createIcon() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      size = options.size,
      _options$opts = options.opts,
      opts = _options$opts === undefined ? {} : _options$opts;

  var iconSize = size && getSize(size.width, size.height);
  return new global.BMap.Icon(url, iconSize, {
    anchor: opts.anchor && global[anchor],
    imageSize: opts.imageSize && getSize(opts.imageSize.width, opts.imageSize.height),
    imageOffset: opts.imageOffset && getSize(opts.imageOffset.width, opts.imageOffset.height),
    infoWindowAnchor: opts.infoWindowAnchor && getSize(opts.infoWindowAnchor.width, opts.infoWindowAnchor.height),
    printImageUrl: opts.printImageUrl
  });
}

function createLabel() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var content = options.content,
      point = options.point,
      _options$offset = options.offset,
      offset = _options$offset === undefined ? {
    width: 0,
    height: 0
  } : _options$offset,
      _options$massClear = options.massClear,
      massClear = _options$massClear === undefined ? true : _options$massClear,
      title = options.title,
      events = options.events,
      zIndex = options.zIndex,
      style = options.style;


  var opts = {
    offset: offset && getSize(offset.width, offset.height),
    enableMassClear: massClear,
    position: point && getPoint(point.lng, point.lat)
  };
  var label = new global.BMap.Label(content, opts);
  bindEvents(label, 'LABEL', events);
  var setOpts = {
    title: title,
    zIndex: zIndex,
    style: style
  };
  processSetOptions(label, 'LABEL_SET_OPTIONS', setOpts);
  return label;
}

function createSymbol() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = options.path,
      _options$opts2 = options.opts,
      opts = _options$opts2 === undefined ? {} : _options$opts2;

  var sPath = global[path] || path;
  return new global.BMap.Symbol(sPath, _extends({}, opts));
}

function createContextMenu() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var events = arguments[1];

  var menu = new global.BMap.ContextMenu();
  items.forEach(function (item) {
    var iconUrl = item.iconUrl === _ContextMenuIcon2.default.ZOOMIN || item.iconUrl === _ContextMenuIcon2.default.ZOOMOUT ? global[item.iconUrl] : iconUrl;
    var itemOpts = {
      width: item.width,
      id: item.id,
      iconUrl: iconUrl
    };
    var menuItem = new global.BMap.MenuItem(item.text, item.callback, itemOpts);
    if (item.disabled) {
      menuItem.disable();
    }
    if (item.separator) {
      menu.addSeparator();
    }
    menu.addItem(menuItem);
  });

  bindEvents(menu, 'CONTEXT_MENU', events);
  return menu;
}

function createPolygon(props) {
  var points = props.points,
      strokeColor = props.strokeColor,
      fillColor = props.fillColor,
      strokeWeight = props.strokeWeight,
      strokeOpacity = props.strokeOpacity,
      fillOpacity = props.fillOpacity,
      strokeStyle = props.strokeStyle,
      _props$massClear = props.massClear,
      massClear = _props$massClear === undefined ? true : _props$massClear,
      _props$editing = props.editing,
      editing = _props$editing === undefined ? false : _props$editing,
      _props$clicking = props.clicking,
      clicking = _props$clicking === undefined ? true : _props$clicking,
      events = props.events;


  var opts = {
    strokeColor: strokeColor,
    fillColor: fillColor,
    strokeWeight: strokeWeight,
    strokeOpacity: strokeOpacity,
    fillOpacity: fillOpacity,
    strokeStyle: strokeStyle,
    enableClicking: clicking
  };

  var pList = [];

  if (points) {
    pList = points.map(function (item) {
      return getPoint(item.lng, item.lat);
    });
  }

  var instance = new global.BMap.Polygon(pList, opts);

  var booleanOpts = {
    massClear: massClear,
    editing: editing
  };
  processBooleanOptions(instance, 'POLY_BOOLEAN_OPTIONS', booleanOpts);
  bindEvents(instance, 'POLYGON', events);

  return instance;
}

function processSetOptions(target, optionKey, opts) {
  OPTIONS[optionKey].forEach(function (key) {
    if (opts[key] || typeof opts[key] === "boolean") {
      var upKey = replaceInitialToUpper(key);
      target['set' + upKey](opts[key]);
    }
  });
}

function processBooleanOptions(target, optionKey, opts) {
  OPTIONS[optionKey].forEach(function (key) {
    if (opts[key] || typeof opts[key] === "boolean") {
      var upKey = replaceInitialToUpper(key);
      var prefix = 'disable';
      if (opts[key]) {
        prefix = 'enable';
      }
      target['' + prefix + upKey]();
    }
  });
}

function isSupportContext() {
  return !!document.createElement('canvas').getContext;
}

function isSupportCanvas() {
  var elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
}

function appendCss() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var url = options.url;
  var id = options.id;
  var node = document.createElement("link");

  node.rel = "stylesheet";
  node.type = "text/css";
  node.href = url;
  if (typeof id !== "undefined") {
    node.id = id;
  }
  document.getElementsByTagName("head")[0].appendChild(node);
}

function getPoiByKeyword(keyword) {
  return new Promise(function (resolve) {
    var local = new global.BMap.LocalSearch(global.bMapInstance, {
      onSearchComplete: function onSearchComplete(result) {
        var res = null;
        if (result) {
          res = result.getPoi(0);
        }
        resolve(res);
      }
    });
    local.search(keyword);
  });
}

function convertPoint(points, from) {
  var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;

  return new Promise(function (resolve) {
    var convert = new global.BMap.Convertor();
    if (!Array.isArray(points)) {
      point = [points];
    }
    var pList = point.map(function (item) {
      return getPoint(item.lng, item.lat);
    });
    convert.translate(pList, from, to, function (result) {
      resolve(result);
    });
  });
}
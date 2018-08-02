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
exports.createIcon = createIcon;
exports.createLabel = createLabel;
exports.createSymbol = createSymbol;
exports.createContextMenu = createContextMenu;
exports.processSetOptions = processSetOptions;
exports.isSupportContext = isSupportContext;
exports.isSupportCanvas = isSupportCanvas;
exports.appendCss = appendCss;
exports.getPoiByKeyword = getPoiByKeyword;

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
        var callBack = function callBack() {
          var _events$eventName;

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          (_events$eventName = events[eventName]).call.apply(_events$eventName, [null].concat(args));
        };
        if (target['_' + eventName]) {
          target.removeEventListener(eventName, target['_' + eventName]);
        }
        target.addEventListener(eventName, callBack);
        target['_' + eventName] = callBack;
      }
    });
  }
}

function createIcon() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = options.url,
      size = options.size,
      _options$opts = options.opts,
      opts = _options$opts === undefined ? {} : _options$opts;

  return new global.BMap.Icon(url, size, {
    anchor: opts.anchor && getSize(opts.anchor.width, opts.anchor.height),
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

function processSetOptions(target, optionKey, opts) {
  OPTIONS[optionKey].forEach(function (key) {
    if (opts[key] || typeof opts[key] === "boolean") {
      var upKey = replaceInitialToUpper(key);
      target['set' + upKey](opts[key]);
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
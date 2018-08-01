'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _BaseOverlay2 = require('../Overlay/BaseOverlay');

var _BaseOverlay3 = _interopRequireDefault(_BaseOverlay2);

var _util = require('../_base/util');

var _ReactComponent = require('../ReactComponent');

var _ReactComponent2 = _interopRequireDefault(_ReactComponent);

var _bmaplib = require('bmaplib.markerclusterer');

var _bmaplib2 = _interopRequireDefault(_bmaplib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarkerClusterer = (0, _ReactComponent2.default)(_class = function (_BaseOverlay) {
  _inherits(MarkerClusterer, _BaseOverlay);

  function MarkerClusterer() {
    _classCallCheck(this, MarkerClusterer);

    return _possibleConstructorReturn(this, (MarkerClusterer.__proto__ || Object.getPrototypeOf(MarkerClusterer)).apply(this, arguments));
  }

  _createClass(MarkerClusterer, [{
    key: 'init',
    value: function init() {
      var _props = this.props,
          children = _props.children,
          gridSize = _props.gridSize,
          maxZoom = _props.maxZoom,
          minClusterSize = _props.minClusterSize,
          _props$styles = _props.styles,
          styles = _props$styles === undefined ? [] : _props$styles,
          _props$averageCenter = _props.averageCenter,
          averageCenter = _props$averageCenter === undefined ? false : _props$averageCenter;

      var childrenMakers = children && !Array.isArray(children) ? [children] : children;
      var markers = [];
      var Marker = global.BMap.Marker;
      childrenMakers.map(function (m) {
        var _m$props = m.props,
            point = _m$props.point,
            markerOpts = _objectWithoutProperties(_m$props, ['point']);

        markers.push(new Marker((0, _util.getPoint)(point.lng, point.lat), markerOpts));
      });

      var opts = {
        gridSize: gridSize && (0, _util.getSize)(gridSize.width, gridSize.height),
        maxZoom: maxZoom,
        minClusterSize: minClusterSize && (0, _util.getSize)(minClusterSize.width, minClusterSize.height),
        styles: styles.map(function (item) {
          item.size = (0, _util.getSize)(item.size.width, item.size.height);
          return item;
        }),
        isAverageCenter: averageCenter,
        markers: markers
      };

      this.instance = new _bmaplib2.default(this.map, opts);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.instance.clearMarkers();
      this.instance = null;
    }
  }]);

  return MarkerClusterer;
}(_BaseOverlay3.default)) || _class;

exports.default = MarkerClusterer;
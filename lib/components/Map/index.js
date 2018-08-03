'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _options = require('../_base/options');

var _util = require('../_base/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fillStyle = {
  width: '100%',
  height: '100%'
};

var Map = (_temp = _class = function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map(props) {
    _classCallCheck(this, Map);

    // React 16
    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

    _initialiseProps.call(_this);

    if (_react2.default.createRef) {
      _this.mapContainerRef = _react2.default.createRef();
    } else {
      _this.mapContainerRef = function (ref) {
        _this.mapContainer = ref;
      };
    }
    return _this;
  }

  _createClass(Map, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var ak = this.props.ak;

      if (ak) {
        this.getMapScript().then(this.init);
      } else if (global.BMap) {
        this.init(global.BMap);
      } else {
        console.warn('BMap is undefined');
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.map) {
        var props = this.processProps(nextProps);
        this.processMapOptions(props);
        (0, _util.bindEvents)(this.map, 'MAP', this.props.events);
      }
    }
  }, {
    key: 'processProps',
    value: function processProps(nextProps) {
      var props = nextProps;
      if (JSON.stringify(nextProps.center) === JSON.stringify(this.props.center)) {
        var center = nextProps.center,
            resetProps = _objectWithoutProperties(nextProps, ['center']);

        props = resetProps;
      }

      if (props.zoom === this.props.zoom) {
        delete props.zoom;
      }
      return props;
    }
  }, {
    key: 'render',
    value: function render() {
      var placeHolder = this.props.placeHolder;

      return _react2.default.createElement(
        'div',
        { style: fillStyle },
        _react2.default.createElement(
          'div',
          { ref: this.mapContainerRef, style: fillStyle },
          placeHolder
        ),
        this.renderChildren()
      );
    }
  }]);

  return Map;
}(_react2.default.Component), _class.defaultProps = {
  placeHolder: '地图加载中...',
  // 与官方文档保持一致
  dragging: true,
  scrollWheelZoom: false,
  doubleClickZoom: true,
  keyboard: false,
  inertialDragging: false,
  continuousZoom: true,
  pinchToZoom: true,
  autoResize: true,
  highResolution: true,
  mapClick: true,
  center: { lng: 116.404, lat: 39.915 },
  zoom: 15
}, _class.propTypes = {
  placeHolder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  children: _propTypes2.default.any,
  ak: _propTypes2.default.string,
  minZoom: _propTypes2.default.number,
  maxZoom: _propTypes2.default.number,
  defaultCursor: _propTypes2.default.string,
  draggingCursor: _propTypes2.default.string,
  mapStyle: _propTypes2.default.object,
  center: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  mapType: _propTypes2.default.string,
  zoom: _propTypes2.default.number,
  highResolution: _propTypes2.default.bool,
  autoResize: _propTypes2.default.bool,
  mapClick: _propTypes2.default.bool,
  mapMounted: _propTypes2.default.func,
  dragging: _propTypes2.default.bool,
  scrollWheelZoom: _propTypes2.default.bool,
  doubleClickZoom: _propTypes2.default.bool,
  keyboard: _propTypes2.default.bool,
  inertialDragging: _propTypes2.default.bool,
  continuousZoom: _propTypes2.default.bool,
  pinchToZoom: _propTypes2.default.bool,
  events: _propTypes2.default.object
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.init = function (BMap) {
    var _props = _this2.props,
        highResolution = _props.highResolution,
        autoResize = _props.autoResize,
        mapClick = _props.mapClick,
        mapMounted = _props.mapMounted,
        contextMenu = _props.contextMenu,
        resetProps = _objectWithoutProperties(_props, ['highResolution', 'autoResize', 'mapClick', 'mapMounted', 'contextMenu']);

    _this2.mapContainer = _this2.mapContainer || _this2.mapContainerRef.current;
    var map = _this2.map = new BMap.Map(_this2.mapContainer, {
      enableHighResolution: highResolution,
      enableAutoResize: autoResize,
      enableMapClick: mapClick
    });

    _this2.processContextMenu(contextMenu);

    global.bMapInstance = map;
    _this2.processMapOptions(resetProps);
    (0, _util.bindEvents)(map, 'MAP', _this2.props.events);

    // 地图配置完成后，强制刷新，渲染子组件
    _this2.forceUpdate(function () {
      if (mapMounted) {
        mapMounted(global.bMapInstance);
      }
    });
  };

  this.processContextMenu = function (contextMenu) {
    if (contextMenu) {
      var menu = (0, _util.createContextMenu)(contextMenu.items, contextMenu.events);
      _this2.map.addContextMenu(menu);
    }
  };

  this.processMapOptions = function (props) {
    var map = _this2.map;

    (0, _util.processSetOptions)(map, 'MAP_SET_OPTIONS', props);

    _options.MAP_BOOLEAN_OPTIONS.forEach(function (key) {
      var upKey = (0, _util.replaceInitialToUpper)(key);
      var prefix = 'disable';
      if (props[key]) {
        prefix = 'enable';
      }
      map['' + prefix + upKey]();
    });
    if (props.center) {
      var center = props.center;
      if ((0, _util.isPoint)(center)) {
        center = (0, _util.getPoint)(center.lng, center.lat);
        map.centerAndZoom(center, props.zoom);
      }
    }

    if (props.mapType) {
      map.setMapType(global[props.mapType]);
    }
  };

  this.getMapScript = function () {
    var ak = _this2.props.ak;

    global.BMap = global.BMap || {};
    if (Object.keys(global.BMap).length === 0) {
      global.BMap._preloader = new Promise(function (resolve, reject) {
        global._initBaiduMap = function initBaiduMap() {
          resolve(global.BMap);
          global.document.body.removeChild($script);
          global.BMap._preloader = null;
          global._initBaiduMap = null;
        };

        var $script = document.createElement('script');
        global.document.body.appendChild($script);
        $script.src = 'https://api.map.baidu.com/api?v=3.0&ak=' + ak + '&callback=_initBaiduMap';
      });

      return global.BMap._preloader;
    } else if (!global.BMap._preloader) {
      return Promise.resolve(global.BMap);
    }
    return global.BMap._preloader;
  };

  this.renderChildren = function () {
    var children = _this2.props.children;

    if (!_this2.map || !children) {
      return null;
    }
    return _react2.default.Children.map(children, function (child) {
      if (child) {
        return _react2.default.cloneElement(child);
      }
      return null;
    });
  };
}, _temp);
exports.default = Map;
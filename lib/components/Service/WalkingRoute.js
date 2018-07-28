'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _BaseService2 = require('./BaseService');

var _BaseService3 = _interopRequireDefault(_BaseService2);

var _ReactComponent = require('../ReactComponent');

var _ReactComponent2 = _interopRequireDefault(_ReactComponent);

var _util = require('../_base/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WalkingRoute = (0, _ReactComponent2.default)(_class = function (_BaseService) {
  _inherits(WalkingRoute, _BaseService);

  function WalkingRoute() {
    _classCallCheck(this, WalkingRoute);

    return _possibleConstructorReturn(this, (WalkingRoute.__proto__ || Object.getPrototypeOf(WalkingRoute)).apply(this, arguments));
  }

  _createClass(WalkingRoute, [{
    key: 'init',
    value: function init() {
      var _props = this.props,
          _props$location = _props.location,
          location = _props$location === undefined ? this.map : _props$location,
          onSearchComplete = _props.onSearchComplete,
          onMarkersSet = _props.onMarkersSet,
          onInfoHtmlSet = _props.onInfoHtmlSet,
          onPolylinesSet = _props.onPolylinesSet,
          _props$renderOptions = _props.renderOptions,
          renderOptions = _props$renderOptions === undefined ? {} : _props$renderOptions,
          _props$showInMap = _props.showInMap,
          showInMap = _props$showInMap === undefined ? false : _props$showInMap;


      var _location = location;
      if ((0, _util.isPoint)(location)) {
        _location = (0, _util.getPoint)(_location.lng, _location.lat);
      }

      this.instance = new global.BMap.WalkingRoute(_location, {
        onSearchComplete: onSearchComplete,
        onMarkersSet: onMarkersSet,
        onInfoHtmlSet: onInfoHtmlSet,
        onPolylinesSet: onPolylinesSet,
        renderOptions: {
          map: showInMap ? this.map : null,
          panel: renderOptions.panel,
          selectFirstResult: renderOptions.selectFirstResult,
          autoViewport: renderOptions.autoViewport
        }
      });
    }
  }]);

  return WalkingRoute;
}(_BaseService3.default)) || _class;

exports.default = WalkingRoute;
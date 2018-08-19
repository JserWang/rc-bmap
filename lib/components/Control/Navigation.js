'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _BaseControl2 = require('./BaseControl');

var _BaseControl3 = _interopRequireDefault(_BaseControl2);

var _util = require('../_base/util');

var _ControlAnchor = require('../../constants/ControlAnchor');

var _ControlAnchor2 = _interopRequireDefault(_ControlAnchor);

var _NavigationType = require('../../constants/NavigationType');

var _NavigationType2 = _interopRequireDefault(_NavigationType);

var _ReactComponent = require('../ReactComponent');

var _ReactComponent2 = _interopRequireDefault(_ReactComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = (0, _ReactComponent2.default)(_class = function (_BaseControl) {
  _inherits(Navigation, _BaseControl);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: 'init',
    value: function init() {
      var _props = this.props,
          _props$anchor = _props.anchor,
          anchor = _props$anchor === undefined ? _ControlAnchor2.default.TOP_LEFT : _props$anchor,
          _props$offset = _props.offset,
          offset = _props$offset === undefined ? {
        width: 10,
        height: 10
      } : _props$offset,
          _props$type = _props.type,
          type = _props$type === undefined ? _NavigationType2.default.LARGE : _props$type,
          _props$showZoomInfo = _props.showZoomInfo,
          showZoomInfo = _props$showZoomInfo === undefined ? true : _props$showZoomInfo,
          _props$geolocation = _props.geolocation,
          geolocation = _props$geolocation === undefined ? false : _props$geolocation;


      var opts = {
        anchor: global[anchor],
        offset: (0, _util.getSize)(offset.width, offset.height),
        type: global[type],
        showZoomInfo: showZoomInfo,
        enableGeolocation: geolocation
      };

      this.instance = new global.BMap.NavigationControl(opts);
      this.map.addControl(this.instance);
    }
  }]);

  return Navigation;
}(_BaseControl3.default)) || _class;

exports.default = Navigation;
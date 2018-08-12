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

var _MapTypeControlType = require('../../constants/MapTypeControlType');

var _MapTypeControlType2 = _interopRequireDefault(_MapTypeControlType);

var _MapType = require('../../constants/MapType');

var _MapType2 = _interopRequireDefault(_MapType);

var _ReactComponent = require('../ReactComponent');

var _ReactComponent2 = _interopRequireDefault(_ReactComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapType = (0, _ReactComponent2.default)(_class = function (_BaseControl) {
  _inherits(MapType, _BaseControl);

  function MapType() {
    _classCallCheck(this, MapType);

    return _possibleConstructorReturn(this, (MapType.__proto__ || Object.getPrototypeOf(MapType)).apply(this, arguments));
  }

  _createClass(MapType, [{
    key: 'init',
    value: function init() {
      var _props = this.props,
          _props$anchor = _props.anchor,
          anchor = _props$anchor === undefined ? _ControlAnchor2.default.TOP_RIGHT : _props$anchor,
          _props$offset = _props.offset,
          offset = _props$offset === undefined ? {
        width: 10,
        height: 10
      } : _props$offset,
          _props$type = _props.type,
          type = _props$type === undefined ? _MapTypeControlType2.default.HORIZONTAL : _props$type,
          _props$mapTypes = _props.mapTypes,
          mapTypes = _props$mapTypes === undefined ? [_MapType2.default.NORMAL, _MapType2.default.PERSPECTIVE, _MapType2.default.SATELLITE, _MapType2.default.HYBRID] : _props$mapTypes;


      var types = mapTypes.map(function (item) {
        return global[item];
      });

      var opts = {
        anchor: global[anchor],
        offset: (0, _util.getSize)(offset.width, offset.height),
        type: global[type],
        mapTypes: types
      };

      this.instance = new global.BMap.MapTypeControl(opts);
      this.map.addControl(this.instance);
    }
  }]);

  return MapType;
}(_BaseControl3.default)) || _class;

exports.default = MapType;
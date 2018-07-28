'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class;

var _util = require('../_base/util');

var _ReactComponent = require('../ReactComponent');

var _ReactComponent2 = _interopRequireDefault(_ReactComponent);

var _Marker2 = require('./Marker');

var _Marker3 = _interopRequireDefault(_Marker2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Symbol = (0, _ReactComponent2.default)(_class = function (_Marker) {
  _inherits(_Symbol, _Marker);

  function _Symbol(props) {
    _classCallCheck(this, _Symbol);

    var path = props.path,
        _props$anchor = props.anchor,
        anchor = _props$anchor === undefined ? {
      width: 0,
      height: 0
    } : _props$anchor,
        fillColor = props.fillColor,
        fillOpacity = props.fillOpacity,
        scale = props.scale,
        rotation = props.rotation,
        strokeColor = props.strokeColor,
        strokeOpacity = props.strokeOpacity,
        strokeWeight = props.strokeWeight,
        markerProps = _objectWithoutProperties(props, ['path', 'anchor', 'fillColor', 'fillOpacity', 'scale', 'rotation', 'strokeColor', 'strokeOpacity', 'strokeWeight']);

    markerProps.icon = (0, _util.createSymbol)({
      path: path,
      opts: {
        anchor: (0, _util.getSize)(anchor.width, anchor.height),
        fillColor: fillColor,
        fillOpacity: fillOpacity,
        scale: scale,
        rotation: rotation,
        strokeColor: strokeColor,
        strokeOpacity: strokeOpacity,
        strokeWeight: strokeWeight
      }
    });

    return _possibleConstructorReturn(this, (_Symbol.__proto__ || Object.getPrototypeOf(_Symbol)).call(this, markerProps));
  }

  return _Symbol;
}(_Marker3.default)) || _class;

exports.default = _Symbol;
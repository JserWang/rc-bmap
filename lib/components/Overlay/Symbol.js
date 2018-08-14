'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _BaseOverlay2 = require('./BaseOverlay');

var _BaseOverlay3 = _interopRequireDefault(_BaseOverlay2);

var _util = require('../_base/util');

var _ReactComponent = require('../ReactComponent');

var _ReactComponent2 = _interopRequireDefault(_ReactComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Symbol = (0, _ReactComponent2.default)(_class = function (_BaseOverlay) {
  _inherits(_Symbol, _BaseOverlay);

  function _Symbol() {
    _classCallCheck(this, _Symbol);

    return _possibleConstructorReturn(this, (_Symbol.__proto__ || Object.getPrototypeOf(_Symbol)).apply(this, arguments));
  }

  _createClass(_Symbol, [{
    key: 'init',
    value: function init() {
      var _props = this.props,
          path = _props.path,
          _props$anchor = _props.anchor,
          anchor = _props$anchor === undefined ? {
        width: 0,
        height: 0
      } : _props$anchor,
          fillColor = _props.fillColor,
          fillOpacity = _props.fillOpacity,
          scale = _props.scale,
          rotation = _props.rotation,
          strokeColor = _props.strokeColor,
          strokeOpacity = _props.strokeOpacity,
          strokeWeight = _props.strokeWeight,
          markerProps = _objectWithoutProperties(_props, ['path', 'anchor', 'fillColor', 'fillOpacity', 'scale', 'rotation', 'strokeColor', 'strokeOpacity', 'strokeWeight']);

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

      this.instance = (0, _util.createMarker)(markerProps);
      this.map.addOverlay(this.instance);

      if (markerProps.animation) {
        this.instance.setAnimation(global[markerProps.animation]);
      }
    }
  }]);

  return _Symbol;
}(_BaseOverlay3.default)) || _class;

exports.default = _Symbol;
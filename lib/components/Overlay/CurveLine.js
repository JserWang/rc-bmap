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

var _bmaplib = require('bmaplib.curveline');

var _bmaplib2 = _interopRequireDefault(_bmaplib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurveLine = (0, _ReactComponent2.default)(_class = function (_BaseOverlay) {
  _inherits(CurveLine, _BaseOverlay);

  function CurveLine() {
    _classCallCheck(this, CurveLine);

    return _possibleConstructorReturn(this, (CurveLine.__proto__ || Object.getPrototypeOf(CurveLine)).apply(this, arguments));
  }

  _createClass(CurveLine, [{
    key: 'init',
    value: function init() {
      var _props = this.props,
          points = _props.points,
          strokeColor = _props.strokeColor,
          strokeWeight = _props.strokeWeight,
          strokeOpacity = _props.strokeOpacity,
          strokeStyle = _props.strokeStyle,
          _props$massClear = _props.massClear,
          massClear = _props$massClear === undefined ? true : _props$massClear,
          _props$clicking = _props.clicking,
          clicking = _props$clicking === undefined ? true : _props$clicking,
          _props$editing = _props.editing,
          editing = _props$editing === undefined ? false : _props$editing,
          events = _props.events;


      var opts = {
        strokeColor: strokeColor,
        strokeWeight: strokeWeight,
        strokeOpacity: strokeOpacity,
        strokeStyle: strokeStyle,
        enableMassClear: massClear,
        enableClicking: clicking
      };

      var pList = [];

      if (points) {
        pList = points.map(function (item) {
          return (0, _util.getPoint)(item.lng, item.lat);
        });
      }

      this.instance = new _bmaplib2.default(pList, opts);

      if (editing) {
        this.instance.enableEditing();
      } else {
        this.instance.disableEditing();
      }

      (0, _util.bindEvents)(this.instance, 'POLYLINE', events);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.instance.disableEditing();
      this.map.removeOverlay(this.instance);
      this.instance = null;
    }
  }]);

  return CurveLine;
}(_BaseOverlay3.default)) || _class;

exports.default = CurveLine;
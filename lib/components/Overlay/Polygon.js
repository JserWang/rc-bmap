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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Polygon = (0, _ReactComponent2.default)(_class = function (_BaseOverlay) {
  _inherits(Polygon, _BaseOverlay);

  function Polygon() {
    _classCallCheck(this, Polygon);

    return _possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).apply(this, arguments));
  }

  _createClass(Polygon, [{
    key: 'init',
    value: function init() {
      var _props = this.props,
          _props$massClear = _props.massClear,
          massClear = _props$massClear === undefined ? true : _props$massClear,
          _props$editing = _props.editing,
          editing = _props$editing === undefined ? false : _props$editing;

      this.instance = (0, _util.createPolygon)(this.props);
      this.map.addOverlay(this.instance);
      (0, _util.processBooleanOptions)(this.instance, 'POLY_BOOLEAN_OPTIONS', {
        massClear: massClear,
        editing: editing
      });
    }
  }]);

  return Polygon;
}(_BaseOverlay3.default)) || _class;

exports.default = Polygon;
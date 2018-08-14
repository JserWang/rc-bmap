'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /* eslint-disable */

/* eslint-enable */


var _bmaplib = require('bmaplib.heatmap');

var _bmaplib2 = _interopRequireDefault(_bmaplib);

var _BaseOverlay2 = require('../Overlay/BaseOverlay');

var _BaseOverlay3 = _interopRequireDefault(_BaseOverlay2);

var _util = require('../_base/util');

var _ReactComponent = require('../ReactComponent');

var _ReactComponent2 = _interopRequireDefault(_ReactComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Heatmap = (0, _ReactComponent2.default)(_class = function (_BaseOverlay) {
  _inherits(Heatmap, _BaseOverlay);

  function Heatmap() {
    _classCallCheck(this, Heatmap);

    return _possibleConstructorReturn(this, (Heatmap.__proto__ || Object.getPrototypeOf(Heatmap)).apply(this, arguments));
  }

  _createClass(Heatmap, [{
    key: 'init',
    value: function init() {
      if (!(0, _util.isSupportCanvas)()) {
        this.instance = null;
        return;
      }

      var _props = this.props,
          points = _props.points,
          opacity = _props.opacity,
          max = _props.max,
          radius = _props.radius,
          gradient = _props.gradient;


      var opts = {
        opacity: opacity,
        radius: radius,
        gradient: gradient
      };

      this.instance = new _bmaplib2.default(opts);
      this.map.addOverlay(this.instance);

      if (points) {
        // 需要先addOverlay后再执行
        this.instance.setDataSet({
          data: points,
          max: max
        });
      }
    }
  }]);

  return Heatmap;
}(_BaseOverlay3.default)) || _class;

exports.default = Heatmap;
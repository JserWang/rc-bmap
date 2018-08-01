'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _BaseOverlay2 = require('./BaseOverlay');

var _BaseOverlay3 = _interopRequireDefault(_BaseOverlay2);

var _util = require('../_base/util');

var _MapPane = require('../../constants/MapPane');

var _MapPane2 = _interopRequireDefault(_MapPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BOverlay = function BOverlay() {};

var Overlay = function (_BaseOverlay) {
  _inherits(Overlay, _BaseOverlay);

  function Overlay() {
    _classCallCheck(this, Overlay);

    return _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).apply(this, arguments));
  }

  _createClass(Overlay, [{
    key: 'init',
    value: function init() {
      if (!BOverlay.prototype.initialize) {
        BOverlay.prototype = new global.BMap.Overlay();
        BOverlay.prototype.initialize = this.initialize.bind(this);
        BOverlay.prototype.draw = this.draw.bind(this);
      }
      this.instance = new BOverlay();
    }
  }, {
    key: 'initialize',
    value: function initialize() {
      var _props = this.props,
          _props$pane = _props.pane,
          pane = _props$pane === undefined ? _MapPane2.default.MARKER : _props$pane,
          zIndex = _props.zIndex;

      var container = this.container = document.createElement('div');
      if (zIndex) {
        container.style.zIndex = zIndex;
      }
      container.style.position = 'absolute';
      if (this.render) {
        (0, _reactDom.render)(this.render(), container);
      }
      this.map.getPanes()[pane].appendChild(container);
      return container;
    }
  }, {
    key: 'draw',
    value: function draw() {
      var _props2 = this.props,
          point = _props2.point,
          _props2$size = _props2.size,
          size = _props2$size === undefined ? {
        width: 0,
        height: 0
      } : _props2$size;

      var position = this.map.pointToOverlayPixel((0, _util.getPoint)(point.lng, point.lat));
      this.container.style.left = position.x - size.width / 2 + 'px';
      this.container.style.top = position.y - size.height / 2 + 'px';
    }
  }]);

  return Overlay;
}(_BaseOverlay3.default);

exports.default = Overlay;
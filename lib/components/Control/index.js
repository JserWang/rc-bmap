'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _util = require('../_base/util');

var _BaseControl2 = require('./BaseControl');

var _BaseControl3 = _interopRequireDefault(_BaseControl2);

var _ControlAnchor = require('../../constants/ControlAnchor');

var _ControlAnchor2 = _interopRequireDefault(_ControlAnchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseCtrl = function BaseCtrl(defaultAnchor, defaultOffset) {
  this.defaultAnchor = defaultAnchor;
  this.defaultOffset = defaultOffset;
};

var Control = function (_BaseControl) {
  _inherits(Control, _BaseControl);

  function Control() {
    _classCallCheck(this, Control);

    return _possibleConstructorReturn(this, (Control.__proto__ || Object.getPrototypeOf(Control)).apply(this, arguments));
  }

  _createClass(Control, [{
    key: 'init',
    value: function init() {
      var _props = this.props,
          _props$anchor = _props.anchor,
          anchor = _props$anchor === undefined ? _ControlAnchor2.default.TOP_LEFT : _props$anchor,
          _props$offset = _props.offset,
          offset = _props$offset === undefined ? {
        width: 0,
        height: 0
      } : _props$offset;


      if (!BaseCtrl.prototype.initialize) {
        BaseCtrl.prototype = new global.BMap.Control();
        BaseCtrl.prototype.initialize = this.initialize.bind(this);
      }

      this.instance = new BaseCtrl(global[anchor], (0, _util.getSize)(offset.width, offset.height));
      this.map.addControl(this.instance);
    }
  }, {
    key: 'initialize',
    value: function initialize() {
      // // 创建一个DOM元素
      var container = this.container = document.createElement('div');
      if (this.render) {
        (0, _reactDom.render)(this.render(), container);
      }
      // 添加DOM元素到地图中
      this.map.getContainer().appendChild(container);
      // 将DOM元素返回
      return container;
    }
  }]);

  return Control;
}(_BaseControl3.default);

exports.default = Control;
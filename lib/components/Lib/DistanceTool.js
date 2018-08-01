'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _BaseOverlay2 = require('../Overlay/BaseOverlay');

var _BaseOverlay3 = _interopRequireDefault(_BaseOverlay2);

var _util = require('../_base/util');

var _ReactComponent = require('../ReactComponent');

var _ReactComponent2 = _interopRequireDefault(_ReactComponent);

var _ControlAnchor = require('../../constants/ControlAnchor');

var _ControlAnchor2 = _interopRequireDefault(_ControlAnchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DistanceTool = (0, _ReactComponent2.default)(_class = function (_BaseOverlay) {
  _inherits(DistanceTool, _BaseOverlay);

  function DistanceTool() {
    _classCallCheck(this, DistanceTool);

    return _possibleConstructorReturn(this, (DistanceTool.__proto__ || Object.getPrototypeOf(DistanceTool)).apply(this, arguments));
  }

  _createClass(DistanceTool, [{
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
          _props$styleOptions = _props.styleOptions,
          styleOptions = _props$styleOptions === undefined ? {
        strokeColor: "red", //边线颜色。
        fillColor: "red", //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 3, //边线的宽度，以像素为单位。
        strokeOpacity: 0.8, //边线透明度，取值范围0 - 1。
        fillOpacity: 0.6, //填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid' //边线的样式，solid或dashed。
      } : _props$styleOptions;


      var BDistanceTool = require('../../libs/DistanceTool.js');
      this.instance = new BDistanceTool(this.map);
      this.instance.open();
    }
  }]);

  return DistanceTool;
}(_BaseOverlay3.default)) || _class;

exports.default = DistanceTool;
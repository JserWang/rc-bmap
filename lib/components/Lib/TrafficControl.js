'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _util = require('../_base/util');

var _ReactComponent = require('../ReactComponent');

var _ReactComponent2 = _interopRequireDefault(_ReactComponent);

var _ControlAnchor = require('../../constants/ControlAnchor');

var _ControlAnchor2 = _interopRequireDefault(_ControlAnchor);

var _BaseControl2 = require('../Control/BaseControl');

var _BaseControl3 = _interopRequireDefault(_BaseControl2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrafficControl = (0, _ReactComponent2.default)(_class = function (_BaseControl) {
  _inherits(TrafficControl, _BaseControl);

  function TrafficControl(props) {
    _classCallCheck(this, TrafficControl);

    var _this = _possibleConstructorReturn(this, (TrafficControl.__proto__ || Object.getPrototypeOf(TrafficControl)).call(this, props));

    (0, _util.appendCss)({
      url: 'http://api.map.baidu.com/library/TrafficControl/1.4/src/TrafficControl_min.css'
    });
    return _this;
  }

  _createClass(TrafficControl, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      var _props$anchor = this.props.anchor,
          anchor = _props$anchor === undefined ? _ControlAnchor2.default.BOTTOM_RIGHT : _props$anchor;


      var BTrafficControl = require('../../libs/TrafficControl.js');
      this.instance = new BTrafficControl({
        showPanel: false
      });
      setTimeout(function () {
        _this2.instance.setAnchor(global[anchor]);
      }, 0);
    }
  }]);

  return TrafficControl;
}(_BaseControl3.default)) || _class;

exports.default = TrafficControl;
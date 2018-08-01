'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseControl = function () {
  function BaseControl(props) {
    var _this = this;

    _classCallCheck(this, BaseControl);

    this.setState = function (param) {
      if (param !== null) {
        _this.state = Object.assign(_this.state, param);
      }
      if (_this.render) {
        (0, _reactDom.render)(_this.render(), _this.container);
      }
    };

    this.destroy = function () {
      _this.map.removeControl(_this.instance);
      _this.instance = null;
    };

    this.props = props;
    this.state = {};
    this.map = global.bMapInstance;

    this.init();
    this.map.addControl(this.instance);
  }

  _createClass(BaseControl, [{
    key: 'onPropsUpdate',
    value: function onPropsUpdate(newProps) {
      this.props = newProps;
      this.destroy();
      this.init();
      this.map.addControl(this.instance);
    }
  }]);

  return BaseControl;
}();

exports.default = BaseControl;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _util = require('../_base/util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseControl = function () {
  function BaseControl(props) {
    _classCallCheck(this, BaseControl);

    this.props = props;
    this.state = {};
    this.map = global.bMapInstance;

    this.init();
  }

  _createClass(BaseControl, [{
    key: 'onPropsUpdate',
    value: function onPropsUpdate(newProps) {
      this.props = newProps;
      (0, _util.unBindEvents)(this.instance);
      this.destroy();
      this.init();
    }
  }, {
    key: 'setState',
    value: function setState(param) {
      if (param !== null) {
        this.state = Object.assign(this.state, param);
      }
      if (this.render) {
        (0, _reactDom.render)(this.render(), this.container);
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.map.removeControl(this.instance);
      this.instance = null;
    }
  }]);

  return BaseControl;
}();

exports.default = BaseControl;
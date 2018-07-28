'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _util = require('../_base/util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseOverlay = function () {
  function BaseOverlay(props) {
    var _this = this;

    _classCallCheck(this, BaseOverlay);

    this.props = props;
    this.state = {};
    this.map = global.bMapInstance;

    this.init();
    setTimeout(function () {
      _this.addOverlay();
    }, 0);
  }

  _createClass(BaseOverlay, [{
    key: 'addOverlay',
    value: function addOverlay() {
      if (this.instance instanceof global.BMap.InfoWindow) {
        var point = this.props.point;

        this.map.openInfoWindow(this.instance, (0, _util.getPoint)(point.lng, point.lat));
      } else {
        this.map.addOverlay(this.instance);
      }
    }
  }, {
    key: 'removeOverlay',
    value: function removeOverlay() {
      if (this.instance instanceof global.BMap.InfoWindow) {
        this.map.closeInfoWindow();
      } else {
        this.map.removeOverlay(this.instance);
      }
    }
  }, {
    key: 'onPropsUpdate',
    value: function onPropsUpdate(newProps) {
      this.props = newProps;
      this.destroy();
      this.init();
      this.addOverlay();
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
      this.removeOverlay();
      this.instance = null;
    }
  }]);

  return BaseOverlay;
}();

exports.default = BaseOverlay;
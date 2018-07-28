"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseService = function () {
  function BaseService(props) {
    var _this = this;

    _classCallCheck(this, BaseService);

    this.destroy = function () {
      _this.instance = null;
    };

    this.props = props;
    this.map = global.bMapInstance;
    this.init();
  }

  _createClass(BaseService, [{
    key: "onPropsUpdate",
    value: function onPropsUpdate(newProps) {
      this.props = newProps;
      this.destroy();
      this.init();
    }
  }]);

  return BaseService;
}();

exports.default = BaseService;
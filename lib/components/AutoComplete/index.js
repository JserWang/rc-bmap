'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _ReactComponent = require('../ReactComponent');

var _ReactComponent2 = _interopRequireDefault(_ReactComponent);

var _util = require('../_base/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AutoComplete = (0, _ReactComponent2.default)(_class = function () {
  function AutoComplete(props) {
    var _this = this;

    _classCallCheck(this, AutoComplete);

    this.destroy = function () {
      _this.instance.dispose();
    };

    this.props = props;
    this.map = global.bMapInstance;
    this.init();
  }

  _createClass(AutoComplete, [{
    key: 'init',
    value: function init() {
      var _props = this.props,
          input = _props.input,
          events = _props.events,
          searchComplete = _props.searchComplete;

      // TODO: 处理当传入的不是input Id时，自动创建个Control

      if (typeof input !== "string") {}

      this.instance = new global.BMap.Autocomplete({
        input: input,
        location: this.map,
        onSearchComplete: searchComplete
      });

      (0, _util.bindEvents)(this.instance, 'AUTO_COMPLETE', events);
    }
  }, {
    key: 'onPropsUpdate',
    value: function onPropsUpdate(newProps) {
      this.props = newProps;
      this.destroy();
      this.init();
    }
  }]);

  return AutoComplete;
}()) || _class;

exports.default = AutoComplete;
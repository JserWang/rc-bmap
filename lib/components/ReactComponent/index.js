'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = ReactComponent;

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ReactComponent(Wrapped) {
  return function (_PureComponent) {
    _inherits(Proxy, _PureComponent);

    function Proxy(props) {
      _classCallCheck(this, Proxy);

      var _this = _possibleConstructorReturn(this, (Proxy.__proto__ || Object.getPrototypeOf(Proxy)).call(this, props));

      _this.getInstance = function () {
        if (_this.props.getInstance) {
          _this.props.getInstance(_this.wrapped.instance);
        }
      };

      _this.map = global.bMapInstance;
      _this.wrapped = new Wrapped(props);
      // 获得实例
      _this.getInstance();
      return _this;
    }

    _createClass(Proxy, [{
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        if (this.wrapped.onPropsUpdate) {
          this.wrapped.onPropsUpdate(this.props);
          this.getInstance();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.wrapped.destroy();
      }
    }, {
      key: 'render',
      value: function render() {
        return null;
      }
    }]);

    return Proxy;
  }(_react.PureComponent);
}
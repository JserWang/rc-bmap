'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _BaseOverlay2 = require('./BaseOverlay');

var _BaseOverlay3 = _interopRequireDefault(_BaseOverlay2);

var _util = require('../_base/util');

var _ReactComponent = require('../ReactComponent');

var _ReactComponent2 = _interopRequireDefault(_ReactComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoWindow = (0, _ReactComponent2.default)(_class = function (_BaseOverlay) {
  _inherits(InfoWindow, _BaseOverlay);

  function InfoWindow() {
    _classCallCheck(this, InfoWindow);

    return _possibleConstructorReturn(this, (InfoWindow.__proto__ || Object.getPrototypeOf(InfoWindow)).apply(this, arguments));
  }

  _createClass(InfoWindow, [{
    key: 'init',
    value: function init() {
      var _props = this.props,
          content = _props.content,
          height = _props.height,
          width = _props.width,
          maxWidth = _props.maxWidth,
          offset = _props.offset,
          title = _props.title,
          _props$autoPan = _props.autoPan,
          autoPan = _props$autoPan === undefined ? true : _props$autoPan,
          _props$closeOnClick = _props.closeOnClick,
          closeOnClick = _props$closeOnClick === undefined ? true : _props$closeOnClick,
          _props$displayMessage = _props.displayMessage,
          displayMessage = _props$displayMessage === undefined ? true : _props$displayMessage,
          message = _props.message,
          events = _props.events;


      var opts = {
        width: width,
        height: height,
        maxWidth: maxWidth,
        offset: offset && (0, _util.getSize)(offset.width, offset.height),
        title: title,
        enableAutoPan: autoPan,
        enableCloseOnClick: closeOnClick,
        enableMessage: displayMessage,
        message: message
      };

      this.instance = new global.BMap.InfoWindow(content, opts);

      (0, _util.bindEvents)(this.instance, 'INFO_WINDOW', events);
    }
  }]);

  return InfoWindow;
}(_BaseOverlay3.default)) || _class;

exports.default = InfoWindow;
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

var Marker = (0, _ReactComponent2.default)(_class = function (_BaseOverlay) {
  _inherits(Marker, _BaseOverlay);

  function Marker() {
    _classCallCheck(this, Marker);

    return _possibleConstructorReturn(this, (Marker.__proto__ || Object.getPrototypeOf(Marker)).apply(this, arguments));
  }

  _createClass(Marker, [{
    key: 'init',
    value: function init() {
      var _props = this.props,
          point = _props.point,
          _props$offset = _props.offset,
          offset = _props$offset === undefined ? {
        width: 0,
        height: 0
      } : _props$offset,
          icon = _props.icon,
          _props$massClear = _props.massClear,
          massClear = _props$massClear === undefined ? true : _props$massClear,
          _props$dragging = _props.dragging,
          dragging = _props$dragging === undefined ? false : _props$dragging,
          _props$clicking = _props.clicking,
          clicking = _props$clicking === undefined ? true : _props$clicking,
          _props$raiseOnDrag = _props.raiseOnDrag,
          raiseOnDrag = _props$raiseOnDrag === undefined ? false : _props$raiseOnDrag,
          draggingCursor = _props.draggingCursor,
          rotation = _props.rotation,
          shadow = _props.shadow,
          title = _props.title,
          events = _props.events,
          label = _props.label,
          zIndex = _props.zIndex,
          _props$top = _props.top,
          top = _props$top === undefined ? false : _props$top,
          animation = _props.animation;


      var oPoint = point && (0, _util.getPoint)(point.lng, point.lat);

      var markerOpts = {
        offset: offset && (0, _util.getSize)(offset.width, offset.height),
        enableMassClear: massClear,
        enableDragging: dragging,
        enableClicking: clicking,
        raiseOnDrag: raiseOnDrag,
        draggingCursor: draggingCursor,
        rotation: rotation,
        title: title
      };

      this.instance = new global.BMap.Marker(oPoint, markerOpts);
      this.map.addOverlay(this.instance);

      var setOpts = {
        label: label && (0, _util.createLabel)(label.props),
        shadow: shadow && (0, _util.createIcon)(shadow),
        zIndex: zIndex,
        top: top
      };

      if (icon && icon instanceof global.BMap.Symbol) {
        setOpts.icon = icon;
      } else if (icon) {
        setOpts.icon = (0, _util.createIcon)(icon);
      }

      (0, _util.bindEvents)(this.instance, 'MARKER', events);

      this.processContextMenu();
      (0, _util.processSetOptions)(this.instance, 'MARKER_SET_OPTIONS', setOpts);

      // animation 需要在addOverlay之后添加，所以这里将setAnimation放置下个队列
      if (animation) {
        this.instance.setAnimation(global[animation]);
      }
    }
  }, {
    key: 'processContextMenu',
    value: function processContextMenu() {
      var contextMenu = this.props.contextMenu;

      if (contextMenu) {
        var menu = (0, _util.createContextMenu)(contextMenu.items, contextMenu.events);
        this.instance.addContextMenu(menu);
      }
    }
  }]);

  return Marker;
}(_BaseOverlay3.default)) || _class;

exports.default = Marker;
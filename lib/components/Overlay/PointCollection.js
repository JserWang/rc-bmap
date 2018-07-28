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

var PointCollection = (0, _ReactComponent2.default)(_class = function (_BaseOverlay) {
  _inherits(PointCollection, _BaseOverlay);

  function PointCollection() {
    _classCallCheck(this, PointCollection);

    return _possibleConstructorReturn(this, (PointCollection.__proto__ || Object.getPrototypeOf(PointCollection)).apply(this, arguments));
  }

  _createClass(PointCollection, [{
    key: 'init',
    value: function init() {
      this.instance = null;

      // 判断浏览器支持海量点
      if ((0, _util.isSupportContext)()) {
        var _props = this.props,
            points = _props.points,
            shape = _props.shape,
            color = _props.color,
            size = _props.size,
            events = _props.events;


        var opts = {
          shape: shape && top[shape],
          color: color,
          size: size && top[size]
        };

        var pList = points.map(function (item) {
          return (0, _util.getPoint)(item.lng, item.lat);
        });
        this.instance = new global.BMap.PointCollection(pList, opts);
        (0, _util.bindEvents)(this.instance, 'POINT_COLLECTION', events);
      }
    }
  }]);

  return PointCollection;
}(_BaseOverlay3.default)) || _class;

exports.default = PointCollection;
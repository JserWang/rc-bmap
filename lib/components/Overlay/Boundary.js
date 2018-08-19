'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _util = require('../_base/util');

var _ReactComponent = require('../ReactComponent');

var _ReactComponent2 = _interopRequireDefault(_ReactComponent);

var _BaseOverlay2 = require('./BaseOverlay');

var _BaseOverlay3 = _interopRequireDefault(_BaseOverlay2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boundary = (0, _ReactComponent2.default)(_class = function (_BaseOverlay) {
  _inherits(Boundary, _BaseOverlay);

  function Boundary() {
    _classCallCheck(this, Boundary);

    return _possibleConstructorReturn(this, (Boundary.__proto__ || Object.getPrototypeOf(Boundary)).apply(this, arguments));
  }

  _createClass(Boundary, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      var _props = this.props,
          name = _props.name,
          onError = _props.onError,
          autoViewport = _props.autoViewport,
          _props$massClear = _props.massClear,
          massClear = _props$massClear === undefined ? true : _props$massClear,
          _props$editing = _props.editing,
          editing = _props$editing === undefined ? false : _props$editing,
          polygonOpts = _objectWithoutProperties(_props, ['name', 'onError', 'autoViewport', 'massClear', 'editing']);

      this.getBoundary().then(function (points) {
        polygonOpts.points = points;
        _this2.instance = (0, _util.createPolygon)(polygonOpts);
        _this2.map.addOverlay(_this2.instance);
        (0, _util.processBooleanOptions)(_this2.instance, 'POLY_BOOLEAN_OPTIONS', {
          massClear: massClear,
          editing: editing
        });
        if (autoViewport) {
          points = points.map(function (item) {
            return (0, _util.getPoint)(item.lng, item.lat);
          });
          _this2.map.setViewport(points);
        }
      }).catch(function (msg) {
        if (onError) {
          onError(msg);
        }
      });
    }
  }, {
    key: 'getBoundary',
    value: function getBoundary() {
      var name = this.props.name;

      return new Promise(function (resolve, reject) {
        var boundary = new global.BMap.Boundary();

        boundary.get(name, function (res) {
          var count = res.boundaries.length;
          if (count === 0) {
            reject();
          }
          var points = res.boundaries[0].split(';').map(function (item) {
            var pointArr = item.split(',');
            return {
              lng: pointArr[0],
              lat: pointArr[1]
            };
          });
          resolve(points);
        });
      });
    }
  }]);

  return Boundary;
}(_BaseOverlay3.default)) || _class;

exports.default = Boundary;
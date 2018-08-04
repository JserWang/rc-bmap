'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _Polygon2 = require('./Polygon');

var _Polygon3 = _interopRequireDefault(_Polygon2);

var _util = require('../_base/util');

var _ReactComponent = require('../ReactComponent');

var _ReactComponent2 = _interopRequireDefault(_ReactComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boundary = (0, _ReactComponent2.default)(_class = function (_Polygon) {
  _inherits(Boundary, _Polygon);

  function Boundary(props) {
    _classCallCheck(this, Boundary);

    var name = props.name,
        onError = props.onError,
        autoViewport = props.autoViewport,
        polygonProps = _objectWithoutProperties(props, ['name', 'onError', 'autoViewport']);

    var _this = _possibleConstructorReturn(this, (Boundary.__proto__ || Object.getPrototypeOf(Boundary)).call(this, polygonProps));

    _this.getBoundary(name).then(function (points) {
      polygonProps.points = points;
      _this.wrapped.onPropsUpdate(polygonProps);
      if (autoViewport) {
        points = points.map(function (item) {
          return (0, _util.getPoint)(item.lng, item.lat);
        });
        _this.map.setViewport(points);
      }
    }).catch(function (msg) {
      if (onBoundaryError) {
        onBoundaryError(msg);
      }
    });
    return _this;
  }

  _createClass(Boundary, [{
    key: 'getBoundary',
    value: function getBoundary(name) {
      return new Promise(function (resolve, reject) {
        var boundary = new global.BMap.Boundary();

        boundary.get(name, function (res) {
          var count = res.boundaries.length;
          if (count === 0) {
            reject('未能获取当前输入行政区域');
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
}(_Polygon3.default)) || _class;

exports.default = Boundary;
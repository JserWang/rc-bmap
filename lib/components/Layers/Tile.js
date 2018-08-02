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

var Tile = (0, _ReactComponent2.default)(_class = function () {
  function Tile(props) {
    var _this = this;

    _classCallCheck(this, Tile);

    this.destroy = function () {
      _this.map.removeTileLayer(_this.instance);
      _this.instance = null;
    };

    this.props = props;
    this.map = global.bMapInstance;
    this.init();
  }

  _createClass(Tile, [{
    key: 'init',
    value: function init() {
      var _props = this.props,
          transparentPng = _props.transparentPng,
          tileUrlTemplate = _props.tileUrlTemplate,
          _props$copyright = _props.copyright,
          copyright = _props$copyright === undefined ? {} : _props$copyright,
          zIndex = _props.zIndex,
          getTilesUrl = _props.getTilesUrl;


      this.instance = new global.BMap.TileLayer({
        transparentPng: transparentPng,
        tileUrlTemplate: tileUrlTemplate,
        copyright: {
          id: copyright.id,
          content: copyright.content,
          bounds: copyright.bounds ? (0, _util.getBounds)(copyright.bounds) : this.map.getBounds()
        },
        zIndex: zIndex
      });

      if (getTilesUrl) {
        this.instance.getTilesUrl = getTilesUrl;
      }

      this.map.addTileLayer(this.instance);
    }
  }, {
    key: 'onPropsUpdate',
    value: function onPropsUpdate(newProps) {
      this.props = newProps;
      this.destroy();
      this.init();
    }
  }]);

  return Tile;
}()) || _class;

exports.default = Tile;
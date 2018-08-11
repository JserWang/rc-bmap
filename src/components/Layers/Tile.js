import ReactComponent from '../ReactComponent';
import { getBounds, getSize } from '../_base/util';
import ControlAnchor from '../../constants/ControlAnchor';

@ReactComponent
class Tile {
  constructor(props) {
    this.props = props;
    this.map = global.bMapInstance;
    this.init();
  }

  init() {
    const {
      transparentPng,
      tileUrlTemplate,
      copyright = {
        anchor: global[ControlAnchor.BOTTOM_RIGHT],
        offset: { width: 10, height: 10 },
      },
      zIndex,
      getTilesUrl,
    } = this.props;

    if (Object.keys(copyright).length > 0) {
      const opts = {
        anchor: copyright.anchor,
        offset: getSize(copyright.offset),
      };
      this.copyRight = new global.BMap.CopyrightControl(opts);
      this.copyRight.addCopyright({
        id: 2,
        content: copyright.content,
        bounds: copyright.bounds ? getBounds(copyright.bounds) : this.map.getBounds(),
      });
      this.map.addControl(this.copyRight);
    }

    this.instance = new global.BMap.TileLayer({
      transparentPng,
      tileUrlTemplate,
      zIndex,
    });

    if (getTilesUrl) {
      this.instance.getTilesUrl = getTilesUrl;
    }

    this.map.addTileLayer(this.instance);
  }

  onPropsUpdate(newProps) {
    this.props = newProps;
    this.destroy();
    this.init();
  }

  destroy = () => {
    this.map.removeTileLayer(this.instance);
    this.instance = null;
    if (this.copyRight) {
      this.map.removeControl(this.copyRight);
    }
  }
}

export default Tile;

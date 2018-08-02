import ReactComponent from '../ReactComponent';
import { getBounds } from '../_base/util';

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
      copyright = {},
      zIndex,
      getTilesUrl,
    } = this.props;

    this.instance = new global.BMap.TileLayer({
      transparentPng,
      tileUrlTemplate,
      copyright: {
        id: copyright.id,
        content: copyright.content,
        bounds: copyright.bounds ? getBounds(copyright.bounds) : this.map.getBounds(),
      },
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
  }
}

export default Tile;

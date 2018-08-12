import BaseOverlay from '../Overlay/BaseOverlay';
import { getSize, getPoint } from '../_base/util';
import ReactComponent from '../ReactComponent';
import { default as BMarkerClusterer } from 'bmaplib.markerclusterer'

@ReactComponent
class MarkerClusterer extends BaseOverlay {

  init() {
    const {
      children,
      gridSize,
      maxZoom,
      minClusterSize,
      styles = [],
      averageCenter = false,
    } = this.props;
    const childrenMakers = children && !Array.isArray(children) ? [children] : children;
    const markers = [];
    const Marker = global.BMap.Marker;
    childrenMakers.map((m) => {
      const { point, ...markerOpts } = m.props;
      markers.push(new Marker(getPoint(point.lng, point.lat), markerOpts));
    });

    const opts = {
      gridSize,
      maxZoom,
      minClusterSize,
      styles: styles.map(item => {
        item.size = getSize(item.size.width, item.size.height);
        return item;
      }),
      isAverageCenter: averageCenter,
      markers,
    };
    
    this.instance = new BMarkerClusterer(this.map, opts);
  }

  destroy() {
    this.instance.clearMarkers();
    this.instance = null;
  }
}

export default MarkerClusterer;

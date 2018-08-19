/* eslint-disable */
import { default as BMarkerClusterer } from 'bmaplib.markerclusterer';
/* eslint-enable */
import BaseOverlay from '../Overlay/BaseOverlay';
import { getSize, createMarker } from '../_base/util';
import ReactComponent from '../ReactComponent';

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
    childrenMakers.forEach((m) => {
      markers.push(createMarker(m.props));
    });

    const opts = {
      gridSize,
      maxZoom,
      minClusterSize,
      styles: styles.map((item) => {
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

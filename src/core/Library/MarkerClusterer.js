import Util from '../utils';

const getMarkerClustererOptions = config => ({
  markers: config.markers,
  gridSize: config.grid,
  maxZoom: config.maxZoom,
  minClusterSize: config.minClusterSize,
  styles: config.styles,
  isAverageCenter: config.isAverageCenter,
});

class MarkerClusterer {
  constructor(config, map) {
    this.map = map;
    this.init(config);
  }

  init(config = {}) {
    const options = getMarkerClustererOptions(config);

    const markers = options.markers && options.markers.map(marker => {
      const point = Util.convert2BPoint(marker.point);
      return Util.convert2BMarker({
        ...marker,
        point
      });
    });

    const styles = options.styles && options.styles.map(item => {
      return {
        url: item.url,
        size: item.size && Util.convert2BSize({...item.size}),
        anchor: item.anchor && Util.convert2BSize({...item.anchor}),
        offset: item.offset && Util.convert2BSize({...item.offset}),
        textSize: item.textSize,
        textColor: item.textColor,
      }
    });

    this.instance = new global.BMapLib.MarkerClusterer(this.map, {...options, markers, styles});
    this.processEvents(config.events);
  }

  processEvents = (events) => {
    Util.unbindEvents(this.instance);
    Util.bindEvents(this.instance, events);
  }

  destroy = () => {
  }
}

export default MarkerClusterer;

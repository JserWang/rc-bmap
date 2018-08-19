import BaseOverlay from './BaseOverlay';
import { createSymbol, getSize, createMarker } from '../_base/util';
import ReactComponent from '../ReactComponent';

@ReactComponent
class Symbol extends BaseOverlay {
  init() {
    const {
      path,
      anchor = {
        width: 0,
        height: 0,
      },
      fillColor,
      fillOpacity,
      scale,
      rotation,
      strokeColor,
      strokeOpacity,
      strokeWeight,
      ...markerProps
    } = this.props;

    markerProps.icon = createSymbol({
      path,
      opts: {
        anchor: getSize(anchor.width, anchor.height),
        fillColor,
        fillOpacity,
        scale,
        rotation,
        strokeColor,
        strokeOpacity,
        strokeWeight,
      },
    });

    this.instance = createMarker(markerProps);
    this.map.addOverlay(this.instance);

    if (markerProps.animation) {
      this.instance.setAnimation(global[markerProps.animation]);
    }
  }
}

export default Symbol;

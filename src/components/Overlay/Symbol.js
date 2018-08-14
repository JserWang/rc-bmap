import { createSymbol, getSize } from '../_base/util';
import ReactComponent from '../ReactComponent';
import Marker from './Marker';

@ReactComponent
class Symbol extends Marker {
  constructor(props) {
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
    } = props;

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

    super(markerProps);
  }
}

export default Symbol;

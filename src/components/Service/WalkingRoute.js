import BaseService from './BaseService';
import ReactComponent from '../ReactComponent';
import { isPoint, getPoint } from '../_base/util';

@ReactComponent
class WalkingRoute extends BaseService {
  init() {
    const {
      location = this.map,
      onSearchComplete,
      onMarkersSet,
      onInfoHtmlSet,
      onPolylinesSet,
      renderOptions = {},
      showInMap = false,
    } = this.props;

    let _location = location;
    if (isPoint(location)) {
      _location = getPoint(_location.lng, _location.lat);
    }

    this.instance = new global.BMap.WalkingRoute(_location, {
      onSearchComplete,
      onMarkersSet,
      onInfoHtmlSet,
      onPolylinesSet,
      renderOptions: {
        map: showInMap ? this.map : null,
        panel: renderOptions.panel,
        selectFirstResult: renderOptions.selectFirstResult,
        autoViewport: renderOptions.autoViewport,
      },
    });
  }
}

export default WalkingRoute;

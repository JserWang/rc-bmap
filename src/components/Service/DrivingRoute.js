import BaseService from './BaseService';
import ReactComponent from '../ReactComponent';
import { isPoint, getPoint } from '../_base/util';

@ReactComponent
class DrivingRoute extends BaseService {
  init() {
    const {
      location = this.map,
      policy,
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

    this.instance = new global.BMap.DrivingRoute(_location, {
      policy: policy && global[policy],
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

export default DrivingRoute;

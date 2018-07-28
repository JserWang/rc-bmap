import BaseService from './BaseService';
import ReactComponent from '../ReactComponent';
import { isPoint, getPoint } from '../_base/util';

@ReactComponent
class TransitRoute extends BaseService {
  init() {
    const {
      location = this.map,
      policy,
      intercityPolicy,
      transitTypePolicy,
      pageCapacity,
      onSearchComplete,
      onMarkersSet,
      onInfoHtmlSet,
      onPolylinesSet,
      onResultsHtmlSet,
      renderOptions = {},
      showInMap = false,
    } = this.props;

    let _location = location;
    if (isPoint(location)) {
      _location = getPoint(_location.lng, _location.lat);
    }

    this.instance = new global.BMap.TransitRoute(_location, {
      policy: policy && global[policy],
      intercityPolicy: intercityPolicy && global[intercityPolicy],
      transitTypePolicy: transitTypePolicy && global[transitTypePolicy],
      pageCapacity,
      onSearchComplete,
      onMarkersSet,
      onInfoHtmlSet,
      onPolylinesSet,
      onResultsHtmlSet,
      renderOptions: {
        map: showInMap ? this.map : null,
        panel: renderOptions.panel,
        selectFirstResult: renderOptions.selectFirstResult,
        autoViewport: renderOptions.autoViewport,
      },
    });
  }
}

export default TransitRoute;

import BaseService from './BaseService';
import ReactComponent from '../ReactComponent';
import { isPoint, getPoint } from '../_base/util';

@ReactComponent
class BusLineSearch extends BaseService {
  init() {
    const {
      location = this.map,
      onGetBusListComplete,
      onGetBusLineComplete,
      onBusListHtmlSet,
      onBusLineHtmlSet,
      onPolylinesSet,
      onMarkersSet,
      renderOptions = {},
      showInMap = false,
    } = this.props;

    let _location = location;
    if (isPoint(location)) {
      _location = getPoint(_location.lng, _location.lat);
    }

    this.instance = new global.BMap.BusLineSearch(_location, {
      onGetBusListComplete,
      onGetBusLineComplete,
      onBusListHtmlSet,
      onBusLineHtmlSet,
      onPolylinesSet,
      onMarkersSet,
      renderOptions: {
        map: showInMap ? this.map : null,
        panel: renderOptions.panel,
        selectFirstResult: renderOptions.selectFirstResult,
        autoViewport: renderOptions.autoViewport,
      },
    });
  }
}

export default BusLineSearch;

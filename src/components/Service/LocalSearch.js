import BaseService from './BaseService';
import ReactComponent from '../ReactComponent';
import { isPoint, getPoint } from '../_base/util';

@ReactComponent
class LocalSearch extends BaseService {
  init() {
    const {
      location = this.map,
      onMarkersSet,
      onInfoHtmlSet,
      onResultsHtmlSet,
      pageCapacity,
      onSearchComplete,
      renderOptions = {},
      showInMap = false,
    } = this.props;

    let _location = location;
    if (isPoint(location)) {
      _location = getPoint(_location.lng, _location.lat);
    }

    this.instance = new global.BMap.LocalSearch(_location, {
      onMarkersSet,
      onInfoHtmlSet,
      onInfoHtmlSet,
      onResultsHtmlSet,
      pageCapacity,
      onSearchComplete,
      renderOptions: {
        map: showInMap ? this.map : null,
        panel: renderOptions.panel,
        selectFirstResult: renderOptions.selectFirstResult,
        autoViewport: renderOptions.autoViewport,
      },
    });
  }
}

export default LocalSearch;

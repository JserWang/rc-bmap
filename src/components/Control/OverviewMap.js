import BaseControl from './BaseControl';
import { OverviewMap as BOverviewMap } from '../../core';

class OverviewMap extends BaseControl {
  init = () => {
    const overviewMap = new BOverviewMap(this.config, this.mapInstance);
    this.instance = overviewMap.instance;
  }
}

export default OverviewMap;

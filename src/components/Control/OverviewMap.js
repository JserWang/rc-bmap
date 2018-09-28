import BaseControl from './BaseControl';
import { OverviewMap as BOverviewMap } from '../../core';

class OverviewMap extends BaseControl {
  getRealControl = () => new BOverviewMap(this.config, this.mapInstance)
}

export default OverviewMap;

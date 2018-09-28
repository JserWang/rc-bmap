import PropTypes from 'prop-types';
import { Copyright as BCopyright } from '../../core';
import BaseControl from './BaseControl';

class Copyright extends BaseControl {
  static displayName = 'CopyrightControl'

  static childContextTypes = {
    getId: PropTypes.func,
    centralizedUpdates: PropTypes.func,
    updateCopyright: PropTypes.func,
  }

  id = -1

  copyrights = []

  config = {}

  getChildContext() {
    return {
      centralizedUpdates: this.centralizedUpdates,
      getId: this.getId,
      updateCopyright: this.updateCopyright,
    };
  }

  centralizedUpdates = (unit) => {
    if (unit.displayName === 'Offset') {
      this.config.offset = unit.props;
    } else if (unit.displayName === 'Copyright') {
      this.copyrights.push(unit.instance);
    }
  }

  getId = () => {
    this.id += 1;
    return this.id;
  }

  updateCopyright = (id, config) => {
    this.copyrights.splice(id, 1, config);
  }

  init = () => {
    const { copyrights } = this;
    const copyright = new BCopyright(this.config, copyrights, this.mapInstance);
    this.instance = copyright.instance;
  }
}

export default Copyright;

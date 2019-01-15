import React from 'react';
import PropTypes from 'prop-types';
import { Copyright as BCopyright } from '../../core';
import BaseControl from './BaseControl';

import Copyright from '../Copyright';

class CopyrightControl extends BaseControl {
  static Copyright = Copyright;

  static childContextTypes = {
    addCopyright: PropTypes.func,
    updateCopyright: PropTypes.func,
    removeCopyright: PropTypes.func,
  }

  config = {
    copyrights: [],
  }

  getChildContext() {
    return {
      addCopyright: this.addCopyright,
      updateCopyright: this.updateCopyright,
      removeCopyright: this.removeCopyright,
    };
  }

  addCopyright = (index, item) => {
    if (this.config.copyrights[index]) {
      this.config.copyrights.splice(index, 0, item);
    } else {
      this.config.copyrights[index] = item;
    }
  }

  updateCopyright = (index, item) => {
    this.config.copyrights.splice(index, 1, item);
  }

  removeCopyright = (index) => {
    this.config.copyrights.splice(index, 1);
  }

  getRealControl = () => new BCopyright(this.config, this.mapInstance)

  render() {
    const { children } = this.props;
    return React.Children.map(children, (child, index) => {
      if (child) {
        return React.cloneElement(child, {
          index,
        });
      }
      return null;
    });
  }
}

export default CopyrightControl;

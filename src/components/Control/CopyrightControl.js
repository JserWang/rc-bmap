import React from 'react';
import PropTypes from 'prop-types';
import { Copyright as BCopyright } from '../../core';
import BaseControl from './BaseControl';

import Copyright from '../Copyright';

class CopyrightControl extends BaseControl {
  static Copyright = Copyright;

  static childContextTypes = {
    centralizedUpdates: PropTypes.func,
    addCopyright: PropTypes.func,
    updateCopyright: PropTypes.func,
    removeCopyright: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.config.copyrights = [];
  }

  getChildContext() {
    return {
      ...super.getChildContext(),
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
    this.config.copyrights.splice(index, 1, undefined);
  }

  getRealControl = () => {
    console.log(this.config)
    this.config.copyrights = this.config.copyrights.filter(item => item);
    return new BCopyright(this.config, this.mapInstance)
  }

  renderChildren = () => React.Children.map(this.props.children, (child, index) => {
    if (child) {
      return React.cloneElement(child, {
        index,
      });
    }
    return null;
  })

  render() {
    return (
      <div>
        {this.renderChildren()}
      </div>
    );
  }
}

export default CopyrightControl;

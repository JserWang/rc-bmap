import React from 'react';
import { CityList as BCityList } from '../../core';
import BaseControl from './BaseControl';

class CityList extends BaseControl {
  getRealControl = () => new BCityList(this.config, this.mapInstance)

  render() {
    const { children } = this.props;
    if (children) {
      return <div>{children}</div>;
    }
    return null;
  }
}

export default CityList;

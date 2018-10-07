import React, { PureComponent } from 'react';

export default class PlaceHolder extends PureComponent {
  static displayName= 'PlaceHolder'

  render() {
    const { children } = this.props;
    return (
      <div>
        { children || '地图加载中...' }
      </div>
    );
  }
}

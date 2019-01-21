import React, { PureComponent } from 'react';

const style = {
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default class PlaceHolder extends PureComponent {
  static displayName= 'PlaceHolder'

  render() {
    const { children } = this.props;
    return children || <div style={style}>地图加载中...</div>;
  }
}

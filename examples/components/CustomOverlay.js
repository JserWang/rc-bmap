import React from 'react';
import { ReactComponent, Overlay } from '../../src';

const container = {
  width: 100,
  height: 20,
};

@ReactComponent
class CustomOverlay extends Overlay {
  render() {
    return (
      <div style={container}>自定义覆盖物</div>
    )
  }
}

export default CustomOverlay;

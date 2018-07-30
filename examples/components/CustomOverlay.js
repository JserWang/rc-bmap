import React from 'react';
import { ReactComponent, Overlay } from '../../src';

@ReactComponent
class CustomOverlay extends Overlay {
  render = () => (
    <div>这是一个自定义覆盖物</div>
  )
}

export default CustomOverlay;

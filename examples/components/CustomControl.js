import React from 'react';
import { ReactComponent, Control } from '../../src';

@ReactComponent
class CustomControl extends Control {
  render = () => (
    <div>这是一个自定义组件</div>
  )
}

export default CustomControl;

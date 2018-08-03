import React from 'react';
import { ReactComponent, Control } from '../../src';

@ReactComponent
class CustomControl extends Control {
  render() {
    return (
      <div>这是一个自定义控件</div>
    )
  }
}

export default CustomControl;

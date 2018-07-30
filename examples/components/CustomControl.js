import React from 'react';
import { ReactComponent, Control } from '../../src';

@ReactComponent
class CustomControl extends Control {
  render() {
    return (
      <div>{this.props.label}</div>
    )
  }
}

export default CustomControl;

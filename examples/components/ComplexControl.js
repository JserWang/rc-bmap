import React from 'react';
import { ReactComponent, Control } from '../../src';

const checkedStyle = {
  height: 10,
  width: 10,
  borderRadius: 5,
  background: '#e89a37',
};

const unCheckedStyle = {
  height: 10,
  width: 10,
  borderRadius: 5,
  background: '#888',
};

const container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '#fff',
  height: 40,
  width: 70,
  padding: '0 10px',
  cursor: 'pointer',
  borderRadius: 3,
};

@ReactComponent
class ComplexControl extends Control {
  constructor(props) {
    super(props)
    this.state = {
      checkedState: false,
    };
  }

  handleClick = () => {
    this.setState({
      checkedState: !this.state.checkedState,
    });
  }

  render() {
    const { checkedState } = this.state;
    return (
      <div style={container} onClick={this.handleClick}>
        <div style={checkedState ? checkedStyle : unCheckedStyle}></div>
        <div>路线</div>
      </div>
    )
  }
}

export default ComplexControl;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const containerStyle = {
  position: 'absolute',
  top: -10000,
};

export default class Copyright extends PureComponent {
  static contextTypes = {
    getMapInstance: PropTypes.func,
    addCopyright: PropTypes.func,
    updateCopyright: PropTypes.func,
    removeCopyright: PropTypes.func,
  }

  componentDidMount() {
    const { context } = this;
    const { index } = this.props;
    context.addCopyright(index, this.getCopyright());
  }

  componentDidUpdate() {
    const { context } = this;
    const { index } = this.props;
    context.updateCopyright(index, this.getCopyright());
  }

  componentWillUnmount() {
    const { context } = this;
    const { index } = this.props;
    context.removeCopyright(index);
  }

  getCopyright = () => {
    const { context } = this;
    const { index, bounds } = this.props;
    return {
      id: index,
      bounds: bounds || context.getMapInstance().getBounds(),
      content: this.container.innerHTML,
    };
  }

  getContainer = (ref) => {
    this.container = ref;
  }

  render() {
    const { children } = this.props;
    return (
      <div ref={this.getContainer} style={containerStyle}>
        {children}
      </div>
    );
  }
}

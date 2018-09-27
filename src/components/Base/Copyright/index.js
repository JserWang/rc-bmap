import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Copyright extends PureComponent {
  displayName= 'Copyright'

  id = -1

  instance = null

  static contextTypes = {
    getMapInstance: PropTypes.func,
    centralizedUpdates: PropTypes.func,
    getId: PropTypes.func,
    updateCopyright: PropTypes.func,
  }

  componentDidMount() {
    const { context } = this;
    this.id = context.getId();
    this.createInstance();
    context.centralizedUpdates(this);
  }

  componentDidUpdate() {
    const { context } = this;
    this.createInstance();
    context.updateCopyright(this.id, this.instance);
  }

  createInstance = () => {
    const { context } = this;
    const { bounds } = this.props;
    this.instance = {
      id: this.id,
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
      <div ref={this.getContainer}>
        {children}
      </div>
    );
  }
}

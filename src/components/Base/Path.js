import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Path extends PureComponent {
  static displayName = 'Path'

  static contextTypes = {
    centralizedUpdates: PropTypes.func,
  }

  items = []

  static childContextTypes = {
    addPoint: PropTypes.func,
    updatePoint: PropTypes.func,
    removePoint: PropTypes.func,
  }

  getChildContext() {
    return {
      addPoint: this.addPoint,
      updatePoint: this.updatePoint,
      removePoint: this.removePoint,
    };
  }

  componentDidMount() {
    const { context } = this;
    context.centralizedUpdates({
      name: 'path',
      data: [...this.items],
    });
  }

  componentDidUpdate() {
    const { context } = this;
    context.centralizedUpdates({
      name: 'path',
      data: [...this.items],
    });
  }

  componentWillUnmount() {
    const { context } = this;
    context.centralizedUpdates({
      name: 'path',
      data: null,
    });
  }

  addPoint = (index, item) => {
    if (this.items[index]) {
      this.items.splice(index, 0, item);
    } else {
      this.items[index] = item;
    }
  }

  updatePoint = (index, item) => {
    this.items[index] = item;
  }

  removePoint = (index) => {
    this.items.splice(index, 1);
  }

  render() {
    const { children } = this.props;
    return React.Children.map(children, (child, index) => {
      if (child) {
        // 这里将 index 传递给子元素，保证子元素的显示顺序
        return React.cloneElement(child, {
          index,
        });
      }
      return null;
    });
  }
}

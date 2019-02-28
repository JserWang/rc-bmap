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
    // filter undefined item
    context.centralizedUpdates({
      name: 'path',
      data: [...this.items.filter(i => i)],
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
    // Fix sync call removePoint cause index confusion
    // https://github.com/jser-club/rc-bmap/issues/92
    this.items.splice(index, 1, undefined);
  }

  renderChildren = () => React.Children.map(this.props.children, (child, index) => {
    if (child) {
      return React.cloneElement(child, {
        index,
      });
    }
    return null;
  })

  render() {
    return (
      <div>
        {this.renderChildren()}
      </div>
    );
  }
}

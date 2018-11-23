import { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Path extends PureComponent {
  displayName = 'Path'

  static contextTypes = {
    centralizedUpdates: PropTypes.func,
  }

  items = []

  idx = -1

  static childContextTypes = {
    getIdx: PropTypes.func,
    addPoint: PropTypes.func,
    updatePoint: PropTypes.func,
  }

  getChildContext() {
    return {
      getIdx: this.getIdx,
      addPoint: this.addPoint,
      updatePoint: this.updatePoint,
    };
  }

  componentDidMount() {
    const { context } = this;
    this.instance = this.items;
    context.centralizedUpdates(this);
  }

  componentDidUpdate() {
    const { context } = this;
    this.instance = this.items;
    context.centralizedUpdates(this);
  }

  getIdx = () => {
    this.idx += 1;
    return this.idx;
  }

  addPoint = (item) => {
    this.items.push(item);
  }

  updatePoint = (idx, item) => {
    this.items.splice(idx, 1, item);
  }

  render() {
    const { children } = this.props;
    return children || null;
  }
}

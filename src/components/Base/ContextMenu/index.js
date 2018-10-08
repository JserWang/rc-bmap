import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import { BMapUtil } from '../../../core';

export default class ContextMenu extends PureComponent {
  static Item = Item

  displayName = 'ContextMenu'

  static contextTypes = {
    centralizedUpdates: PropTypes.func,
  }

  items = []

  idx = -1

  instance = null

  static childContextTypes = {
    getIdx: PropTypes.func,
    addMenuItem: PropTypes.func,
    updateMenuItem: PropTypes.func,
  }

  getChildContext() {
    return {
      getIdx: this.getIdx,
      addMenuItem: this.addMenuItem,
      updateMenuItem: this.updateMenuItem,
    };
  }

  componentDidMount() {
    const { context } = this;
    this.processConfig();
    context.centralizedUpdates(this);
  }

  componentDidUpdate() {
    const { context } = this;
    this.processConfig();
    context.centralizedUpdates(this);
  }

  getIdx = () => {
    this.idx += 1;
    return this.idx;
  }

  addMenuItem = (item) => {
    this.items.push(item);
  }

  updateMenuItem = (idx, item) => {
    this.items.splice(idx, 1, item);
  }

  processConfig = () => {
    this.instance = BMapUtil.BContextMenu();
    this.items.forEach((item) => {
      this.instance.addItem(item);
      if (item.separator) {
        this.instance.addSeparator();
      }
    });
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

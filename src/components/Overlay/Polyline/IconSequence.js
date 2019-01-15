import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Symbol from '../Symbol';
import { IconSequence as BIconSequence, Util } from '../../../core';

export default class IconSequence extends PureComponent {
  static Symbol = Symbol;

  config = {};

  static contextTypes = {
    centralizedUpdates: PropTypes.func,
  }

  static childContextTypes = {
    centralizedUpdates: PropTypes.func,
  }

  getChildContext() {
    return {
      centralizedUpdates: this.centralizedUpdates,
    };
  }

  componentDidMount() {
    const { context } = this;
    context.centralizedUpdates({
      name: 'icons',
      data: [this.iconSequence()],
    });
  }

  componentDidUpdate() {
    const { context } = this;
    context.centralizedUpdates({
      name: 'icons',
      data: [this.iconSequence()],
    });
  }

  centralizedUpdates = ({ name, data }) => {
    const configName = Util.firstLowerCase(name);
    this.config[configName] = data;
  }

  iconSequence = () => {
    const { children, ...resetProps } = this.props;
    this.config = { ...this.config, ...resetProps };
    return new BIconSequence({ ...this.config });
  }

  render() {
    const { children } = this.props;
    return children || null;
  }
}

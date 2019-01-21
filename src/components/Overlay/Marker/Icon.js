import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Icon as BIcon, Util } from '../../../core';

export default class Icon extends PureComponent {
  config = {}

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
      name: 'icon',
      data: this.getIcon(),
    });
  }

  componentDidUpdate() {
    const { context } = this;
    context.centralizedUpdates({
      name: 'icon',
      data: this.getIcon(),
    });
  }

  centralizedUpdates = ({ name, data }) => {
    const configName = Util.firstLowerCase(name);
    this.config[configName] = data;
  }

  getIcon = () => {
    const { children, ...resetProps } = this.props;
    this.config = { ...this.config, ...resetProps };

    return new BIcon({ ...this.config });
  }

  render() {
    const { children } = this.props;
    return children || null;
  }
}

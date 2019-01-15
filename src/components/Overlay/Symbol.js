import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Symbol as BSymbol, Util } from '../../core';

export default class Symbol extends PureComponent {
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
      name: 'symbol',
      data: this.getIcon(),
    });
  }

  componentDidUpdate() {
    const { context } = this;
    context.centralizedUpdates({
      name: 'symbol',
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

    return new BSymbol({ ...this.config });
  }

  render() {
    const { children } = this.props;
    return children || null;
  }
}

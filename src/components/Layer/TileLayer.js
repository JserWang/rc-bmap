import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TileLayer as BTileLayer } from '../../core';

class TileLayer extends PureComponent {
  static contextTypes = {
    getMapInstance: PropTypes.func,
  }

  componentDidMount() {
    const { context, props } = this;
    const { children, ...resetProps } = props;
    this.config = { ...this.config, ...resetProps };
    this.mapInstance = context.getMapInstance();
    const layer = new BTileLayer(this.config, this.mapInstance);
    this.layer = layer;
    this.instance = layer.instance;
  }

  componentDidUpdate() {
    const { children, ...resetProps } = this.props;
    this.config = { ...this.config, ...resetProps };
    this.layer.repaint({ ...this.config });
  }

  componentWillUnmount() {
    this.layer.destroy();
  }

  render() {
    const { children } = this.props;
    return children || null;
  }
}

export default TileLayer;

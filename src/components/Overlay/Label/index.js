import PropTypes from 'prop-types';
import BaseOverlay from '../BaseOverlay';
import { Label as BLabel } from '../../../core';
import Content from './Content';

class Label extends BaseOverlay {
  static Content = Content;

  static contextTypes = {
    getMapInstance: PropTypes.func,
    centralizedUpdates: PropTypes.func,
  }

  componentDidMount() {
    const { context, props } = this;
    const { children, ...resetProps } = props;
    this.config = { ...this.config, ...resetProps };
    this.mapInstance = context.getMapInstance();
    const overlay = this.getRealOverlay();
    this.overlay = overlay;
    this.instance = overlay.instance;

    context.centralizedUpdates({
      name: 'label',
      data: this.instance,
    });
  }

  componentDidUpdate() {
    const { context } = this;
    const { children, ...resetProps } = this.props;
    this.config = { ...this.config, ...resetProps };
    this.overlay.repaint({ ...this.config });

    context.centralizedUpdates({
      name: 'label',
      data: this.overlay.instance,
    });
  }


  getRealOverlay = () => new BLabel(this.config, this.mapInstance)
}

export default Label;

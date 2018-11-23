import { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Point extends PureComponent {
  displayName= 'Point'

  idx = -1

  instance = null

  static contextTypes = {
    getIdx: PropTypes.func,
    addPoint: PropTypes.func,
    updatePoint: PropTypes.func,
  }

  componentDidMount() {
    const { context, props } = this;
    const { lng, lat } = props;
    this.idx = context.getIdx();
    context.addPoint({ lng, lat });
  }

  componentDidUpdate() {
    const { context, props } = this;
    const { lng, lat } = props;
    context.updatePoint(this.idx, { lng, lat });
  }

  render() {
    return null;
  }
}

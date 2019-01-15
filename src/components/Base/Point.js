import PropTypes from 'prop-types';
import Common from './Common';

export default class Point extends Common {
  static displayName = 'Point'

  static contextTypes = {
    centralizedUpdates: PropTypes.func,
    addPoint: PropTypes.func,
    updatePoint: PropTypes.func,
    removePoint: PropTypes.func,
  }

  componentDidMount() {
    const { context } = this;
    const {
      index, lng, lat, name = 'point',
    } = this.props;
    // 若存在addPoint，则证明在Path下，不进行统一数据变更逻辑
    if (context.addPoint) {
      context.addPoint(index, { lng, lat });
    } else {
      this.centralizedUpdates(name, lng, lat);
    }
  }

  componentDidUpdate() {
    const { context } = this;
    const {
      index, lng, lat, name = 'point',
    } = this.props;
    if (context.updatePoint) {
      context.updatePoint(index, { lng, lat });
    } else {
      this.centralizedUpdates(name, lng, lat);
    }
  }

  componentWillUnmount() {
    const { context } = this;
    const { index } = this.props;
    if (context.removePoint) {
      context.removePoint(index);
    }
  }

  centralizedUpdates = (name, lng, lat) => {
    this.context.centralizedUpdates({
      name,
      data: {
        lng,
        lat,
      },
    });
  }
}

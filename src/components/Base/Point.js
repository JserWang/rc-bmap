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
      index, name = 'point', ...resetProps
    } = this.props;
    // 若存在addPoint，则证明在Path下，不进行统一数据变更逻辑
    if (context.addPoint) {
      context.addPoint(index, { ...resetProps });
    } else {
      this.centralizedUpdates(name, { ...resetProps });
    }
  }

  componentDidUpdate() {
    const { context } = this;
    const {
      index, name = 'point', ...resetProps
    } = this.props;
    if (context.updatePoint) {
      context.updatePoint(index, { ...resetProps });
    } else {
      this.centralizedUpdates(name, { ...resetProps });
    }
  }

  componentWillUnmount() {
    const { context } = this;
    const { index } = this.props;
    if (context.removePoint) {
      context.removePoint(index);
    }
  }

  centralizedUpdates = (name, item) => {
    this.context.centralizedUpdates({
      name,
      data: item,
    });
  }
}

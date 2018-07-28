class BaseService {
  constructor(props) {
    this.props = props;
    this.map = global.bMapInstance;
    this.init();
  }

  onPropsUpdate(newProps) {
    this.props = newProps;
    this.destroy();
    this.init();
  }

  destroy = () => {
    this.instance = null;
  }
}

export default BaseService;

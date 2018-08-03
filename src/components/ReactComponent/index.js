import { PureComponent } from 'react';

export default function ReactComponent(Wrapped) {
  return class Proxy extends PureComponent {
    constructor(props) {
      super(props);
      this.map = global.bMapInstance;
      this.wrapped = new Wrapped(props);
      // 获得实例
      this.getInstance();
    }

    componentDidUpdate() {
      if (this.wrapped.onPropsUpdate) {
        this.wrapped.onPropsUpdate(this.props);
        this.getInstance();
      }
    }

    getInstance = () => {
      if (this.props.getInstance) {
        this.props.getInstance(this.wrapped.instance);
      }
    }

    componentWillUnmount() {
      this.wrapped.destroy();
    }

    render() {
      return null;
    }
  };
}

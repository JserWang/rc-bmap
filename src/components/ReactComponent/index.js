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

    componentWillUnmount() {
      this.wrapped.destroy();
    }

    getInstance = () => {
      const { getInstance } = this.props;
      if (getInstance) {
        getInstance(this.wrapped.instance);
      }
    }

    render() {
      return null;
    }
  };
}

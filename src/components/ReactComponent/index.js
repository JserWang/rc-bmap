import { PureComponent } from 'react';

export default function ReactComponent(Wrapped) {
  return class Proxy extends PureComponent {
    constructor(props) {
      super(props);
      this.map = global.bMapInstance;
      this.wrapped = new Wrapped(props);
      // 获得实例
      if (props.getInstance) {
        props.getInstance(this.wrapped.instance);
      }
    }

    componentDidUpdate() {
      if (this.wrapped.onPropsUpdate) {
        this.wrapped.onPropsUpdate(this.props);
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

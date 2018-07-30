import { Component } from 'react';

const top = window || global;

export default function ReactComponent(Wrapped) {
  return class Proxy extends Component {
    constructor(props) {
      super(props);
      this.map = top.bMapInstance;
      this.wrapped = new Wrapped(props);
    }

    componentDidMount() {
      if (!this.map) {
        return;
      }

      // const props = this.props;
      // const wrapped = this.wrapped = new Wrapped(props);
      // if (wrapped.instance && wrapped.instance instanceof top.BMap.Control) {
      //   this.map.addControl(wrapped.instance);
      // } else if (wrapped.instance && wrapped.instance instanceof top.BMap.Overlay) {
      //   this.map.addOverlay(wrapped.instance);
      // }
    }

    componentWillReceiveProps(nextProps) {
      if (this.wrapped.componentWillReceiveProps) {
        this.wrapped.componentWillReceiveProps(nextProps);
      }
    }

    componentWillUnmount() {
      this.wrapped.destroy();
    }

    addPolyline(wrapped) {
      const { props } = this;
      props.map.addOverlay(wrapped.polyline);
      if (props.getPolyline) {
        props.getPolyline(wrapped.polyline);
      }
    }

    render() {
      return null;
    }
  };
}

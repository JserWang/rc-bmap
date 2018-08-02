import ReactComponent from '../ReactComponent';
import { bindEvents } from '../_base/util';

@ReactComponent
class AutoComplete {
  constructor(props) {
    this.props = props;
    this.map = global.bMapInstance;
    this.init();
  }

  init() {
    const {
      input,
      events,
      searchComplete,
    } = this.props;

    // TODO: 处理当传入的不是input Id时，自动创建个Control
    if (typeof input !== "string") {

    }

    this.instance = new global.BMap.Autocomplete({
      input,
      location: this.map,
      onSearchComplete: searchComplete,
    });

    bindEvents(this.instance, 'AUTO_COMPLETE', events);
  }

  onPropsUpdate(newProps) {
    this.props = newProps;
    this.destroy();
    this.init();
  }

  destroy = () => {
    this.instance.dispose();
  }
}

export default AutoComplete;

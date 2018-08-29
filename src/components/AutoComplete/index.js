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
      value,
      location,
      searchComplete,
    } = this.props;

    this.instance = new global.BMap.Autocomplete({
      input,
      location: location || this.map,
      onSearchComplete: searchComplete,
    });

    if (value) {
      this.instance.setInputValue(value);
    }

    bindEvents(this.instance, 'AUTO_COMPLETE', events);
  }

  onPropsUpdate(newProps) {
    this.props = newProps;
    this.destroy();
    this.init();
  }

  destroy = () => {
    if (this.instance.dispose) {
      this.instance.dispose();
    }
  }
}

export default AutoComplete;

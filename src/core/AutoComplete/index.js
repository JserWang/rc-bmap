import Util from '../utils';
import BMapUtil from '../utils/map';
import OPTIONS from '../options/autoComplete';

const getAutocompleteOptions = (config, map) => ({
  location: config.location || map,
  types: config.types,
  onSearchComplete: config.onSearchComplete,
  input: config.input,
});

class AutoComplete {
  config = {}

  outOfRangeOpts = ['input', 'onSearchComplete']

  hasOutOfRangeOpts = (opts = []) => opts.some(item => this.outOfRangeOpts.indexOf(item) > -1)

  constructor(config = {}, map) {
    this.config = { ...config };
    this.init(config, map);
  }

  init = (config, map) => {
    this.checkInputExist();
    const options = getAutocompleteOptions(config, map);
    this.instance = BMapUtil.BAutocomplete(options);
    this.processOptions(config);
    this.processEvents(config.events);
  }

  checkInputExist = () => {
    if (!document.querySelector(`#${this.config.input}`)) {
      throw Error(`[Input] ${this.config.input} is not exist when init autocomplete.`);
    }
  }

  repaint = (config) => {
    const diffConfig = Util.compareConfig(this.config, config) || {};
    if (this.hasOutOfRangeOpts(Object.keys(diffConfig))) {
      this.destroy();
      this.init({ ...this.config, ...diffConfig });
    } else {
      this.processOptions(diffConfig);
    }
    this.config = { ...this.config, ...diffConfig };
    this.processEvents(this.config.events);
  }

  destroy = () => {
    this.instance.dispose();
  }

  processEvents = (events) => {
    Util.unbindEvents(this.instance);
    Util.bindEvents(this.instance, events);
  }

  processOptions(config) {
    if (config.value) {
      config.inputValue = config.value;
    }
    Util.processSetOptions(this.instance, OPTIONS.SET, config);
  }
}

export default AutoComplete;

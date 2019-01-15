import BMapUtil from '../utils';

class IconSequence {
  constructor(config = {}) {
    const {
      symbol, offset, repeat, fixedRotation,
    } = config;
    const icon = BMapUtil.BIconSequence(symbol, offset, repeat, fixedRotation);
    return icon;
  }
}

export default IconSequence;

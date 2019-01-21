import Util from '../utils';
import BMapUtil from '../utils/map';

const getIconOptions = config => ({
  anchor: config.anchor,
  imageOffset: config.imageOffset,
  imageSize: config.imageSize,
  infoWindowAnchor: config.infoWindowAnchor,
  printImageUrl: config.printImageUrl,
});

const processConfig = (config) => {
  const {
    size, imageOffset, imageSize, infoWindowAnchor,
  } = config;
  const result = { ...config };

  if (size) {
    result.size = Util.convert2BSize(size);
  }

  if (imageOffset) {
    result.imageOffset = Util.convert2BSize(imageOffset);
  }

  if (imageSize) {
    result.imageSize = Util.convert2BSize(imageSize);
  }

  if (infoWindowAnchor) {
    result.infoWindowAnchor = Util.convert2BSize(infoWindowAnchor);
  }
  return result;
};

class Icon {
  constructor(config = {}) {
    const result = processConfig(config);
    const options = getIconOptions(result);
    const icon = BMapUtil.BIcon(result.imageUrl, result.size, options);
    return icon;
  }
}

export default Icon;

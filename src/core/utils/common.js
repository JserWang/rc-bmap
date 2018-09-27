import isEqual from 'lodash.isequal';

const Util = {
  isString(obj) {
    return typeof obj === 'string';
  },
  isNil(obj) {
    return obj === undefined || obj === null;
  },
  isObject(obj) {
    return toString.call(obj) === '[object Object]';
  },
  getDiffConfig(oldConfig, newConfig) {
    const result = { ...oldConfig, ...newConfig };
    const keys = Object.keys(result);
    for (let i = 0, len = keys.length; i < len; i += 1) {
      const key = keys[i];
      if (!Util.isNil(oldConfig[key]) && isEqual(oldConfig[key], result[key])) {
        delete result[key];
      }
    }
    return result;
  },
};

export default Util;

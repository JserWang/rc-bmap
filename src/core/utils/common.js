const Util = {
  deepClone(obj) {
    if (!obj) {
      return obj;
    }
    let cloneObj;

    [Number, String, Boolean].forEach((type) => {
      if (obj instanceof type) {
        cloneObj = type(obj);
      }
    });

    if (typeof cloneObj === 'undefined') {
      if (Object.prototype.toString.call(obj) === '[object Array]') {
        cloneObj = [];
        obj.forEach((child, index) => {
          cloneObj[index] = Util.deepClone(child);
        });
      } else if (typeof obj === 'object') {
        if (obj.nodeType && typeof obj.cloneNode === 'function') {
          cloneObj = obj;
        } else if (!obj.prototype) {
          if (obj instanceof Date) {
            cloneObj = new Date(String(obj));
          } else {
            cloneObj = {};
            const keys = Object.keys(obj);
            for (let i = 0, len = keys.length; i < len; i += 1) {
              const key = keys[i];
              cloneObj[key] = Util.deepClone(obj[key]);
            }
          }
        }
      } else {
        cloneObj = obj;
      }
    } else {
      cloneObj = obj;
    }
    return cloneObj;
  },
  isString(obj) {
    return typeof obj === 'string';
  },
  isNil(obj) {
    return obj === undefined || obj === null;
  },
  isObject(obj) {
    return toString.call(obj) === '[object Object]';
  },
};


export default Util;

import isEqual from 'lodash.isequal';
import BMapUtil from './map';

const numberRe = /^[0-9]+.?[0-9]*/;
const latLngRe = /^-?[0-9]+.?[0-9]*/;;

/**
 * 是否为Point
 * @param {*} point
 */
const isPoint = point => latLngRe.test(point.lng) && typeof latLngRe.test(point.lat);

/**
 * 是否为BMap.Point
 * @param {*} point
 */
const isBPoint = point => isPoint(point) && point.equals;

/**
 * 是否为Size
 * @param {*} point
 */
const isSize = size => numberRe.test(size.width) && typeof numberRe.test(size.height);

/**
 * 是否为BMap.Size
 * @param {*} size
 */
const isBSize = size => isSize(size) && size.equals;

/**
 * 是否为矩形范围
 * @param {*} bounds
 */
const isBounds = bounds => numberRe.test(bounds.sw) && numberRe.test(bounds.ne);

/**
 * 是否为BMap.Bounds
 * @param {*} bounds
 */
const isBBounds = bounds => isBounds(bounds) && bounds.equals;

/**
 * 是否为空
 * @param {*} obj
 */
const isNil = obj => obj === undefined || obj === null;

/**
 * 是否为字符串
 * @param {*} str
 */
const isString = str => typeof str === 'string';

/**
 * 首字母转为大写
 * @param {*} str
 */
const firstUpperCase = str => str.replace(/^\S/, s => s.toUpperCase());

/**
 * 首字母转为小写
 * @param {*} str
 */
const firstLowerCase = str => str.replace(/^\S/, s => s.toLowerCase());

/**
 * 获取行政区包含点集合
 * @param {*} name 行政区名称
 */
const getBoundary = name => new Promise((resolve, reject) => {
  const boundary = new global.BMap.Boundary();

  boundary.get(name, (res) => {
    const count = res.boundaries.length;
    if (count === 0) {
      reject();
    }
    const area = [];
    let allPoints = [];
    for (let i = 0; i < count; i += 1) {
      const arr = res.boundaries[i].split(';').map((item) => {
        const pointArr = item.split(',');
        return BMapUtil.BPoint({ lng: pointArr[0], lat: pointArr[1].trim() });
      });
      allPoints = allPoints.concat(arr);
      area.push(arr);
    }

    resolve({
      area,
      points: allPoints,
    });
  });
});

/**
 * 将传入值转换为 BMap.Point
 * @param {*} point 点对象 { lng, lat }
 * @param {*} propsName 用于错误提示
 */
const convert2BPoint = (point, propsName = 'point') => {
  if (isNil(point)) {
    throw Error(`Missing property \`${propsName}\``);
  }
  if (!isPoint(point)) {
    throw Error(`The \`${propsName}\` property should be a literal value \`{ lng, lat }\``);
  } else if (!isBPoint(point)) {
    point = BMapUtil.BPoint({ ...point });
  }
  return point;
};

/**
 * 将传入值转换为 BMap.Size
 * @param {*} point 矩形尺寸 { width, height }
 * @param {*} propsName 用于错误提示
 */
const convert2BSize = (size, propsName = 'size') => {
  if (isNil(size)) {
    throw Error(`Missing property \`${propsName}\``);
  }
  if (!isSize(size)) {
    throw Error(`The \`${propsName}\` property should be a literal value \`{ width, height }\``);
  }
  if (!isBSize(size)) {
    size = BMapUtil.BSize({ ...size });
  }
  return size;
};

/**
 * 将值转换为 BMap.Bounds
 * @param {*} point 矩形区域 { sw, ne }
 * @param {*} propsName 用于错误提示
 */
const convert2BBounds = (bounds, propsName = 'bounds') => {
  if (isNil(bounds)) {
    throw Error(`Missing property \`${propsName}\``);
  }
  if (!isBounds(bounds)) {
    throw Error(`The \`${propsName}\` property should be a literal value \`{ width, height }\``);
  }
  if (!isBBounds(bounds)) {
    bounds = BMapUtil.BBounds({ ...bounds });
  }
  return bounds;
};

/**
 * 为目标对象绑定事件
 * @param {*} target 目标对象
 * @param {*} events 事件集合
 */
const bindEvents = (target, events = {}) => {
  Object.keys(events).forEach((eventName) => {
    const eventType = typeof events[eventName];
    if (eventType !== 'function') {
      console.warn(`Events's props value should be a function, but got '${eventType}'`);
    }
    const callback = (...args) => {
      if (eventType === 'function') {
        events[eventName].call(null, ...args);
      }
    };
    target.events = target.events || {};
    target.addEventListener(eventName, callback);
    target.events[`${eventName}`] = callback;
  });
};

/**
 * 将目标对象中已绑定事件移除
 * @param {*} target
 */
const unbindEvents = (target) => {
  const { events = {} } = target;
  Object.keys(events).forEach((eventName) => {
    const event = events[eventName];
    target.removeEventListener(eventName, event);
  });
  target.events = {};
};

/**
 * 处理 target.setXXX 方法
 * @param {*} target 目标对象
 * @param {*} options 属性集合
 * @param {*} values 值集合
 */
const processSetOptions = (target, options, values) => {
  options.forEach((key) => {
    if (values[key] || typeof values[key] === 'boolean') {
      const upKey = firstUpperCase(key);
      if (target[`set${upKey}`]) {
        target[`set${upKey}`](values[key]);
      }
    }
  });
};

/**
 * 处理 target.enableXXX 、 target.disableXXX 方法
 * @param {*} target 目标对象
 * @param {*} options 属性集合
 * @param {*} values 值集合
 */
const processBooleanOptions = (target, options, values) => {
  options.forEach((key) => {
    if (values[key] || typeof values[key] === 'boolean') {
      const upKey = firstUpperCase(key);
      const prefix = values[key] ? 'enable' : 'disable';
      if (target[`${prefix}${upKey}`]) {
        target[`${prefix}${upKey}`]();
      }
    }
  });
};

/**
 * 比较新旧config，返回差异集合
 * @param {*} oldConfig
 * @param {*} newConfig
 */
const compareConfig = (oldConfig, newConfig) => {
  const result = { ...oldConfig, ...newConfig };
  const keys = Object.keys(result);
  for (let i = 0, len = keys.length; i < len; i += 1) {
    const key = keys[i];
    if (!isNil(oldConfig[key]) && isEqual(oldConfig[key], result[key])) {
      delete result[key];
    }
  }
  return result;
};

/**
 * 转换Control配置项
 * @param {*} param0
 */
const convertControlOptions = ({ anchor, offset }) => {
  const result = {};

  if (anchor) {
    result.anchor = !isNil(global[anchor]) ? global[anchor] : anchor;
  }

  if (offset) {
    result.offset = convert2BSize(offset, 'offset');
  }
  return result;
};

/**
 * 处理Control显示隐藏
 * @param {*} target
 * @param {*} visible
 */
const processControlVisible = (target, visible) => {
  if (!isNil(target) && !isNil(visible)) {
    return visible ? target.show() : target.hide();
  }
  return null;
};

const libScriptsMap = {};
/**
 * 同步请求第三方script
 * @param {*} src script链接
 *
 * 此处保证每个script在整个文档流中有且只有一个，不重复添加
 */
const syncScript = (src) => {
  let scriptLoader = libScriptsMap[src];
  if (!scriptLoader) {
    // eslint-disable-next-line no-multi-assign
    libScriptsMap[src] = scriptLoader = new Promise((resolved) => {
      const script = document.createElement('script');
      script.src = src;
      // eslint-disable-next-line no-multi-assign
      script.onload = script.onreadystatechange = function loaded() {
        // for IE
        if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
          resolved();
        }
      };
      document.head.appendChild(script);
    });
  }

  return scriptLoader;
};

export default {
  syncScript,
  isPoint,
  isBPoint,
  isSize,
  isBSize,
  isBounds,
  isBBounds,
  isNil,
  isString,
  getBoundary,
  convert2BPoint,
  convert2BSize,
  convert2BBounds,
  bindEvents,
  unbindEvents,
  processSetOptions,
  processBooleanOptions,
  compareConfig,
  firstLowerCase,
  convertControlOptions,
  processControlVisible,
};

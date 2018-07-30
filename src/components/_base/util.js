import * as EVENT from './events';
import * as OPTIONS from './options';

const reg = /[a-z]/;

export function replaceInitialToUpper(value) {
  return value.replace(reg, val => val.toUpperCase());
}

export function getPoint(lng, lat) {
  return new global.BMap.Point(lng, lat);
}

export function getSize(width, height) {
  return new global.BMap.Size(width, height);
}

export const isPoint = obj => obj.lng && obj.lat;

export function bindEvents(target, eventKey, events) {
  if (events && EVENT[eventKey]) {
    EVENT[eventKey].forEach((eventName) => {
      if (events[eventName]) {
        const callBack = (...args) => {
          events[eventName].call(null, ...args);
        };
        if (target[`_${eventName}`]) {
          target.removeEventListener(eventName, target[`_${eventName}`]);
        }
        target.addEventListener(eventName, callBack);
        target[`_${eventName}`] = callBack;
      }
    });
  }
}

export function createIcon(options = {}) {
  const { url, size, opts = {} } = options;
  return new global.BMap.Icon(url, size, {
    anchor: opts.anchor && getSize(opts.anchor.width, opts.anchor.height),
    imageSize: opts.imageSize && getSize(opts.imageSize.width, opts.imageSize.height),
    imageOffset: opts.imageOffset && getSize(opts.imageOffset.width, opts.imageOffset.height),
    infoWindowAnchor: opts.infoWindowAnchor && getSize(opts.infoWindowAnchor.width, opts.infoWindowAnchor.height),
    printImageUrl: opts.printImageUrl,
  });
}

export function createLabel(options = {}) {
  const {
    content,
    point,
    offset = {
      width: 0,
      height: 0
    },
    massClear = true,
    title,
    events,
    zIndex,
    style,
  } = options;
  
  const opts = {
    offset: offset && getSize(offset.width, offset.height),
    enableMassClear: massClear,
    position: point && getPoint(point.lng, point.lat),
  };
  const label =  new global.BMap.Label(content, opts);
  bindEvents(label, 'LABEL', events);
  const setOpts = {
    title,
    zIndex,
    style,
  };
  processSetOptions(label, 'LABEL_SET_OPTIONS', setOpts);
  return label
}

export function processSetOptions(target, optionKey, opts) {
  OPTIONS[optionKey].forEach((key) => {
    if (opts[key] || typeof opts[key] === "boolean") {
      const upKey = replaceInitialToUpper(key);
      target[`set${upKey}`](opts[key]);
    }
  });
}

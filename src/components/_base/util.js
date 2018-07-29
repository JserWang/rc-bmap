import * as EVENT from './events';

const reg = /[a-z]/;

const top = window || global;

export function replaceInitialToUpper(value) {
  return value.replace(reg, val => val.toUpperCase());
}

export function getPoint(lng, lat) {
  return new top.BMap.Point(lng, lat);
}

export function getSize(width, height) {
  return new top.BMap.Size(width, height);
}

export const isPoint = obj => obj.lng && obj.lat;

export function bindEvents(target, eventKey, events) {
  if (events && EVENT[eventKey]) {
    EVENT[eventKey].forEach((eventName) => {
      if (events[eventName]) {
        target.addEventListener(eventName, (...args) => {
          events[eventName].call(null, ...args);
        });
      }
    });
  }
}

export function createIcon(options = {}) {
  const { url, size, opts = {} } = options;
  return new top.BMap.Icon(url, size, {
    anchor: opts.anchor && getSize(opts.anchor.width, opts.anchor.height),
    imageSize: opts.imageSize && getSize(opts.imageSize.width, opts.imageSize.height),
    imageOffset: opts.imageOffset && getSize(opts.imageOffset.width, opts.imageOffset.height),
    infoWindowAnchor: opts.infoWindowAnchor && getSize(opts.infoWindowAnchor.width, opts.infoWindowAnchor.height),
    printImageUrl: opts.printImageUrl,
  });
}
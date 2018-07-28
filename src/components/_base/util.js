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

const reg = /[a-z]/;

const top: any = window || global;

export function replaceInitialToUpper(value: string) {
  return value.replace(reg, (val: string) => val.toUpperCase());
}

export function getPoint(lng: number, lat: number) {
  return new top.BMap.Point(lng, lat);
}

export const isPoint = (obj: any) => obj.lng && obj.lat;

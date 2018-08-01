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

export function getBound(bounds) {
  const { sw, ne } = bounds;
  return new global.BMap.Bounds(getPoint(sw.lng, sw.lat), getPoint(ne.lng, ne.lat));
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

export function createSymbol(options = {}) {
  const { path, opts = {} } = options;
  const sPath = global[path] || path;
  return new global.BMap.Symbol(sPath, {
    ...opts,
  });
}

export function createContextMenu(items = [], events) {
  const menu = new global.BMap.ContextMenu();
  items.forEach((item) => {
    const itemOpts = {
      width: item.width,
      id: item.id,
      iconUrl: item.iconUrl
    };
    const menuItem = new global.BMap.MenuItem(item.text, item.callback, itemOpts);
    if (item.disabled) {
      menuItem.disable();
    }
    if (item.separator) {
      menu.addSeparator();
    }
    menu.addItem(menuItem);
  });

  bindEvents(menu, 'CONTEXT_MENU', events);
  return menu;
}

export function processSetOptions(target, optionKey, opts) {
  OPTIONS[optionKey].forEach((key) => {
    if (opts[key] || typeof opts[key] === "boolean") {
      const upKey = replaceInitialToUpper(key);
      target[`set${upKey}`](opts[key]);
    }
  });
}

export function isSupportContext() {
  return !!(document.createElement('canvas').getContext);
}

export function isSupportCanvas() {
  const elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
}

export function appendCss(options = {}) {
  const url = options.url;
  const id = options.id;
  const node = document.createElement("link");

  node.rel = "stylesheet";
  node.type = "text/css";
  node.href = url;
  if( typeof id !== "undefined" ){
      node.id = id;
  }
  document.getElementsByTagName("head")[0].appendChild(node);
}

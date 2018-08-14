import * as EVENT from './events';
import * as OPTIONS from './options';
import ContextMenuIcon from '../../constants/ContextMenuIcon';

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

export function getBounds(bounds) {
  const { sw, ne } = bounds;
  return new global.BMap.Bounds(getPoint(sw.lng, sw.lat), getPoint(ne.lng, ne.lat));
}

export function getMapBounds() {
  return global.bMapInstance.getBounds();
}

export const isPoint = obj => obj.lng && obj.lat;

export function bindEvents(target, eventKey, events) {
  if (events && EVENT[eventKey]) {
    EVENT[eventKey].forEach((eventName) => {
      if (events[eventName]) {
        const callback = (...args) => {
          events[eventName].call(null, ...args);
        };
        target.events = target.events || {};
        if (target.events[`${eventName}`]) {
          target.removeEventListener(eventName, target.events[`${eventName}`]);
        }
        target.addEventListener(eventName, callback);
        target.events[`${eventName}`] = callback;
      }
    });
  }
}

export function unBindEvents(target) {
  const { events } = target;
  if (events) {
    const eventNames = Object.keys(events);
    for (let i = 0; i < eventNames.length; i += 1) {
      const eventName = eventNames[i];
      const event = events[eventName];
      target.removeEventListener(eventName, event);
    }
  }
}

export function createIcon(options = {}) {
  const { url, size, opts = {} } = options;
  const iconSize = size && getSize(size.width, size.height);
  return new global.BMap.Icon(url, iconSize, {
    anchor: opts.anchor && global[opts.anchor],
    imageSize: opts.imageSize && getSize(opts.imageSize.width, opts.imageSize.height),
    imageOffset: opts.imageOffset && getSize(opts.imageOffset.width, opts.imageOffset.height),
    infoWindowAnchor: opts.infoWindowAnchor
      && getSize(opts.infoWindowAnchor.width, opts.infoWindowAnchor.height),
    printImageUrl: opts.printImageUrl,
  });
}

export function processSetOptions(target, optionKey, opts) {
  OPTIONS[optionKey].forEach((key) => {
    if (opts[key] || typeof opts[key] === 'boolean') {
      const upKey = replaceInitialToUpper(key);
      target[`set${upKey}`](opts[key]);
    }
  });
}

export function processBooleanOptions(target, optionKey, opts) {
  OPTIONS[optionKey].forEach((key) => {
    if (opts[key] || typeof opts[key] === 'boolean') {
      const upKey = replaceInitialToUpper(key);
      let prefix = 'disable';
      if (opts[key]) {
        prefix = 'enable';
      }
      target[`${prefix}${upKey}`]();
    }
  });
}

export function createLabel(options = {}) {
  const {
    content,
    point,
    offset = {
      width: 0,
      height: 0,
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
  const label = new global.BMap.Label(content, opts);
  bindEvents(label, 'LABEL', events);
  const setOpts = {
    title,
    zIndex,
    style,
  };
  processSetOptions(label, 'LABEL_SET_OPTIONS', setOpts);
  return label;
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
    const iconUrl = (item.iconUrl === ContextMenuIcon.ZOOMIN)
      || (item.iconUrl === ContextMenuIcon.ZOOMOUT) ? global[item.iconUrl] : item.iconUrl;
    const itemOpts = {
      width: item.width,
      id: item.id,
      iconUrl,
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

export function createPolygon(props) {
  const {
    points,
    strokeColor,
    fillColor,
    strokeWeight,
    strokeOpacity,
    fillOpacity,
    strokeStyle,
    clicking = true,
    events,
  } = props;

  const opts = {
    strokeColor,
    fillColor,
    strokeWeight,
    strokeOpacity,
    fillOpacity,
    strokeStyle,
    enableClicking: clicking,
  };

  let pList = [];

  if (points) {
    pList = points.map(item => getPoint(item.lng, item.lat));
  }

  const instance = new global.BMap.Polygon(pList, opts);

  bindEvents(instance, 'POLYGON', events);

  return instance;
}

export function isSupportContext() {
  return !!(document.createElement('canvas').getContext);
}

export function isSupportCanvas() {
  const elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
}

export function appendCss(options = {}) {
  const { url, id } = options;
  const node = document.createElement('link');

  node.rel = 'stylesheet';
  node.type = 'text/css';
  node.href = url;
  if (typeof id !== 'undefined') {
    node.id = id;
  }
  document.getElementsByTagName('head')[0].appendChild(node);
}

export function getPoiByKeyword(keyword) {
  return new Promise((resolve) => {
    const local = new global.BMap.LocalSearch(global.bMapInstance, {
      onSearchComplete(result) {
        let res = null;
        if (result) {
          res = result.getPoi(0);
        }
        resolve(res);
      },
    });
    local.search(keyword);
  });
}

export function convertPoint(points, from, to = 5) {
  return new Promise((resolve) => {
    const convert = new global.BMap.Convertor();
    if (!Array.isArray(points)) {
      points = [points];
    }
    const pList = points.map(item => getPoint(item.lng, item.lat));
    convert.translate(pList, from, to, (result) => {
      resolve(result);
    });
  });
}

export function processContextMenu(contextMenu, instance) {
  if (contextMenu) {
    const menu = createContextMenu(contextMenu.items, contextMenu.events);
    instance.addContextMenu(menu);
  }
}

export function createMarker(props) {
  const {
    point,
    offset = {
      width: 0,
      height: 0,
    },
    icon,
    massClear = true,
    dragging = false,
    clicking = true,
    raiseOnDrag = false,
    draggingCursor,
    rotation,
    shadow,
    title,
    events,
    label,
    zIndex,
    top = false,
    contextMenu,
  } = props;

  const oPoint = point && getPoint(point.lng, point.lat);

  const markerOpts = {
    offset: offset && getSize(offset.width, offset.height),
    enableMassClear: massClear,
    enableDragging: dragging,
    enableClicking: clicking,
    raiseOnDrag,
    draggingCursor,
    rotation,
    title,
  };

  const instance = new global.BMap.Marker(oPoint, markerOpts);

  const setOpts = {
    label: label && createLabel(label.props),
    shadow: shadow && createIcon(shadow),
    zIndex,
    top,
  };

  if (icon && icon instanceof global.BMap.Symbol) {
    setOpts.icon = icon;
  } else if (icon) {
    setOpts.icon = createIcon(icon);
  }

  bindEvents(instance, 'MARKER', events);

  processContextMenu(contextMenu, instance);
  processSetOptions(instance, 'MARKER_SET_OPTIONS', setOpts);

  return instance;
}

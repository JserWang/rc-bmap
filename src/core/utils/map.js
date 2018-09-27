// const firstLowerCase = str => str.replace(/^\S/, s => s.toLowerCase());
const firstUpperCase = str => str.replace(/^\S/, s => s.toUpperCase());

const BMapUtil = {
  BPoint(lng, lat) {
    return new global.BMap.Point(lng, lat);
  },
  isPoint(point) {
    return point.lng && point.lat;
  },
  isBPoint(point) {
    return BMapUtil.isPoint(point) && point.equals;
  },
  BSize(width, height) {
    return new global.BMap.Size(width, height);
  },
  isSize(size) {
    return size.width && size.height;
  },
  isBSize(size) {
    return BMapUtil.isSize(size) && size.equals;
  },
  BMenuItem(config) {
    const menuItemOptions = {
      id: config.id,
      width: config.width,
      iconUrl: config.iconUrl,
    };
    return new global.BMap.MenuItem(config.text, config.onClick, menuItemOptions);
  },
  BContextMenu() {
    return new global.BMap.ContextMenu();
  },
  BControl() {
    return new global.BMap.Control();
  },
  BCityList(config) {
    return new global.BMap.CityListControl(config);
  },
  bindEvents(target, events) {
    if (events) {
      const eventKeys = Object.keys(events);
      eventKeys.forEach((eventName) => {
        const callback = (...args) => {
          events[eventName].call(null, ...args);
        };
        target.events = target.events || {};
        target.addEventListener(eventName, callback);
        target.events[`${eventName}`] = callback;
      });
    }
  },
  unBindEvents(target) {
    const { events } = target;
    if (events) {
      const eventNames = Object.keys(events);
      for (let i = 0, len = eventNames.length; i < len; i += 1) {
        const eventName = eventNames[i];
        const event = events[eventName];
        target.removeEventListener(eventName, event);
      }
    }
  },
  processSetOptions(target, optionList, opts) {
    optionList.forEach((key) => {
      if (opts[key] || typeof opts[key] === 'boolean') {
        const upKey = firstUpperCase(key);
        target[`set${upKey}`](opts[key]);
      }
    });
  },
  processBooleanOptions(target, optionList, opts) {
    optionList.forEach((key) => {
      if (opts[key] || typeof opts[key] === 'boolean') {
        const upKey = firstUpperCase(key);
        const prefix = opts[key] ? 'enable' : 'disable';
        target[`${prefix}${upKey}`]();
      }
    });
  },
};

export default BMapUtil;

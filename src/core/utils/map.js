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
  BIcon(config) {
    const iconOptions = {
      anchor: config.anchor,
      imageOffset: config.imageOffset,
      infoWindowAnchor: config.infoWindowAnchor,
      printImageUrl: config.printImageUrl,
    };
    return new global.BMap.Icon(config.url, config.size, iconOptions);
  },
  BControl() {
    return new global.BMap.Control();
  },
  BCityListControl(config) {
    return new global.BMap.CityListControl(config);
  },
  BCopyrightControl(config) {
    return new global.BMap.CopyrightControl(config);
  },
  BNavigationControl(config) {
    return new global.BMap.NavigationControl(config);
  },
  BMapTypeControl(config) {
    return new global.BMap.MapTypeControl(config);
  },
  BScaleControl(config) {
    return new global.BMap.ScaleControl(config);
  },
  BPanoramaControl(config) {
    return new global.BMap.PanoramaControl(config);
  },
  BOverviewMapControl(config) {
    return new global.BMap.OverviewMapControl(config);
  },
  BGeolocationControl(config) {
    return new global.BMap.GeolocationControl(config);
  },
  BOverlay() {
    return new global.BMap.Overlay();
  },
  BMarker(point, options) {
    return new global.BMap.Marker(point, options);
  },
  BLabel(content, options) {
    return new global.BMap.Label(content, options);
  },
  BCircle(center, radius, options) {
    return new global.BMap.Circle(center, radius, options);
  },
  BPolyline(points, options) {
    return new global.BMap.Polyline(points, options);
  },
  BInfoWindow(content, options) {
    return new global.BMap.InfoWindow(content, options);
  },
  BPolygon(points, options) {
    return new global.BMap.Polygon(points, options);
  },
  getBoundary(name) {
    return new Promise((resolve, reject) => {
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
            return BMapUtil.BPoint(pointArr[0], pointArr[1].trim());
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

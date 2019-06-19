const BMapUtil = {
  BMap(container, opts) {
    return new global.BMap.Map(container, opts);
  },
  BPoint({ lng, lat }) {
    return new global.BMap.Point(lng, lat);
  },
  BSize({ width, height }) {
    return new global.BMap.Size(Number(width), Number(height));
  },
  BPixel({ x, y }) {
    return new global.BMap.Pixel(x, y);
  },
  BBounds({ sw, ne }) {
    const swPoint = BMapUtil.BPoint(sw);
    const nePoint = BMapUtil.BPoint(ne);

    return new global.BMap.Bounds(swPoint, nePoint);
  },
  BMenuItem(text, callback, opts) {
    return new global.BMap.MenuItem(text, callback, opts);
  },
  BContextMenu(subMenus = []) {
    const contextMenu = new global.BMap.ContextMenu();
    subMenus.forEach((item) => {
      contextMenu.addItem(item);
      if (item.separator) {
        contextMenu.addSeparator();
      }
    });
    return contextMenu;
  },
  BIcon(url, size, opts) {
    return new global.BMap.Icon(url, size, opts);
  },
  BIconSequence(symbol, offset, repeat, fixedRotation) {
    return new global.BMap.IconSequence(symbol, offset, repeat, fixedRotation);
  },
  BControl() {
    return new global.BMap.Control();
  },
  BCityListControl(opts) {
    return new global.BMap.CityListControl(opts);
  },
  BCopyrightControl(opts) {
    console.log(opts)
    return new global.BMap.CopyrightControl(opts);
  },
  BNavigationControl(opts) {
    return new global.BMap.NavigationControl(opts);
  },
  BMapTypeControl(opts) {
    return new global.BMap.MapTypeControl(opts);
  },
  BScaleControl(opts) {
    return new global.BMap.ScaleControl(opts);
  },
  BPanoramaControl(opts) {
    return new global.BMap.PanoramaControl(opts);
  },
  BOverviewMapControl(opts) {
    return new global.BMap.OverviewMapControl(opts);
  },
  BGeolocationControl(opts) {
    return new global.BMap.GeolocationControl(opts);
  },
  BOverlay() {
    return new global.BMap.Overlay();
  },
  BMarker(point, opts) {
    return new global.BMap.Marker(point, opts);
  },
  BLabel(content, opts) {
    return new global.BMap.Label(content, opts);
  },
  BCircle(center, radius, opts) {
    return new global.BMap.Circle(center, radius, opts);
  },
  BPolyline(points, opts) {
    return new global.BMap.Polyline(points, opts);
  },
  BInfoWindow(content, opts) {
    return new global.BMap.InfoWindow(content, opts);
  },
  BPolygon(points, opts) {
    return new global.BMap.Polygon(points, opts);
  },
  BGroundOverlay(bounds, opts) {
    return new global.BMap.GroundOverlay(bounds, opts);
  },
  BPointCollection(points, opts) {
    return new global.BMap.PointCollection(points, opts);
  },
  BAutocomplete(opts) {
    return new global.BMap.Autocomplete(opts);
  },
  BSymbol(path, opts) {
    return new global.BMap.Symbol(path, opts);
  },
  BTileLayer(opts) {
    return new global.BMap.TileLayer(opts);
  },
  BTrafficLayer(opts) {
    return new global.BMap.TrafficLayer(opts);
  },
  BLocalSearch(location, opts) {
    return new global.BMap.LocalSearch(location, opts);
  },
  BGeolocation() {
    return new global.BMap.Geolocation();
  },
  BConvertor() {
    return new global.BMap.Convertor();
  },
  BTransitRoute(location, opts) {
    return new global.BMap.TransitRoute(location, opts);
  },
  BWalkingRoute(location, opts) {
    return new global.BMap.WalkingRoute(location, opts);
  },
  BRidingRoute(location, opts) {
    return new global.BMap.RidingRoute(location, opts);
  },
  BDrivingRoute(location, opts) {
    return new global.BMap.DrivingRoute(location, opts);
  },
  /**
   * 根据关键字查询位置信息
   * @param {*} keyword 关键字
   * @param {*} location 定位信息[map实例/string/point]
   */
  search(keyword, location) {
    return new Promise((resolve) => {
      const local = BMapUtil.BLocalSearch(location, {
        onSearchComplete(result) {
          const list = [];
          for (let i = 0, len = result.getCurrentNumPois(); i < len - 1; i += 1) {
            list.push(result.getPoi(i));
          }
          resolve(result);
        },
      });
      local.search(keyword);
    });
  },

  /**
   * 获取当前位置信息
   */
  getCurrentPosition() {
    return new Promise((resolve, reject) => {
      const geo = BMapUtil.BGeolocation();
      geo.getCurrentPosition((result) => {
        const status = geo.getStatus();
        if (status === global.BMAP_STATUS_SUCCESS) {
          resolve(result);
        } else {
          reject(status);
        }
      });
    });
  },

  /**
   * 对指定的地址进行解析，返回坐标点
   * @param {*} address
   * @param {*} city
   */
  getPoint(address, city) {
    return new Promise((resolve, reject) => {
      const geo = new global.BMap.Geocoder();
      geo.getPoint(address, (point) => {
        if (point) {
          resolve(point);
        } else {
          reject();
        }
      }, city);
    });
  },

  /**
   * 对指定坐标点解析，返回地址信息
   * @param {*} point
   */
  getLocation(point) {
    return new Promise((resolve, reject) => {
      const geo = new global.BMap.Geocoder();
      geo.getLocation(point, (result) => {
        if (result) {
          resolve(result);
        } else {
          reject();
        }
      });
    });
  },
};

export default BMapUtil;

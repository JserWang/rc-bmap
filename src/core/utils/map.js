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

  search({ keyword, location }) {
    return new Promise((resolve) => {
      const local = new global.BMap.LocalSearch(location, {
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
};

export default BMapUtil;

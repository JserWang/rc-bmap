import BaseOverlay from '../Overlay/BaseOverlay';
import { getSize, appendCss, bindEvents } from '../_base/util';
import ReactComponent from '../ReactComponent';
import ControlAnchor from '../../constants/ControlAnchor';

@ReactComponent
class DrawingManager extends BaseOverlay {
  constructor(props) {
    appendCss({
      url: 'http://api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.css'
    });
    super(props);
  }

  init() {
    const defaultStyle = {
      strokeColor:"red",    //边线颜色。
      fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
      strokeWeight: 3,       //边线的宽度，以像素为单位。
      strokeOpacity: 0.8,	   //边线透明度，取值范围0 - 1。
      fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
      strokeStyle: 'solid' //边线的样式，solid或dashed。
    };

    const {
      anchor = ControlAnchor.TOP_RIGHT,
      offset = {
        width: 10,
        height: 10
      },
      circleOptions = defaultStyle,
      polylineOptions = defaultStyle,
      polygonOptions = defaultStyle,
      rectangleOptions = defaultStyle,
      markerOptions = defaultStyle,
      drawingModes,
      events,
    } = this.props;

    const BDrawingManager = require('../../libs/DrawingManager.js');
    this.instance = new BDrawingManager(this.map, {
      enableDrawingTool: true,
      drawingToolOptions: {
        anchor: global[anchor],
        offset: getSize(offset.width, offset.height),
        drawingModes,
      },
      circleOptions,
      polylineOptions,
      polygonOptions,
      rectangleOptions,
      markerOptions,
    });

    bindEvents(this.instance, 'DRAWING_MANAGER', events);
  }
}

export default DrawingManager;

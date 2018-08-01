import BaseOverlay from '../Overlay/BaseOverlay';
import { getSize, appendCss } from '../_base/util';
import ReactComponent from '../ReactComponent';
import ControlAnchor from '../../constants/ControlAnchor';

@ReactComponent
class DistanceTool extends BaseOverlay {
  init() {
    const {
      anchor = ControlAnchor.TOP_RIGHT,
      offset = {
        width: 10,
        height: 10
      },
      styleOptions = {
        strokeColor:"red",    //边线颜色。
        fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 3,       //边线的宽度，以像素为单位。
        strokeOpacity: 0.8,	   //边线透明度，取值范围0 - 1。
        fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid' //边线的样式，solid或dashed。
      }
    } = this.props;

    const BDistanceTool = require('../../libs/DistanceTool.js');
    this.instance = new BDistanceTool(this.map);
    this.instance.open();
  }
}

export default DistanceTool;

import { Component } from 'react';
import { PolylineEvents } from './base/events';
import { Size, Point } from './base/common';

export declare class Polyline extends Component<any> {
  /**
   * 指定位置的坐标
   */
  points: Point[];
  /**
   * 折线颜色
   */
  strokeColor: string;
  /**
   * 折线的宽度，以像素为单位
   */
  strokeWeight: number;
  /**
   * 折线的透明度，取值范围0 - 1
   */
  strokeOpacity: number;
  /**
   * 折线的样式，solid或dashed
   */
  strokeStyle: string;
  /**
   * 是否在调用map.clearOverlays清除此覆盖物
   */
  massClear: boolean;
  /**
   * 是否启用线编辑
   */
  editing: boolean;
  /**
   * 是否响应点击事件
   */
  clicking: boolean;
  /**
   * 绑定事件
   */
  events: PolylineEvents;
  /**
   * 获取当前实例
   */
  getInstance: Function;
  /**
   * 方向纹理
   */
  icons: Array<any>;
}

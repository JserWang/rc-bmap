import { Component } from 'react';
import { DrawingManagerEvents } from './base/events';
import { Size, DrawingOption } from './base/common';
import { ControlAnchor, DrawingMode } from './base/constants';

export declare class DrawingManager extends Component<any> {
  /**
   * 抛物线数据对象
   */
  anchor: ControlAnchor;
  /**
   * 标注的位置偏移值
   */
  offset: Size;
  /**
   * 所画圆可选参数
   */
  circleOptions: DrawingOption;
  /**
   * 所画的线的可选参数
   */
  polylineOptions: DrawingOption;
  /**
   * 所画的多边形的可选参数
   */
  rectangleOptions: DrawingOption;
  /**
   * 所画的点的可选参数
   */
  markerOptions: DrawingOption;
  /**
   * 是否启用线编辑
   */
  drawingModes: DrawingMode[];
  /**
   * 绑定事件
   */
  events: DrawingManagerEvents;
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

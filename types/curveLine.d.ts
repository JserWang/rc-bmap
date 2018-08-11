import { Component } from 'react';
import { PolylineEvents } from './base/events';
import { Size, Point } from './base/common';

export declare class CurveLine extends Component<any> {
  /**
   * 抛物线数据对象
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
}

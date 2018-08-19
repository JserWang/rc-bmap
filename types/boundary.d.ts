import { Component } from 'react';
import { PolygonEvents } from './base/events';
import { Size, Point } from './base/common';

export declare class Boundary extends Component<any> {
  /**
   * 行政区域名字
   */
  name: string;
  /**
   * 初始化失败回调
   */
  onError: Function;
  /**
   * 加完成后是否自动移动
   */
  autoViewport: boolean;
  /**
   * 边线颜色
   */
  strokeColor: string;
  /**
   * 填充颜色。当参数为空时，圆形将没有填充效果
   */
  fillColor: string;
  /**
   * 边线的宽度，以像素为单位
   */
  strokeWeight: number;
  /**
   * 边线透明度，取值范围0 - 1
   */
  strokeOpacity: number;
  /**
   * 填充的透明度，取值范围0 - 1
   */
  fillOpacity: number;
  /**
   * 边线的样式，solid或dashed
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
  events: PolygonEvents;
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

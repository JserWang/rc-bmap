import { Component } from 'react';
import { ControlAnchor } from "./base/constants";
import { DistanceToolEvents } from './base/events';

export declare class DistanceTool extends Component<any> {
  /**
   * 测距过程中，提示框文字
   */
  followText: string;
  /**
   * 测距结果所用的单位制，"metric"表示米制，"us"表示美国传统单位
   */
  unit: string;
  /**
   * 折线颜色
   */
  lineColor: string;
  /**
   * 折线线宽
   */
  lineStroke: number;
  /**
   * 折线透明度
   */
  opacity: number;
  /**
   * 折线颜色
   */
  lineStyle: string;
  /**
   * 跟随的鼠标样式
   */
  cursor: string;
  /**
   * 绑定事件
   */
  events: DistanceToolEvents;
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

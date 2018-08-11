import { Component } from 'react';
import { LabelEvents } from './base/events';
import { Size, Point } from './base/common';

export declare class Label extends Component<any> {
  /**
   * 位置偏移值
   */
  offset: Size;
  /**
   * 文本标注的位置
   */
  point: Point;
  /**
   * 是否在调用map.clearOverlays清除此覆盖物
   */
  massClear: boolean;
  /**
   * 显示标签
   */
  content: string;
  /**
   * 鼠标悬浮显示文字
   */
  title: string;
  /**
   * 同html的z-index
   */
  zIndex: number;
  /**
   * 标签样式
   */
  style: any;
  /**
   * 绑定事件
   */
  events: LabelEvents;
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

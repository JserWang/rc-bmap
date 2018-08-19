import { Component } from 'react';
import { OverviewMapEvents } from './base/events';
import { ControlAnchor } from "./base/constants";
import { Size } from './base/common';

export declare class OverviewMap extends Component<any> {
  /**
   * 控件的停靠位置
   */
  anchor: ControlAnchor;
  /**
   * 控件的水平偏移值
   */
  offset: Size;
  /**
   * 缩略地图控件的大小
   */
  size: Size;
  /**
   * 缩略地图添加到地图后的开合状态
   */
  isOpen: boolean
  /**
   * 绑定事件
   */
  events: OverviewMapEvents
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

import { Component } from 'react';
import { GeolocationEvents } from './base/events';
import { ControlAnchor } from "./base/constants";
import { Icon, Size } from './base/common';

export declare class Geolocation extends Component<any> {
  /**
   * 控件的停靠位置
   */
  anchor: ControlAnchor;
  /**
   * 控件的水平偏移值
   */
  offset: Size;
  /**
   * 是否显示定位信息面板
   */
  showAddressBar: boolean;
  /**
   * 添加控件时是否进行定位
   */
  autoLocation: boolean;
  /**
   * 设置icon
   */
  locationIcon: Icon;
  /**
   * 绑定事件
   */
  events: GeolocationEvents;
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

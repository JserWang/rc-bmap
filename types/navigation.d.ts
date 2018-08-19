import { Component } from 'react';
import { ControlAnchor, NavigationType } from "./base/constants";
import { Size } from './base/common';

export declare class Navigation extends Component<any> {
  /**
   * 控件的停靠位置
   */
  anchor: ControlAnchor;
  /**
   * 控件的水平偏移值
   */
  offset: Size;
  /**
   * 平移缩放控件的类型
   */
  type: NavigationType
  /**
   * 是否显示级别提示信息
   */
  showZoomInfo: boolean
  /**
   * 控件是否集成定位功能
   */
  geolocation: boolean
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

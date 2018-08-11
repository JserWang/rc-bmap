import { Component } from 'react';
import { ControlAnchor, MapTypeControlType, MapType } from "./base/constants";
import { Size } from './base/common';

export declare class MapTypeCtrl extends Component<any> {
  /**
   * 控件的停靠位置
   */
  anchor: ControlAnchor;
  /**
   * 控件的水平偏移值
   */
  offset: Size;
  /**
   * 控件样式
   */
  type: MapTypeControlType;
  /**
   * 控件展示的地图类型
   */
  mapTypes: MapType[];
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

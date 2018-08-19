import { Component } from 'react';
import { ControlAnchor } from "./base/constants";

export declare class TrafficControl extends Component<any> {
  /**
   * 控件的停靠位置
   */
  anchor: ControlAnchor;
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

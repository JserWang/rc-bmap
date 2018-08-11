import { Component } from 'react';
import { ControlAnchor } from "./base/constants";
import { Size } from './base/common';

export declare class CopyRight extends Component<any> {
  /**
   * 控件的停靠位置
   */
  anchor: ControlAnchor;
  /**
   * 控件的水平偏移值
   */
  offset: Size;
  /**
   * 该版权的文本信息，支持HTML内容
   */
  content: string | HTMLElement;
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

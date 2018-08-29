import { Component } from 'react';
import { Point } from './base/common';
import { ControlAnchor } from "./base/constants";
import { AutoCompleteEvents } from './base/events';

export declare class AutoComplete extends Component<any> {
  /**
   * 文本输入框元素或其id
   */
  input: string | HTMLElement;
  /**
   * 在input框中输入字符后，发起列表检索，完成后的回调函数
   */
  searchComplete: Function;
  /**
   * 折线颜色
   */
  events: AutoCompleteEvents;
  /**
   * 获取当前实例
   */
  getInstance: Function;

  /**
   * 设定返回结果的所属范围
   */
  location: string | Point;

  /**
   * 绑定的input控件的值
   */
  value: string;
}

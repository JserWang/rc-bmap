import { Component } from 'react';
import { Size, Point } from './base/common';
import { InfoWindowEvents } from './base/events';

export declare class InfoWindow extends Component<any> {
  /**
   * 信息窗标题文字，支持HTML内容
   */
  title: string;
  /**
   * 信息窗显示文字，支持HTML内容
   */
  content: string;
  /**
   * 显示位置坐标
   */
  point: Point;
  /**
   * 信息窗位置偏移值
   */
  offset: Size;
  /**
   * 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整
   */
  width: number;
  /**
   * 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整
   */
  height: number;
  /**
   * 信息窗最大化时的宽度，单位像素。取值范围：220 - 730
   */
  maxWidth: number;
  /**
   * 是否开启信息窗口打开时地图自动移动
   */
  autoPan: boolean;
  /**
   * 是否开启点击地图关闭信息窗口
   */
  closeOnClick: boolean;
  /**
   * 是否在信息窗里显示短信发送按钮
   */
  displayMessage: boolean;
  /**
   * 自定义部分的短信内容
   */
  message: string;
  /**
   * 绑定事件
   */
  events: InfoWindowEvents;
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

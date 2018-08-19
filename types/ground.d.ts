import { Component } from 'react';
import { GroundEvents } from './base/events';
import { Bounds } from './base/common';

export declare class Ground extends Component<any> {
  /**
   * 设置图层显示的矩形区域
   */
  bounds: Bounds;
  /**
   * 图层地址
   */
  imageURL: string;
  /**
   * 图层透明度
   */
  opacity: number;
  /**
   * 图层显示的最大级别
   */
  maxZoom: number;
  /**
   * 图层显示的最小级别
   */
  minZoom: number;
  /**
   * 绑定事件
   */
  events: GroundEvents;
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

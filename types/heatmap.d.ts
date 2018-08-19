import { Component } from 'react';
import { CircleEvents } from './base/events';
import { Size, HeatPoint } from './base/common';

export declare class Heatmap extends Component<any> {
  /**
   * 热力图集合点
   */
  points: HeatPoint[];
  /**
   * 热力图圆半径
   */
  radius: number;
  /**
   * 透明度
   */
  opacity: number;
  /**
   * 权重最大值
   */
  max: number;
  /**
   * 热力图渐变区间
   */
  gradient: any;
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

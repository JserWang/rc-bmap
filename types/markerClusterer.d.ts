import { Component } from 'react';
import { Size } from './base/common';

export declare class MarkerClusterer extends Component<any> {
  /**
   * 网格大小
   */
  gridSize: number;
  /**
   * 聚合的最大缩放级别
   */
  maxZoom: number;
  /**
   * 单个聚合的最小数量
   */
  minClusterSize: number;
  /**
   * 聚合样式的风格集合
   */
  styles: any;
  /**
   * 单个聚合的落脚点是否是聚合内所有标记的平均中心
   */
  averageCenter: boolean;
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

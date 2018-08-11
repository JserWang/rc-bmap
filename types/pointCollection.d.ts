import { Component } from 'react';
import { PointCollectionEvents } from './base/events';
import { Point } from './base/common';
import { ShapeType, SizeType } from './base/constants';

export declare class PointCollection extends Component<any> {
  /**
   * 点集合
   */
  points: Point[];
  /**
   * 海量点的预设形状
   */
  shape: ShapeType;
  /**
   * 海量点的预设尺寸
   */
  size: SizeType;
  /**
   * 海量点的颜色
   */
  color: string;
  /**
   * 绑定事件
   */
  events: PointCollectionEvents;
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

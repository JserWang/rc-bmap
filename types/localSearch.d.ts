import { Component } from 'react';
import { Point, RenderOption } from './base/common';

declare type mapInstance = any;

export declare class LocalSearch extends Component<any> {
  /**
   * 表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。
   */
  location: mapInstance | string | Point;
  /**
   * 搜索结果呈现的配置
   */
  renderOptions: RenderOption;
  /**
   * 检索完成后的回调函数
   */
  onSearchComplete: Function;
  /**
   * 标注添加完成后的回调函数
   */
  onMarkersSet: Function;
  /**
   * 气泡内容创建后的回调函数
   */
  onInfoHtmlSet: Function;
  /**
   * 设置每页容量，取值范围：1 - 100
   */
  pageCapacity: number;
  /**
   * 结果列表添加完成后的回调函数
   */
  onResultsHtmlSet: Function;
  /**
   * 是否将查询结果渲染至地图中
   */
  showInMap: boolean;
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

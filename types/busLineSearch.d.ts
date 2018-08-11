import { Component } from 'react';
import { Point, RenderOption } from './base/common';

declare type mapInstance = any;

export declare class BusLineSearch extends Component<any> {
  /**
   * 表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。
   */
  location: mapInstance | string | Point;
  /**
   * 搜索结果呈现的配置
   */
  renderOptions: RenderOption;
  /**
   * 设置公交列表查询后的回调函数
   */
  onGetBusListComplete: Function;
  /**
   * 设置公交线路查询后的回调函数
   */
  onGetBusLineComplete: Function;
  /**
   * 公交列表结果页渲染后回调函数
   */
  onBusListHtmlSet: Function;
  /**
   * 公交线路结果页渲染后回调函数
   */
  onBusLineHtmlSet: Function;
  /**
   * 添加公交线时候回调函数
   */
  onPolylinesSet: Function;
  /**
   * 添加公交站点时候回调函数
   */
  onMarkersSet: Function;
  /**
   * 是否将查询结果渲染至地图中
   */
  showInMap: boolean;
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

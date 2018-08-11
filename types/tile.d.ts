import { Component } from 'react';
import { Copyright } from './base/common';

export declare class Tile extends Component<any> {
  /**
   * 是否使用了带有透明信息的PNG。
   */
  transparentPng: boolean;
  /**
   * 指定图块网址模板，该模板可以针对每个图块请求而展开
   */
  tileUrlTemplate: string;
  /**
   * 地图图层的版权信息
   */
  copyright: Copyright;
  /**
   * 图层的 zIndex
   */
  zIndex: number;
  /**
   * 向地图返回地图图块的网址，图块索引由 tileCoord 的 x 和 y 属性在指定的缩放级别 zoom 提供。如果您在 TileLayerOptions 中提供了 tileUrlTemplate 参数，则可不实现此接口 
   */
  getTilesUrl: string;
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

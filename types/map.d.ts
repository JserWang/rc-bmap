import { Component } from 'react';
import { MapType } from './base/constants';
import { MapEvents } from './base/events';
import { MapStyle, Point, ContextMenu } from './base/common';

export declare class Map extends Component<any> {
  /**
   * 加载地图时所需ak，百度地图开放平台中申请
   */
  ak: string
  /**
   * 地图未渲染时占位
   */
  placeHolder: string | any
  /**
   * 地图渲染完成后回调函数
   */
  mapMounted: Function
  /**
   * 地图允许的最小级别，取值不得小于地图类型所允许的最小级别
   */
  minZoom: number
  /**
   * 地图允许的最大级别。取值不得大于地图类型所允许的最大级别
   */
  maxZoom: number
  /**
   * 设置地图默认的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
   */
  defaultCursor: string
  /**
   * 设置拖拽地图时的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
   */
  draggingCursor: string
  /**
   * 设置地图样式，样式包括地图底图颜色和地图要素是否展示两部分
   */
  mapStyle: MapStyle
  /**
   * 设地图中心点
   */
  center: Point
  /**
   * 设置地图类型，从MapType中取值
   */
  mapType: MapType
  /**
   * 将视图切换到指定的缩放等级，中心点坐标不变
   */
  zoom: number
  /**
   * 是否启用使用高分辨率地图
   */
  highResolution: boolean
  /**
   * 是否自动适应地图容器变化
   */
  autoResize: boolean
  /**
   * 是否开启底图可点功能
   */
  mapClick: boolean
  /**
   * 是否启用地图拖拽
   */
  dragging: boolean
  /**
   * 是否启用滚轮放大缩小
   */
  scrollWheelZoom: boolean
  /**
   * 是否启用双击放大
   */
  doubleClickZoom: boolean
  /**
   * 是否启用键盘操作
   */
  keyboard: boolean
  /**
   * 是否启用地图惯性拖拽
   */
  inertialDragging: boolean
  /**
   * 是否启用连续缩放效果
   */
  continuousZoom: boolean
  /**
   * 是否启用双指操作缩放
   */
  pinchToZoom: boolean
  /**
   * 为地图绑定事件
   */
  events: MapEvents
  /**
   * 右键菜单
   */
  contextMenu: ContextMenu
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

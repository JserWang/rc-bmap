import { Component } from 'react';
import { Size, Icon, ContextMenu, Point } from './base/common';

export declare class Marker extends Component<any> {
  /**
   * 控件的水平偏移值
   */
  offset: Size;
  /**
   * 控件显示经纬度
   */
  point: Point;
  /**
   * 标注所用的图标对象
   */
  icon: Icon;
  /**
   * 是否在调用map.clearOverlays清除此覆盖物
   */
  massClear: boolean;
  /**
   * 是否启用拖拽
   */
  dragging: boolean;
  /**
   * 是否响应点击事件
   */
  clicking: boolean;
  /**
   * 拖拽标注时，标注是否开启离开地图表面效果
   */
  raiseOnDrag: boolean;
  /**
   * 拖拽标注时的鼠标指针样式
   */
  draggingCursor: string;
  /**
   * 旋转角度
   */
  rotation: number;
  /**
   * 阴影图标
   */
  shadow: Icon;
  /**
   * 鼠标移到marker上的显示内容
   */
  title: string;
  /**
   * 右键菜单
   */
  contextMenu: ContextMenu;
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

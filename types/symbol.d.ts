import { SymbolShapeType } from "./base/constants";
import { Size } from './base/common';
import { Marker } from "./marker";

export declare class Symbol extends Marker {
  /**
   * 符号的位置偏移值
   */
  path: string | SymbolShapeType;
  /**
   * 符号的位置偏移值
   */
  anchor: Size;
  /**
   * 设置矢量图标的填充颜色
   */
  fillColor: string;
  /**
   * 设置矢量图标填充透明度，范围0~1
   */
  fillOpacity: number;
  /**
   * 设置矢量图标的缩放比例
   */
  scale: number;
  /**
   * 设置矢量图标的旋转角度,参数为角度
   */
  rotation: number;
  /**
   * 设置矢量图标的线填充颜色,支持颜色常量字符串、十六进制、RGB、RGBA等格式
   */
  strokeColor: string;
  /**
   * 设置矢量图标线的透明度,opacity范围0~1
   */
  strokeOpacity: number;
  /**
   * 旋设置线宽。如果此属性没有指定，则线宽跟scale数值相同
   */
  strokeWeight: number;
  /**
   * 获取当前实例
   */
  getInstance: Function;
}

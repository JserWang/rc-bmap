import { ControlAnchor } from './constants';

export interface MapStyle {
  style: string;
  featrues: any[];
  styleJson: any[];
}

export interface Point {
  lng: number;
  lat: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface ContextMenu {
  items: ContextMenuItem[];
}

export interface ContextMenuItem {
  text: string;
  callback: Function;
  separator: boolean;
  width: number;
  iconUrl: string;
  disabled: boolean;
}

export interface Icon {
  url: string;
  size: Size;
  opts: IconOptions;
}

export interface IconOptions {
  anchor: ControlAnchor;
  imageSize: Size;
  imageOffset: Size;
  infoWindowAnchor: Size;
  printImageUrl: string;
}

export interface Bounds {
  ne: Point;
  sw: Point;
}

export interface RenderOption {
  panel: string | HTMLElement;
  selectFirstResult: boolean;
  autoViewport: boolean;
}

export interface DrawingOption {
  strokeColor: string;
  fillColor: string;
  strokeWeight: number;
  strokeOpacity: number;
  fillOpacity: number;
  strokeStyle: string;
}

export interface HeatPoint {
  lng: number;
  lat: number;
  count: number;
}

export interface Copyright {
  content: string;
  bounds: Bounds;
}

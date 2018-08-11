export { Map } from './map';
export { Navigation } from './navigation';
export { Geolocation } from './geolocation';
export { OverviewMap } from './overviewMap';
export { Scale } from './scale';
export { CopyRight } from './copyright';
export { MapTypeCtrl } from './mapTypeCtrl';
export { Panorama } from './panorama';
export { CityList } from './cityList';
export { Marker } from './marker';
export { Symbol } from './symbol';
export { Label } from './label';
export { InfoWindow } from './infoWindow';
export { Polyline } from './polyline';
export { Circle } from './circle';
export { Polygon } from './polygon';
export { Boundary } from './boundary';
export { PointCollection } from './pointCollection';
export { Ground } from './ground';
export { TransitRoute } from './transitRoute';
export { DrivingRoute } from './drivingRoute';
export { RidingRoute } from './ridingRoute';
export { WalkingRoute } from './walkingRoute';
export { LocalSearch } from './localSearch';
export { BusLineSearch } from './busLineSearch';
export { MarkerClusterer } from './markerClusterer';
export { CurveLine } from './curveLine';
export { DrawingManager } from './drawingManager';
export { Heatmap } from './heatmap';
export { TrafficControl } from './trafficControl';
export { DistanceTool } from './distanceTool';
export { AutoComplete } from './autoComplete';
export { Tile } from './tile';

export interface MapType{}
export interface ControlAnchor{}
export interface LengthUnit{}
export interface MapPane{}
export interface MapTypeControlType{}
export interface StatusCode{}
export interface Animation{}
export interface ShapeType{}
export interface SizeType{}
export interface SymbolShapeType{}
export interface ContextMenuIcon{}
export interface TransitPolicy{}
export interface TransitTypePolicy{}
export interface IntercityPolicy{}
export interface DrivingPolicy{}
export interface DrawingMode{}
export class Control{}
export class Overlay{}
export class ReactComponent{}

export declare function getMapBounds(): any;
export declare function getBounds(): any;
export declare function getPoiByKeyword(): any;
export declare function convertPoint(): any;
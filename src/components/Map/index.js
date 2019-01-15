import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import initMap, { Util } from '../../core';
import ContextMenu from '../ContextMenu';
import PlaceHolder from './PlaceHolder';

const fillStyle = {
  width: '100%',
  height: '100%',
};

export default class Map extends PureComponent {
  static PlaceHolder = PlaceHolder;

  static ContextMenu = ContextMenu;

  static childContextTypes = {
    getMapInstance: PropTypes.func,
    centralizedUpdates: PropTypes.func,
  }

  config = {}

  // 仅用作config的组件
  configComponent = ['Point', 'PlaceHolder']

  getChildContext() {
    return {
      getMapInstance: this.getMapInstance,
      centralizedUpdates: this.centralizedUpdates,
    };
  }

  componentDidMount() {
    const { children, ...resetProps } = this.props;
    this.config = { ...this.config, ...resetProps };
    this.createMapInstance(this.config);
  }

  componentDidUpdate() {
    const { children, ...resetProps } = this.props;
    this.config = { ...this.config, ...resetProps };
    if (this.map) {
      this.map.repaint(this.config);
    }
  }

  /**
   * 内部子组件属性更新触发方法
   */
  centralizedUpdates = ({ name, data }) => {
    const configName = Util.firstLowerCase(name);
    this.config[configName] = data;
  }

  /**
   * 初始化地图实例
   */
  createMapInstance = async (config) => {
    const { mounted, name } = this.props;
    this.map = await initMap(this.mapContainer, config);
    const mapInstance = this.map.instance;
    if (name) {
      global[`${name}`] = mapInstance;
    }
    this.forceUpdate(() => {
      if (mounted) {
        mounted(mapInstance);
      }
    });
  }

  /**
   * 获得地图容器ref
   */
  getMapContainer = (ref) => {
    this.mapContainer = ref;
  }

  /**
   * 获得地图实例
   */
  getMapInstance = () => this.map && this.map.instance

  renderChildren = () => {
    const { children } = this.props;
    return React.Children.map(children, (child) => {
      if (this.map || (child && this.configComponent.indexOf(child.type.displayName) > -1)) {
        return child;
      }
      return null;
    });
  }

  render() {
    return (
      <div ref={this.getMapContainer} style={fillStyle}>
        { this.renderChildren() }
      </div>
    );
  }
}


Map.propTypes = {
  // 
  ak: PropTypes.string,
  // 地图实例别名
  // 设置后可通过window[name]进行获取
  name: PropTypes.string,
  // 当前缩放等级
  zoom: PropTypes.number,
  // 当前百度地图版本, 2 or 3
  version: PropTypes.number,
  // 最小缩放等级
  minZoom: PropTypes.number,
  // 最大缩放等级
  maxZoom: PropTypes.number,
  // 设置地图默认的鼠标指针样式
  defaultCursor: PropTypes.string,
  // 设置拖拽地图时的鼠标指针样式
  draggingCursor: PropTypes.string,
  // 设置地图样式，样式包括地图底图颜色和地图要素是否展示两部分
  mapStyle: PropTypes.object,
  // 设置地图个性化样式V2版本，仅支持现代浏览器（支持Canvas）
  mapStyleV2: PropTypes.object,
  // 设置地图类型
  mapType: PropTypes.string,
  // 地图初始化完成回调函数
  mounted: PropTypes.func,
  // 是否启用使用高分辨率地图
  highResolution: PropTypes.bool,
  // 自动适应地图容器变化
  autoResize: PropTypes.bool,
  // 地图可点
  mapClick: PropTypes.bool,
  // 拖拽
  dragging: PropTypes.bool,
  // 滚轮缩放
  scrollWheelZoom: PropTypes.bool,
  // 双击放大
  doubleClickZoom: PropTypes.bool,
  // 键盘操作
  keyboard: PropTypes.bool,
  // 惯性拖拽
  inertialDragging: PropTypes.bool,
  // 连续缩放
  continuousZoom: PropTypes.bool,
  // 双指操作
  pinchToZoom: PropTypes.bool,
};

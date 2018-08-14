import React, { Component } from 'react';
import { Map, Marker, Animation, Label } from 'rc-bmap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerPoint: { lng: 116.404, lat: 39.915 },
      offset: { width: 10, height: 10 },
      icon: {
        url: "http://lbsyun.baidu.com/jsdemo/img/fox.gif",
        size: {
          width: 300,
          height: 157,
        },
        opts: {
          imageOffset: { width: 10, height: 10 },
        },
      },
      dragging: false,
      title: 'This is title',
      clicking: true,
      raiseOnDrag: false,
      draggingCursor: '',
      shadow: {
        url: "http://lbsyun.baidu.com/jsdemo/img/fox.gif",
        size: {
          width: 600,
          height: 314,
        },
        opts: {
          imageOffset: { width: 100, height: 100 },
        },
      },
      contextMenu: {
        items: [{
          text: '你好', // 设置菜单项显示的文本
          callback: function(){console.log(666)}, // 菜单项被点击回调函数
          separator: true, // 是否显示分隔线
          width: 100, // 指定此菜单项的宽度
          iconUrl: "http://lbsyun.baidu.com/jsdemo/img/fox.gif", // 指定此菜单项的icon URL（大小为17px*17px)
          disabled: false // 是否禁用
        }]
      },
      rotation: 0,
      massClear: false,
    };
  }

  handleMarkerPoint = () => {
    this.setState({
      markerPoint: {
        lng: 116.400,
        lat: 39.915,
      }
    });
  }

  handleOffset = () => {
    this.setState({
      offset: {
        width: 100,
        height: 100,
      }
    });
  }

  handleIcon = () => {
    this.setState({
      icon: {
        url: "http://lbsyun.baidu.com/jsdemo/img/fox.gif",
        size: {
          width: 600,
          height: 314,
        },
        opts: {
          imageOffset: { width: 100, height: 100 },
        },
      }
    });
  }

  handleDragging = () => {
    this.setState({
      dragging: true
    });
  }

  handleTitle = () => {
    this.setState({
      title: '这是你的标注哦',
    });
  }

  handleRaiseOnDrag = () => {
    this.setState({
      raiseOnDrag: true
    });
  }

  handleDraggingCursor = () => {
    this.setState({
      draggingCursor: 'default'
    });
  }

  handleShadow = () => {
    this.setState({
      shadow: {
        url: "http://lbsyun.baidu.com/jsdemo/img/fox.gif",
        size: {
          width: 600,
          height: 314,
        },
        opts: {
          imageOffset: { width: 200, height: 100 },
        },
      }
    });
  }

  handleContextMenu = () => {
    this.setState({
      contextMenu: {
        items: [{
          text: '大家好', // 设置菜单项显示的文本
          callback: function(){console.log(888)}, // 菜单项被点击回调函数
          separator: false, // 是否显示分隔线
          width: 100, // 指定此菜单项的宽度
          iconUrl: "http://lbsyun.baidu.com/jsdemo/img/fox.gif", // 指定此菜单项的icon URL（大小为17px*17px)
          disabled: true // 是否禁用
        }]
      }
    });
  }

  handleRotation = () => {
    this.setState({
      rotation: 90,
    });
  }

  handleMassClear = () => {
    this.setState({
      massClear: true, // 改为true之后再点击clearMarker则覆盖物会被清除
    });
  }

  handleClicking = () => {
    this.setState({
      clicking: !this.state.clicking, // 为true则右键菜单有反应，false无反应
    });
  }

  clearMarker = () => {
    window.bMapInstance.clearOverlays(); // 触发之后若massClear是true则会清除该覆盖物
  }

  render() {
    const { markerPoint, offset, icon, dragging, title, clicking, raiseOnDrag, draggingCursor, shadow, contextMenu, rotation, massClear } = this.state;
    return (
      <div style={{height: '100%'}}>
        <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv">
          <Marker
            point={markerPoint}
            offset={offset}
            icon={icon}
            animation={Animation.BOUNCE}
            dragging={dragging}
            title={title}
            clicking={clicking}
            raiseOnDrag={raiseOnDrag}
            rotation={rotation}
            draggingCursor={draggingCursor}
            shadow={shadow}
            contextMenu={contextMenu}
            massClear={massClear}
          />
        </Map>
        <button onClick={this.handleMarkerPoint}>改变markerPoint</button>
        <button onClick={this.handleOffset}>改变offset</button>
        <button onClick={this.handleIcon}>改变icon</button>
        <button onClick={this.handleDragging}>改变dragging</button>
        <button onClick={this.handleTitle}>改变title</button>
        <button onClick={this.handleRaiseOnDrag}>改变raiseOnDrag</button>
        <button onClick={this.handleDraggingCursor}>改变draggingCursor</button>
        <button onClick={this.handleShadow}>改变shadow</button>
        <button onClick={this.handleContextMenu}>改变contextMenu</button>
        <button onClick={this.handleRotation}>改变rotation</button>
        <button onClick={this.handleClicking}>改变clicking</button>
        <button onClick={this.handleMassClear}>改变massClear</button>
        <button onClick={this.clearMarker}>清除marker</button>
      </div>
    );
  }
}

export default App;

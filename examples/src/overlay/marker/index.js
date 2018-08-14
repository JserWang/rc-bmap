import React from 'react';
import { Button } from 'antd';
import {
  Map, MapTypeCtrl,
  ControlAnchor, MapTypeControlType,
  MapType,
} from 'rc-bmap';
import Container from 'components/Container';
import Marker from './index.md';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
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
    const { visible } = this.state;
    const {
      markerPoint, offset, icon, dragging, title, clicking, raiseOnDrag, draggingCursor, shadow, contextMenu, rotation, massClear,
    } = this.state;
    return (
      <Container code={Marker}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
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

        </div>

        <Button onClick={this.handleMarkerPoint}>改变markerPoint</Button>
        <Button onClick={this.handleOffset}>改变offset</Button>
        <Button onClick={this.handleIcon}>改变icon</Button>
        <Button onClick={this.handleDragging}>改变dragging</Button>
        <Button onClick={this.handleTitle}>改变title</Button>
        <Button onClick={this.handleRaiseOnDrag}>改变raiseOnDrag</Button>
        <Button onClick={this.handleDraggingCursor}>改变draggingCursor</Button>
        <Button onClick={this.handleShadow}>改变shadow</Button>
        <Button onClick={this.handleContextMenu}>改变contextMenu</Button>
        <Button onClick={this.handleRotation}>改变rotation</Button>
        <Button onClick={this.handleClicking}>改变clicking</Button>
        <Button onClick={this.handleMassClear}>改变massClear</Button>
        <Button onClick={this.clearMarker}>清除marker</Button>

      </Container>
    );
  }
}

export default App;

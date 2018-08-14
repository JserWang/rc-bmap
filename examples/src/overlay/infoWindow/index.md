import React, { Component } from 'react';
import { Map, InfoWindow } from 'rc-bmap';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '弹出框标题',
      content: '弹出框内容',
      point: {
        lng: 116.404,
        lat: 39.915,
      },
      offset: {
        width: 3,
        height: 0,
      },
      width: 0,
      height: 0,
      maxWidth: 250,
      autoPan: false,
      closeOnClick: false,
      displayMessage: false,
      message: '短信内容',
      events: {
        click() {
          console.log('click');
        },
      },
    };
  }

  handleTitle = () => {
    this.setState({
      title: '弹出框新标题',
    });
  }

  handleContent = () => {
    this.setState({
      content: '弹出框新内容',
    });
  }

  handlePoint = () => {
    this.setState({
      point: {
        lng: 116.400,
        lat: 39.915,
      },
    });
  }

  handleOffset = () => {
    this.setState({
      offset: {
        width: 10,
        height: 10,
      },
    });
  }

  handleWidth = () => {
    this.setState({
      width: 300,
    });
  }

  handleHeight = () => {
    this.setState({
      height: 100,
    });
  }

  handleMaxWidth = () => {
    this.setState({
      maxWidth: 400,
    });
  }

  handleAutoPan = () => {
    this.setState({
      autoPan: !this.state.autoPan,
    });
  }

  handleCloseOnClick = () => {
    this.setState({
      closeOnClick: !this.state.closeOnClick,
    });
  }

  handleDisplayMessage = () => {
    this.setState({
      displayMessage: !this.state.displayMessage,
    });
  }

  handleMessage = () => {
    this.setState({
      message: '新的短信内容',
    });
  }

  handleEvents = () => {
    this.setState({
      events: {
        click() {
          console.log('new click');
        },
      }
    });
  }

  render() {
    const { title, content, point, offset, width, height, maxWidth, autoPan, closeOnClick, displayMessage, message, events } = this.state;
    return (
      <div style={{height: '100%'}}>
        <Map ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv">
          <InfoWindow
            title={title} // 信息窗标题文字，支持HTML内容
            content={content} // 信息窗显示文字，支持HTML内容
            point={point} // 显示位置坐标
            offset={offset} // 信息窗位置偏移值。
            width={width} // 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整
            height={height} // 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整
            maxWidth={maxWidth} // 信息窗最大化时的宽度，单位像素。取值范围：220 - 730
            autoPan={autoPan} // 是否开启信息窗口打开时地图自动移动（默认开启）
            closeOnClick={closeOnClick} // 是否开启点击地图关闭信息窗口（默认开启）
            displayMessage={displayMessage} // 是否在信息窗里显示短信发送按钮（默认开启）
            message={message} // 自定义部分的短信内容
            events={events} // 绑定事件
          />
        </Map>

        <button onClick={this.handleTitle}>改变title</button>
        <button onClick={this.handleContent}>改变content</button>
        <button onClick={this.handlePoint}>改变point</button>
        <button onClick={this.handleOffset}>改变offset</button>
        <button onClick={this.handleWidth}>改变width</button>
        <button onClick={this.handleHeight}>改变height</button>
        <button onClick={this.handleMaxWidth}>改变maxWidth</button>
        <button onClick={this.handleAutoPan}>改变autoPan</button>
        <button onClick={this.handleCloseOnClick}>改变closeOnClick</button>
        <button onClick={this.handleDisplayMessage}>改变displayMessage</button>
        <button onClick={this.handleMessage}>改变message</button>
        <button onClick={this.handleEvents}>改变events</button>
      </div>
    );
  }

}

export default App;
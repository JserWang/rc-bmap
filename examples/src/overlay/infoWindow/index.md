import React from 'react';
import { Button } from 'antd';
import {
  Map, InfoWindow,
} from 'rc-bmap';

class InfoWindowExample extends React.Component {
  constructor(props) {
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
      width: 220,
      height: 60,
      maxWidth: 250,
      autoPan: false,
      closeOnClick: false,
      displayMessage: false,
      message: '短信内容',
      events: {
        open: this.handleOpen,
      },
      visible: true,
    };
  }

  handleDisplay = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible,
    });
  }

  handleOpen = () => {
    console.log('InfoWindow open');
  }


  handleClose = () => {
    console.log('InfoWindow close');
  }

  handleTitle = () => {
    const { title } = this.state;
    this.setState({
      title: title === '弹出框新标题' ? '弹出框标题' : '弹出框新标题',
    });
  }

  handleContent = () => {
    const { content } = this.state;
    this.setState({
      content: content === '弹出框新内容' ? '弹出框内容' : '弹出框新内容',
    });
  }

  handlePoint = () => {
    const { point } = this.state;
    this.setState({
      point: {
        lng: point.lng + 0.001,
        lat: point.lat + 0.001,
      },
    });
  }

  handleOffset = () => {
    const { offset } = this.state;
    this.setState({
      offset: {
        width: offset.width + 3,
        height: offset.height + 3,
      },
    });
  }

  handleWidth = () => {
    const { width } = this.state;
    this.setState({
      width: width + 10,
    });
  }

  handleHeight = () => {
    const { height } = this.state;
    this.setState({
      height: height + 10,
    });
  }

  handleMaxWidth = () => {
    this.setState({
      maxWidth: 300,
    });
  }

  handleAutoPan = () => {
    const { autoPan } = this.state;
    this.setState({
      autoPan: !autoPan,
    });
  }

  handleCloseOnClick = () => {
    const { closeOnClick } = this.state;
    this.setState({
      closeOnClick: !closeOnClick,
    });
  }

  handleDisplayMessage = () => {
    const { displayMessage } = this.state;
    this.setState({
      displayMessage: !displayMessage,
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
        close: this.handleClose,
      },
    });
  }

  render() {
    const {
      title, content, point, offset, width, height, visible,
      maxWidth, autoPan, closeOnClick, displayMessage, message, events,
    } = this.state;
    return (
      <React.Fragment>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            {
              visible && (
              <InfoWindow
                title={title}
                content={content}
                point={point}
                offset={offset}
                width={width}
                height={height}
                maxWidth={maxWidth}
                autoPan={autoPan}
                closeOnClick={closeOnClick}
                displayMessage={displayMessage}
                message={message}
                events={events}
              />
              )
            }
          </Map>
        </div>
        <Button onClick={this.handleDisplay}>
          { visible ? '隐藏信息框' : '显示信息框' }
        </Button>
        <Button onClick={this.handleTitle}>改变title</Button>
        <Button onClick={this.handleContent}>改变content</Button>
        <Button onClick={this.handlePoint}>改变point</Button>
        <Button onClick={this.handleOffset}>改变offset</Button>
        <Button onClick={this.handleWidth}>改变width</Button>
        <Button onClick={this.handleHeight}>改变height</Button>
        <Button onClick={this.handleMaxWidth}>改变maxWidth</Button>
        <Button onClick={this.handleAutoPan}>
          { autoPan ? '地图移动时禁用自动移动' : '地图移动时启用自动个移动' }
        </Button>
        <Button onClick={this.handleCloseOnClick}>
          { closeOnClick ? '禁用点击地图时关闭' : '点击地图时关闭' }
        </Button>
        <Button onClick={this.handleDisplayMessage}>
          { displayMessage ? '在信息窗口中隐藏短信发送按钮' : '在信息窗口中显示短信发送按钮' }
        </Button>
        <Button onClick={this.handleMessage}>改变message</Button>
        <Button onClick={this.handleEvents}>改变events</Button>
      </React.Fragment>
    );
  }
}

export default InfoWindowExample;

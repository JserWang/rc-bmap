import React, { Component } from 'react';
import { Map, Boundary } from 'rc-bmap';
import { Button } from 'antd';
import Container from 'components/Container';
import index from './index.md';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '杭州市萧山区',
      onError: () => {
        console.log('onError');
      },
      autoViewport: true,
      strokeColor: 'blue',
      fillColor: 'red',
      strokeWeight: 5,
      strokeOpacity: 0.5,
      fillOpacity: 0.9,
      strokeStyle: 'dashed',
      massClear: false,
      editing: false,
      clicking: true,
      events: {
        click() {
          console.log('Boundary click');
        },
      },
    };
  }

  handleName=() => {
    this.setState({
      name: '北京市朝阳区',
    });
    console.log(this.name);
  }

  handleOnError =() => {
    this.setState({
      onError: () => {
        console.log('onError');
      },
    });
  }

  handleAutoViewport =() => {
    this.setState({
      autoViewport: true,
    });
    console.log(' autoViewport:true');
  }

  handleStrokeColor =() => {
    this.setState({
      strokeColor: 'red',
    });
    console.log('  strokeColor:red');
  }

  handleFillColor =() => {
    this.setState({
      fillColor: 'blue',
    });
    console.log('   fillColor:blue');
  }

  handleStrokeWeight =() => {
    this.setState({
      strokeStyle: 10,
    });
    console.log('  strokeStyle:10');
  }

  handleStrokeOpacity =() => {
    this.setState({
      strokeOpacity: 0.1,
    });
    console.log('strokeOpacity:0.1');
  }

  handleStrokeStyle =() => {
    this.setState({
      strokeStyle: 'solid',
    });
    console.log('  strokeStyle:solid');
  }

  handleMassClear=() => {
    this.setState({
      massClear: true,
    });
    console.log('massClear:true');
  }

  handleEditing=() => {
    this.setState({
      editing: true,
    });
    console.log('editing:true');
  }

  handleClicking=() => {
    this.setState({
      clicking: false,
    });
    console.log(' clicking:false');
  }

  handleEvents=() => {
    this.setState({

    });
    console.log('');
  }

  render() {
    const {
      name, onError, autoViewport, strokeColor,
      fillColor, strokeWeight, strokeOpacity, fillOpacity, strokeStyle,
      massClear, editing, clicking, events,
    } = this.state;
    return (
      <Container code={index}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          >
            <Boundary
              name={name} // 行政区域名字
              onError={onError} // 初始化失败回调
              autoViewport={autoViewport} // 添加完成后是否自动移动
              strokeColor={strokeColor} // 边线颜色
              fillColor={fillColor} // 填充颜色。当参数为空时，圆形将没有填充效果
              strokeWeight={strokeWeight} // 边线的宽度，以像素为单位
              strokeOpacity={strokeOpacity} // 边线透明度，取值范围0 - 1
              fillOpacity={fillOpacity} // 填充的透明度，取值范围0 - 1
              strokeStyle={strokeStyle} // 边线的样式，solid或dashed
              massClear={massClear} // 是否在调用map.clearOverlays清除此覆盖物，默认为true
              editing={editing} // 是否启用线编辑，默认为false
              clicking={clicking} // 是否响应点击事件，默认为true
              events={events}
            />
          </Map>
        </div>
        <Button className="butt" onClick={this.handleName}> 行政区域名字</Button>
        <Button className="butt" onClick={this.handleOnError}>初始化失败回调</Button>
        <Button className="butt" onClick={this.handleAutoViewport}>添加完成后是否自动移动</Button>
        <Button className="butt" onClick={this.handleStrokeColor}>边线颜色</Button>
        <Button className="butt" onClick={this.handleFillColor}>填充颜色</Button>
        <Button className="butt" onClick={this.handleStrokeWeight}>边线的宽度</Button>
        <Button className="butt" onClick={this.handleStrokeOpacity}>填充的透明度</Button>
        <Button className="butt" onClick={this.handleStrokeStyle}>边线的样式</Button>
        <Button className="butt" onClick={this.handleMassClear}>是否在清除此覆盖物</Button>
        <Button className="butt" onClick={this.handleEditing}>是否启用线编辑</Button>
        <Button className="butt" onClick={this.handleClicking}>是否响应点击事件</Button>
        <Button className="butt" onClick={this.handleEvents}>绑定事件</Button>
      </Container>
    );
  }
}

export default App;

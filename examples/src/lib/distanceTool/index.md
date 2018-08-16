import React from 'react';
import { Button } from 'antd';
import {
  Map,
  DistanceTool,
} from 'rc-bmap';
import { getRandomColor } from 'utils';

class DistanceToolExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followText: '单击确定地点，双击结束',
      unit: 'metric',
      lineColor: '#ff6319',
      lineStroke: 2,
      opacity: 0.8,
      lineStyle: 'solid',
      cursor: 'http://is4.mzstatic.com/image/thumb/Purple122/v4/74/cf/18/74cf1856-76c6-2782-df5a-5637454f6974/source/512x512bb.jpg',
      tool: '',
      events: {
        onaddpoint() {
          console.log('on add');
        },
      },
    };
  }

  openTool = () => {
    const { tool } = this.state;
    tool.open(); // 开启测距状态
  };

  closeTool = () => {
    const { tool } = this.state;
    tool.close(); // 关闭测距状态
  };

  getTool = (instance) => {
    this.state.tool = instance;
  };

  handleText = () => {
    this.setState({
      followText: '这是一条新的提示信息',
    });
  }

  handleUnit = () => {
    const { unit } = this.state;
    this.setState({
      unit: unit === 'us' ? 'metric' : 'us',
    });
  }

  handleLineColor = () => {
    this.setState({
      lineColor: getRandomColor(),
    });
  }

  handleLineStroke = () => {
    this.setState({
      lineStroke: 3,
    });
  }

  handleOpacity = () => {
    let { opacity } = this.state;
    if (opacity > 0.9) {
      opacity = 1;
    }
    this.setState({
      opacity: opacity + 0.1,
    });
  }

  handleLineStyle = () => {
    const { lineStyle } = this.state;
    this.setState({
      lineStyle: lineStyle === 'dashed' ? 'solid' : 'dashed',
    });
  }

  handleCursor = () => {
    this.setState({
      cursor: 'http://api.map.baidu.com/images/ruler.cur',
    });
  }

  render() {
    const {
      followText, unit, lineColor, lineStroke, opacity, lineStyle, cursor, events,
    } = this.state;
    return (
      <React.Fragment>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
            mapMounted={this.mapMounted}
          >
            <DistanceTool
              followText={followText}
              unit={unit}
              lineColor={lineColor}
              lineStroke={lineStroke}
              opacity={opacity}
              lineStyle={lineStyle}
              cursor={cursor}
              getInstance={this.getTool}
              events={events}
            />
          </Map>
          <Button onClick={this.openTool}>开启</Button>
          <Button onClick={this.closeTool}>关闭</Button>
          <Button onClick={this.handleText}>改变提示内容</Button>
          <Button onClick={this.handleUnit}>改变单位</Button>
          <Button onClick={this.handleLineColor}>随机改变线条颜色</Button>
          <Button onClick={this.handleLineStroke}>改变线宽</Button>
          <Button onClick={this.handleOpacity}>改变透明度</Button>
          <Button onClick={this.handleLineStyle}>改变线条样式</Button>
          <Button onClick={this.handleCursor}>改变鼠标样式</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default DistanceToolExample;

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Map, ControlAnchor, Symbol, SymbolShapeType } from 'rc-bmap';
import { Button } from 'antd';
import Container from 'components/Container';
import symbol from './index.md'
class App extends Component {
constructor(props){
super(props);
this.state = {
path: SymbolShapeType.FORWARD_CLOSED_ARROW,
anchor: ControlAnchor.TOP_RIGHT, 
fillColor: "red",
fillOpacity: 0.8,
scale: 5,
rotation: 0,
strokeColor: "blue",
strokeOpacity: 0.8,
strokeWeight: 1
}
}

handleAnchor = () => {
this.setState({
anchor: ControlAnchor.TOP_LEFT,
})
}

handlePath=()=>{
  this.setState({
    path:RECTANGLE.FORWARD_CLOSED_ARROW
  })
}

handleFillColor=()=>{
  this.setState({
    fillColor:"bule"
  })
}
handleFillOpacity=()=>{
  this.setState({
    fillOpacity:0.2
  })
}
handleScale=()=>{
  this.setState({
    scale:2
  })
}
handleRotation=()=>{
  this.setState({
    rotation:5
  })
}


handleStrokeColor=()=>{
  this.setState({
    strokeColor:"green"
  })
}

handleStrokeOpacity=()=>{
  this.setState({
    strokeOpacity:0.3
  })
}

handleStrokeWeight=()=>{
  this.setState({
    strokeWeight:2
  })
}


onChangeBefore = () => {
console.log('onChangeBefore')
}
onChangeAfter = () => {
console.log('onChangeAfter')
}

render() {
const { path, anchor, fillColor, fillOpacity, scale, rotation, strokeColor, strokeOpacity, strokeWeight } = this.state;
return (
    <Container code={symbol}>
    <div style={{ height: '90vh' }}>
<Map 
ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
scrollWheelZoom
>
<Symbol 
path={path} 
anchor={anchor}
fillColor={fillColor}
fillOpacity={fillOpacity}
scale={scale}
rotation={rotation}
strokeColor={strokeColor}
strokeOpacity={strokeOpacity}
strokeWeight={strokeWeight}
/>
</Map>
</div>
<Button onClick={this.handlePath}>改变图标的路径</Button>
<Button onClick={this.handleAnchor}>改变停靠位置</Button>
<Button onClick={this.handleFillColor}>设置矢量图标的填充颜色</Button>
<Button onClick={this.handleFillOpacity}>设置矢量图标填充透明度</Button>
<Button onClick={this.handleScale}>设置矢量图标的缩放比例</Button>
<Button onClick={this.handleRotation}>设置矢量图标的旋转角度</Button>
<Button onClick={this.handleStrokeColor}>设置矢量图标的线填充颜色 </Button>
<Button onClick={this.handleStrokeOpacity}>设置矢量图标线的透明度</Button>
<Button onClick={this.handleStrokeWeight}>旋设置线宽</Button>
</Container>


);
}
}

ReactDOM.render(<App />, document.getElementById('root'));

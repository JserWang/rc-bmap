import React, { Component } from 'react';
import { Map , PointCollection} from 'rc-bmap';
import { Button } from 'antd';
import Container from 'components/Container';
import pointcollection from './index.md';

class App extends Component {
constructor(props){
  super(props)
  this.state={
    color:'#fa937e',
    shape:'CIRCLE',
    size:'4',
    points:[{
      lng: 116.3964,
      lat: 40.9093,
    }],
    events:{
    Clik(){
      alert('这是一个事件');
    }
    }
  }
}

handleEvents=()=>{
  this.setState({
    Clik(){
      console.log('我点击了');
    }
       
  })
}
handleSize=()=>{
this.setState({
  size:'SMALLER'
})
console.log("1");
}

handlepoint=()=>{
   this.setState({
     points:[{
       lng:126.332782, 
       lat:39.00797
     }]
   })
   console.log("2");
}

handleshape=()=>{
  this.setState({
    shape:'STAR'
  })
  console.log("3");
}
handleColor=()=>{
  this.setState({
     color:'#0000'
  })
  console.log("4");
}


  render() {

    const {points,size,shape,color,events}=this.state;
    return (
        <Container code={pointcollection}>
        <div style={{ height: '90vh' }}>
          <Map
    ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
    scrollWheelZoom
    center={mapCenter}
    zoom={5}
  >
    <PointCollection
      points={points} // 点集合
      shape={shape} // 海量点的预设形状
      size={size}  //定义点尺寸的大小
      color={color} // 海量点的颜色，默认为'#fa937e'
      events={events} // 绑定事件
    ></PointCollection>
  </Map>
  </div>
  <Button className="butt" onClick={this.handlepoint}>点集合</Button>
  <Button className="butt" onClick={this.handleColor}>海量点的预设形状</Button>
  <Button className="butt" onClick={this.handleshape}>定义点尺寸的大小</Button>
  <Button className="butt" onClick={this.handleSize}>海量点的颜色</Button>
  <Button className="butt" onClick={this.handleEvents}>绑定事件</Button>

     </Container>
    );
  }
}

export default App;

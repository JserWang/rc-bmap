function getRandomIndex(arr) {
  return Math.floor((Math.random() * arr.length));
}

const randomColorArr = ['red', 'green', 'blue', 'orange', 'black', 'white'];
export function getRandomColor() {
  return randomColorArr[getRandomIndex(randomColorArr)];
}

const randomBoundaryArr = ['北京市海淀区', '北京市朝阳区', '北京市昌平区', '北京市房山区', '北京市东城区', '北京市西城区'];
export function getRandomBoundary() {
  return randomBoundaryArr[getRandomIndex(randomBoundaryArr)];
}

const randomSymbolShapeArr = [
  'CIRCLE',
  'RECTANGLE',
  'RHOMBUS',
  'STAR',
  'BACKWARD_CLOSED_ARROW',
  'FORWARD_CLOSED_ARROW',
  'BACKWARD_OPEN_ARROW',
  'FORWARD_OPEN_ARROW',
  'POINT',
  'PLANE',
  'CAMERA',
  'WARNING',
  'SMILE',
  'CLOCK',
];
export function getRandomSymbolShape() {
  return randomSymbolShapeArr[getRandomIndex(randomSymbolShapeArr)];
}

const randomShapeArr = ['CIRCLE', 'STAR', 'SQUARE', 'RHOMBUS', 'WATERDROP'];
export function getRandomShape() {
  return randomShapeArr[getRandomIndex(randomShapeArr)];
}

const randomControlAnchor = ['TOP_LEFT', 'TOP_RIGHT', 'BOTTOM_LEFT', 'BOTTOM_RIGHT'];
export function getRandomControlAnchor() {
  return randomControlAnchor[getRandomIndex(randomControlAnchor)];
}

const randomNavigationType = ['LARGE', 'SMALL', 'PAN', 'ZOOM'];
export function getRandomNavigationType() {
  return randomNavigationType[getRandomIndex(randomNavigationType)];
}

const randomMapType = ['NORMAL', 'PERSPECTIVE', 'SATELLITE', 'HYBRID'];
export function getRandomMapType() {
  return randomMapType[getRandomIndex(randomMapType)];
}

const randomMapTypeControlType = ['HORIZONTAL', 'DROPDOWN', 'MAP'];
export function getRandomMapTypeControlType() {
  return randomMapTypeControlType[getRandomIndex(randomMapTypeControlType)];
}

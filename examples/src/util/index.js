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

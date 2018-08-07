module.exports = {
  title: 'rc-bmap',
  description: '像使用React组件一样使用百度地图',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: '示例', link: '/demo/' },
      { text: 'GitHub', link: 'https://github.com/JserWang/rc-bmap' },
    ],
    sidebar: {
      '/guide/': getSiderbarConfig('指南'),
      '/api/': getApiSiderbarConfig('API'),
    }
  }
}

function getSiderbarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        'getting-started',
        '',
        'map',
        'control',
        'overlay',
        'route',
        'lib',
        'other',
        'constants',
        
      ]
    }
  ]
}

function getApiSiderbarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'transitRoute',
        'drivingRoute',
        'ridingRoute',
        'walkingRoute',
        'localSearch',
        'busLineSearch',
        'navigation',
        'geolocation',
        'overviewMap',
        'scale',
        'copyright',
        'mapTypeCtrl',
        'panorama',
        'cityList',
        'heatmap',
        'trafficControl',
        'distanceTool'
      ]
    }
  ]
}
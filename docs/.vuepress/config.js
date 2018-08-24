module.exports = {
  title: 'React&百度地图',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
  ],
  description: '像使用React组件一样使用百度地图',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/getting-started.html' },
      { text: 'API', link: '/api/' },
      { text: '示例', link: 'https://bmap.jser-club.com/examples' },
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
        'question'
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
        'map',
        'navigation',
        'geolocation',
        'overviewMap',
        'scale',
        'copyright',
        'mapTypeCtrl',
        'panorama',
        'cityList',
        'marker',
        'symbol',
        'label',
        'infowindow',
        'polyline',
        'circle',
        'polygon',
        'boundary',
        'pointcollection',
        'ground',
        'transitRoute',
        'drivingRoute',
        'ridingRoute',
        'walkingRoute',
        'localSearch',
        'busLineSearch',
        'markerClusterer',
        'curveLine',
        'drawingmanager',
        'heatmap',
        'trafficControl',
        'distanceTool',
        'autocomplete',
        'tile',
      ]
    }
  ]
}
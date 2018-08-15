import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Demo1 from './map/Demo1';
import Navigation from './control/navigation/index';
import Geolocation from './control/geolocation/index';
import OverviewMap from './control/overviewMap/index';
import Scale from './control/scale/index';
import Panorama from './control/panorama/index';
import Copyright from './control/copyright/index';
import CityList from './control/cityList/index';
import MapTypeCtrl from './control/mapTypeCtrl/index';
import TransitRoute from './service/transitRoute/index';
import DrivingRoute from './service/drivingRoute/index';
import RidingRoute from './service/ridingRoute/index';
import WalkingRoute from './service/walkingRoute/index';
import LocalSearch from './service/localSearch/index';
import BusLineSearch from './service/busLineSearch/index';
import MarkerClusterer from './lib/markerClusterer/index';
import CurveLine from './lib/curveLine/index';
import DrawingManager from './lib/drawingManager/index';
import Heatmap from './lib/heatmap/index';
import TrafficControl from './lib/trafficControl/index';
import DistanceTool from './lib/distanceTool/index';
import Tile from './other/tile/index';
import Boundary from './overlay/boundary/index';
import Symbol from './overlay/symbol/index';
import PointCollection from './overlay/pointCollection/index';
import Ground from './overlay/ground/index';
import Circle from './overlay/circle/index';
import InfoWindow from './overlay/infoWindow/index';
import Label from './overlay/label/index';
import Marker from './overlay/marker/index';
import Polygon from './overlay/polygon/index';
import Polyline from './overlay/polyline/index';

const route = () => (
  <Switch>
    <Route exact path="/" component={Demo1} />
    <Route path="/demo1" component={Demo1} />
    <Route path="/navigation" component={Navigation} />
    <Route path="/geolocation" component={Geolocation} />
    <Route path="/overViewMap" component={OverviewMap} />
    <Route path="/scale" component={Scale} />
    <Route path="/copyright" component={Copyright} />
    <Route path="/mapTypeCtrl" component={MapTypeCtrl} />
    <Route path="/panorama" component={Panorama} />
    <Route path="/cityList" component={CityList} />
    <Route path="/transitRoute" component={TransitRoute} />
    <Route path="/drivingRoute" component={DrivingRoute} />
    <Route path="/ridingRoute" component={RidingRoute} />
    <Route path="/walkingRoute" component={WalkingRoute} />
    <Route path="/localSearch" component={LocalSearch} />
    <Route path="/busLineSearch" component={BusLineSearch} />
    <Route path="/markerClusterer" component={MarkerClusterer} />
    <Route path="/curveLine" component={CurveLine} />
    <Route path="/drawingManager" component={DrawingManager} />
    <Route path="/heatmap" component={Heatmap} />
    <Route path="/trafficControl" component={TrafficControl} />
    <Route path="/distanceTool" component={DistanceTool} />
    <Route path="/tile" component={Tile} />
    <Route path="/boundary" component={Boundary} />
    <Route path="/symbol" component={Symbol} />
    <Route path="/pointCollection" component={PointCollection} />
    <Route path="/ground" component={Ground} />
    <Route path="/circle" component={Circle} />
    <Route path="/infoWindow" component={InfoWindow} />
    <Route path="/label" component={Label} />
    <Route path="/marker" component={Marker} />
    <Route path="/polygon" component={Polygon} />
    <Route path="/polyline" component={Polyline} />
  </Switch>
);

export default route;

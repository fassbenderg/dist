import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';
import 'ol/ol.css';

import {getPlanetApiKey} from './login.js'

const map = new Map({
 target: 'map',
 layers: [
   new TileLayer({
     source: new XYZ({
       url: 'https://tiles{0-3}.planet.com/basemaps/v1/planet-tiles/global_monthly_2020_01_mosaic/gmap/{z}/{x}/{y}.png?api_key=' + getPlanetApiKey()
     })
   })
 ],
 view: new View({
   center: fromLonLat([-122.395, 37.783]),
   zoom: 12
 })
});



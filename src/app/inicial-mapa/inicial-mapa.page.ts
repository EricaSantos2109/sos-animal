import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import { defaults as defaultControls } from 'ol/control';

@Component({
  selector: 'app-inicial-mapa',
  templateUrl: './inicial-mapa.page.html',
  styleUrls: ['./inicial-mapa.page.scss'],
})
export class InicialMapaPage implements OnInit, AfterViewInit {
  @ViewChild('mapElementRef') mapElementRef: ElementRef;

  public map: Map;

  constructor() { }

  ngOnInit() {
    this.map = new Map({
      target: 'map',
      controls: defaultControls(),
      layers: [
        new TileLayer({
          source: new OSM(),
        })
      ],
      view: new View({
        center: fromLonLat([-45.8872969, -23.1805011]),
        zoom: 13,
        projection: 'EPSG:3857'
      }),
    });
  }

  ngAfterViewInit() {
    // Tive que atrasar a inicialização do mapa em 1 seg devido à problemas do ionic.
    setTimeout(() => {
      this.map.setTarget(this.mapElementRef.nativeElement);
    }, 1000);
  }
}

import React, {Component} from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components'
import habou from '../../assets/pin2.png';
import Philae from '../../assets/pin2.png';
import Hatchepsout from '../../assets/pin2.png';
import Memnon from '../../assets/pin2.png';
import Sethi from '../../assets/pin2.png';
import Sobek from '../../assets/pin2.png';
import Louxor from '../../assets/pin2.png';
import Horus from '../../assets/pin2.png';
import Simbel from '../../assets/pin2.png';
import Karnak from '../../assets/pin2.png';
import Djeser from '../../assets/pin2.png'
import Snefrou from '../../assets/pin2.png'
import Kheops from '../../assets/pin2.png'
import Gizeh from '../../assets/pin2.png'
import Mykerinos from '../../assets/pin2.png'

const Height = styled.div`
  height: 500px;
  width: 100vw;
`

const Main = styled.div`
margin-top: 48.4vh;
`

class Maps extends Component {
  
  state = {
    habouIcon: {
      lat: 25.7129,
      lng: 32.6019,
    },
    PhilaeIcon: {
      lat: 24.02509,
      lng: 32.88447,
    },
    HatchepsoutIcon: {
      lat: 25.7334,
      lng: 32.6263,
    },
    MemnonIcon: {
      lat: 25.7156,
      lng: 32.6105,
    },
    SethiIcon: {
      lat: 26.1799,
      lng: 31.9189,
    },
    SobekIcon: {
      lat: 24.45252,
      lng: 32.92736,
    },
    LouxorIcon: {
      lat: 25.6951,
      lng: 32.6394,
    },
    HorusIcon: {
      lat: 25.6951,
      lng: 32.6394,
    },
    SimbelIcon: {
      lat: 22.3322,
      lng: 31.626,
    },
    KarnakIcon: {
      lat: 25.7129,
      lng: 32.6579,
    },
    DjeserIcon: {
      lat: 29.8665,
      lng: 31.2163,
    },
    SnefrouIcon: {
      lat: 29.7853,
      lng: 31.2089,
    },
    KheopsIcon: {
      lat: 29.9802,
      lng: 31.1335,
    },
    GizehIcon: {
      lat: 29.9754,
      lng: 31.1315,
    },
    MykerinosIcon: {
      lat: 29.9724,
      lng: 31.1285,
    },

    zoom: 13
  }


  HabouIcon = L.icon({
    iconUrl: habou,
    iconSize:     [60, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76]
  });

  PhilaeIcon = L.icon({
    iconUrl: Philae,
    iconSize:     [60, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -86]
  });

  HatchepsoutIcon = L.icon({
    iconUrl: Hatchepsout,
    iconSize:     [60, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -86]
  });

  MemnonIcon = L.icon({
    iconUrl: Memnon,
    iconSize:     [60, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -86]
  });

  SethiIcon = L.icon({
    iconUrl: Sethi,
    iconSize:     [60, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -86]
  });

  SobekIcon = L.icon({
    iconUrl: Sobek,
    iconSize:     [60, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -86]
  });

  LouxorIcon = L.icon({
    iconUrl: Louxor,
    iconSize:     [60, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -86]
  });

  HorusIcon = L.icon({
    iconUrl: Horus,
    iconSize:     [60, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -86]
  });

  SimbelIcon = L.icon({
    iconUrl: Simbel,
    iconSize:     [60, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -86]
  });

  KarnakIcon = L.icon({
    iconUrl: Karnak,
    iconSize:     [60, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -86]
  });

  DjeserIcon = L.icon({
    iconUrl: Djeser,
    iconSize:     [60, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -86]
  });

  SnefrouIcon = L.icon({
    iconUrl: Snefrou,
    iconSize:     [60, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -86]
  });

  KheopsIcon = L.icon({
    iconUrl: Kheops,
    iconSize:     [60, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -86]
  });

  GizehIcon = L.icon({
    iconUrl: Gizeh,
    iconSize:     [60, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -86]
  });

  MykerinosIcon = L.icon({
    iconUrl: Mykerinos,
    iconSize:     [60, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -86]
  });

  

  render(){
    const positionPhilaeIcon = [this.state.PhilaeIcon.lat, this.state.PhilaeIcon.lng];
    const positionHabouIcon = [this.state.habouIcon.lat, this.state.habouIcon.lng];
    const positionHatchepsoutIcon = [this.state.HatchepsoutIcon.lat, this.state.HatchepsoutIcon.lng];
    const positionMemnonIcon = [this.state.MemnonIcon.lat, this.state.MemnonIcon.lng];
    const positionSethiIcon = [this.state.SethiIcon.lat, this.state.SethiIcon.lng];
    const positionSobekIcon = [this.state.SobekIcon.lat, this.state.SobekIcon.lng];
    const positionLouxorIcon = [this.state.LouxorIcon.lat, this.state.LouxorIcon.lng];
    const positionHorusIcon = [this.state.HorusIcon.lat, this.state.HorusIcon.lng];
    const positionSimbelIcon = [this.state.SimbelIcon.lat, this.state.SimbelIcon.lng];
    const positionKarnakIcon = [this.state.KarnakIcon.lat, this.state.KarnakIcon.lng];
    const positionDjeserIcon = [this.state.DjeserIcon.lat, this.state.DjeserIcon.lng];
    const positionSnefrouIcon = [this.state.SnefrouIcon.lat, this.state.SnefrouIcon.lng];
    const positionKheopsIcon = [this.state.KheopsIcon.lat, this.state.KheopsIcon.lng];
    const positionGizehIcon = [this.state.GizehIcon.lat, this.state.GizehIcon.lng];
    const positionMykerinosIcon = [this.state.MykerinosIcon.lat, this.state.MykerinosIcon.lng];

    return (
      <Main>
      <MapContainer className="map" center={positionHabouIcon} zoom={this.state.zoom}>
        <Height>
        <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionHabouIcon} icon={this.HabouIcon}>
          <Popup>
          Médinet Habou
          </Popup>
        </Marker>
        <Marker position={positionPhilaeIcon} icon={this.PhilaeIcon}>
          <Popup>
          Le Temple d’Isis à Philae
          </Popup>
        </Marker>
        <Marker position={positionHatchepsoutIcon} icon={this.HatchepsoutIcon}>
          <Popup>
          Le temple de Hatchepsout
          </Popup>
        </Marker>
        <Marker position={positionMemnonIcon} icon={this.MemnonIcon}>
          <Popup>
          Les Colosses de Memnon
          </Popup>
        </Marker>
        <Marker position={positionSethiIcon} icon={this.SethiIcon}>
          <Popup>
          Le Temple funéraire de Séthi Ier
          </Popup>
        </Marker>
        <Marker position={positionSobekIcon} icon={this.SobekIcon}>
          <Popup>
          Le Temple de Sobek et Haroëris
          </Popup>
        </Marker>
        <Marker position={positionLouxorIcon} icon={this.LouxorIcon}>
          <Popup>
          Le Temple d’Amon à Louxor
          </Popup>
        </Marker>
        <Marker position={positionHorusIcon} icon={this.HorusIcon}>
          <Popup>
          Le Temple d’Horus à Edfou
          </Popup>
        </Marker>
        <Marker position={positionSimbelIcon} icon={this.SimbelIcon}>
          <Popup>
          Les Temples d’Abou Simbel
          </Popup>
        </Marker>
        <Marker position={positionKarnakIcon} icon={this.KarnakIcon}>
          <Popup>
          Le Temple de Karnak
          </Popup>
        </Marker>
        <Marker position={positionDjeserIcon} icon={this.DjeserIcon}>
          <Popup>
          La Pyramide à degré de Djéser
          </Popup>
        </Marker>
        <Marker position={positionSnefrouIcon} icon={this.SnefrouIcon}>
          <Popup>
          La pyramide rhomboïdale 
          </Popup>
        </Marker>
        <Marker position={positionKheopsIcon} icon={this.KheopsIcon}>
          <Popup>
          La grande pyramide de Khéops
          </Popup>
        </Marker>
        <Marker position={positionGizehIcon} icon={this.GizehIcon}>
          <Popup>
          La pyramide de Khéphren
          </Popup>
        </Marker>
        <Marker position={positionMykerinosIcon} icon={this.MykerinosIcon}>
          <Popup>
          La pyramide de Mikérinos
          </Popup>
        </Marker>
        </Height>
      </MapContainer>
      </Main>
    );
  }
}

export default Maps;

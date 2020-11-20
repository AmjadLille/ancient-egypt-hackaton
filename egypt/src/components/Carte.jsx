import React, { Component } from 'react';

import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import './Carte.css';

import RedLeaf from '../assets/RedLeaf.png';
import LeafShadow from '../assets/LeafShadow.png';
import CharUn from '../assets/CharUn.png'
import CharDeux from '../assets/CharDeux.png'
import TouTanKaMont from '../assets/TouTanKaMont.png'
class Carte extends Component {
  constructor(props) {
    super(props);
  this.CharUnMove = this.CharUnMove.bind(this);
   this.CharDeuxMove = this.CharDeuxMove.bind(this);

   
    this.state = {
    
      UserLocationIcon: {
        lat: 29.940830,
        lng: 31.650156,
      },
      CharUnIcon: {
        lat: 29.94099,
        lng: 31.653156,
      },
      CharDeuxIcon: {
        lat: 29.9378,
        lng: 31.654156,
      },
      TouTanKaMontIcon: {
        lat: 29.975455,
        lng: 31.138190,
      },
      CenterOftheMap: {
        lat: 29.937828,
        lng: 31.654156,
      },
      zoom: 15,
      Winner: null,
    };


    this.UserLocationIcon = L.icon({
      iconUrl: RedLeaf,
      shadowUrl: LeafShadow,
      iconSize: [38, 95], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76],//popup icon position
    });

  this.TouTanKaMontIcon = L.icon({
      iconUrl: TouTanKaMont,
      iconSize: [100, 100], // size of the icon
      iconAnchor: [50, 50], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -76],//popup icon position
    });
  
  this.CharUnIcon = L.icon({
    iconUrl: CharUn,
    iconSize: [100, 100], // size of the icon
    iconAnchor: [50, 50], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76],//popup icon position
  });

this.CharDeuxIcon = L.icon({
  iconUrl: CharDeux,
  iconSize: [100, 100], // size of the icon
  iconAnchor: [50, 50], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76],//popup icon position
});
}
 
CharUnMove(target){
  if (target.key === 'q') {
  let latitude = this.state.CharUnIcon.lat;
  let longitude = this.state.CharUnIcon.lng;
  let a = latitude ;
  let b =  longitude - 0.004; 
  this.setState ({  CharUnIcon: {
    lat: a,
    lng: b}})    
    this.getDistance
    ({  CharUnIcon: {
      lat: a,
      lng: b}});     
}  if (target.key === 'a') {
  let latitude = this.state.CharUnIcon.lat;
  let longitude = this.state.CharUnIcon.lng;
  let c = latitude + 0.004;
  let d =  longitude;  
  this.setState ({  CharUnIcon: {
    lat: c,
    lng: d}})  
    this.getDistance
      ({  CharUnIcon: {
        lat: c,
        lng: d}});    
}
if (target.key === 'd') {
  let latitude = this.state.CharUnIcon.lat;
  let longitude = this.state.CharUnIcon.lng;
  let c = latitude - 0.004;
  let d =  longitude;  
  this.setState ({  CharUnIcon: {
    lat: c,
    lng: d}})  
    this.getDistance
      ({  CharUnIcon: {
        lat: c,
        lng: d}});    
}

}
CharDeuxMove(target){
  if (target.key === ' ') {
  let latitude = this.state.CharDeuxIcon.lat;
  let longitude = this.state.CharDeuxIcon.lng;
  let c = latitude ;
  let d =  longitude - 0.004; 
  this.setState ({  CharDeuxIcon: {
    lat: c,
    lng: d}})
    this.getDistance
    ({  CharDeuxIcon: {
      lat: c,
      lng: d}});          
}  if (target.key === 'w') {
  let latitude = this.state.CharDeuxIcon.lat;
  let longitude = this.state.CharDeuxIcon.lng;
  let c = latitude + 0.004;
  let d =  longitude;  
  this.setState ({  CharDeuxIcon: {
    lat: c,
    lng: d}}) 
    this.getDistance
    ({  CharDeuxIcon: {
      lat: c,
      lng: d}});      
}
if (target.key === 'j') {
  let latitude = this.state.CharDeuxIcon.lat;
  let longitude = this.state.CharDeuxIcon.lng;
  let c = latitude - 0.004;
  let d =  longitude;  
  this.setState ({  CharDeuxIcon: {
    lat: c,
    lng: d}}) 
    this.getDistance
    ({  CharDeuxIcon: {
      lat: c,
      lng: d}});      
}
this.getDistance()
}

getDistance(){
  const CharUnPosLat = this.state.CharUnIcon.lat;
  const CharUnPosLon = this.state.CharUnIcon.lng;
  const CharDeuxPosLat = this.state.CharDeuxIcon.lat;
  const CharDeuxPosLon = this.state.CharDeuxIcon.lng;
  const LatCharLat = CharDeuxPosLat - CharUnPosLat;
  const LonCharLon = CharDeuxPosLon - CharUnPosLon;
  console.log(LatCharLat)
  const MiddleLat = (CharUnPosLat + CharDeuxPosLat)/2;
  const MiddleLon = (CharUnPosLon + CharDeuxPosLon)/2;
  console.log(this.state.zoom)
  if((LatCharLat > 0.01) || (LatCharLat < -0.01) || (LonCharLon > 0.01) || (LonCharLon < -0.01)){
    this.setState ({zoom : 13, CenterOftheMap : {lat: MiddleLat , lng: MiddleLon } })  
  }
  if((LatCharLat > 0.06) || (LatCharLat < -0.06) || (LonCharLon > 0.06) || (LonCharLon < -0.06)){
    this.setState ({zoom : 12, CenterOftheMap : {lat: MiddleLat , lng: MiddleLon } })  
  }
  if((LatCharLat > 0.1) || (LatCharLat < -0.1) || (LonCharLon > 0.1) || (LonCharLon < -0.1)){
    this.setState ({zoom : 11, CenterOftheMap : {lat: MiddleLat , lng: MiddleLon } })  
  }
  if((LatCharLat > 0.26) || (LatCharLat < -0.26) || (LonCharLon > 0.26) || (LonCharLon < -0.26)){
    this.setState ({zoom : 10, CenterOftheMap : {lat: MiddleLat , lng: MiddleLon } })  
  }
  if((LatCharLat > 0.5) || (LatCharLat < -0.5) || (LonCharLon > 0.5) || (LonCharLon < -0.5)){
    this.setState ({zoom : 9, CenterOftheMap : {lat: MiddleLat , lng: MiddleLon } })  
  }
  const LatUnWinDetecte = (this.state.TouTanKaMontIcon.lat) - CharUnPosLat;
  const LonUnWinDetecte = (this.state.TouTanKaMontIcon.lng) - CharUnPosLon;
  if((LatUnWinDetecte < 0.0002) && (LonUnWinDetecte < 0.0002)){
    this.setState ({ Winner : 'Le joueur 1 à gagné ! Vive le joueur 1'})  
  }
  const LatDeuxWinDetecte = (this.state.TouTanKaMontIcon.lat) - CharDeuxPosLat;
  console.log(LatDeuxWinDetecte)
  const LonDeuxWinDetecte = (this.state.TouTanKaMontIcon.lng) - CharDeuxPosLon;
  if((LatDeuxWinDetecte < 0.0002) && (LonDeuxWinDetecte < 0.0002)){
    this.setState ({ Winner : 'Le joueur 2 à gagné ! Vive le joueur 2'})  
  }


}


  render() {

 
    const LocationIcon = [
      this.state.UserLocationIcon.lat,
      this.state.UserLocationIcon.lng,
    ];
    const CharUnIconLoc = [
      this.state.CharUnIcon.lat,
      this.state.CharUnIcon.lng,
    ];
    const CharDeuxIconLoc = [
      this.state.CharDeuxIcon.lat,
      this.state.CharDeuxIcon.lng,
    ];
    const TouTanKaMontLoc = [
      this.state.TouTanKaMontIcon.lat,
      this.state.TouTanKaMontIcon.lng,
    ];
    return (
      
 
        <div onKeyUp={this.CharUnMove} onKeyDown={this.CharDeuxMove}>
             <p style={{marginLeft:'50vh', color:'white', fontSize:'4vh'}}> Cliquez sur l'écran pour commencer </p>
             <p style={{marginLeft:'50vh', color:'white', fontSize:'4vh'}}> Joueur 1 : qad  </p>
             <p style={{marginLeft:'50vh', color:'white', fontSize:'4vh'}}> Joueur 2 : space w j  </p>
             { this.state.Winner != null ? (<p style={{marginLeft:'50vh', color:'Red', fontSize:'6vh'}}> {this.state.Winner} </p>) : (
              <p style={{marginLeft:'50vh', color:'white', fontSize:'4vh'}}> Pas de Winner  </p>
             )}
              <Map
                className="map"
                center={this.state.CenterOftheMap}
                zoom={this.state.zoom}
              >
                <TileLayer
                  attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
                
                  <Marker position={LocationIcon} icon={this.UserLocationIcon}>
                    <Popup>ça part de là </Popup>
                  </Marker>
                  <Marker position={CharUnIconLoc} icon={this.CharUnIcon}>
                    <Popup>Joueur 1 </Popup>
                  </Marker>
                  <Marker position={CharDeuxIconLoc} icon={this.CharDeuxIcon}>
                    <Popup>Joueur 2 </Popup>
                  </Marker>

                  <Marker position={TouTanKaMontLoc} icon={this.TouTanKaMontIcon}>
                    <Popup>C'est TouTanKaMont ! </Popup>
                  </Marker>
              </Map>
            </div>
    
  
    )};

}
export default Carte;


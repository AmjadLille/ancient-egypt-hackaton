import React, { Component } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import habou from "../../assets/pin2.png";
import Philae from "../../assets/pin2.png";
import Hatchepsout from "../../assets/pin2.png";
import Memnon from "../../assets/pin2.png";
import Sethi from "../../assets/pin2.png";
import Sobek from "../../assets/pin2.png";
import Louxor from "../../assets/pin2.png";
import Horus from "../../assets/pin2.png";
import Simbel from "../../assets/pin2.png";
import Karnak from "../../assets/pin2.png";
import Djeser from "../../assets/pin2.png";
import Snefrou from "../../assets/pin2.png";
import Kheops from "../../assets/pin2.png";
import Gizeh from "../../assets/pin2.png";
import Mykerinos from "../../assets/pin2.png";



const Main = styled.div`
  width: 100%;
  background-image: url("https://wallpaperaccess.com/full/1659875.jpg");
`;

const CarouselStyle = styled.img`
  height: 92vh;
`;

const Title = styled.h1`
  color: white;
  text-shadow: 1px 1px 2px black;
  text-align: center;
  font-size: 2.5em;
  margin: 0;
  padding: 2vh 0 2vh 0;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  background-image: url("https://wallpaperaccess.com/full/1659875.jpg");
`;

const Title2 = styled.h2`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  text-align: center;
  padding: 2vh 0 2vh 0;
  margin: 0;
  font-size: 2em;
  color: white;
  text-shadow: 1px 1px 2px black;
  background-image: url("https://wallpaperaccess.com/full/1659875.jpg");
`;
const TitleP = styled.h2`
  border-top: 3px solid white;
  border-bottom: 3px solid white;
  text-align: center;
  padding: 2vh 0 2vh 0;
  margin: 0;
  color: white;
  text-shadow: 1px 1px 2px black;
`;

const Text = styled.p`
  padding: 0 5vw 0 5vw;
  text-align: center;
  font-size: 1.5em;
  color: white;
  text-shadow: 1px 1px 2px black;
`;

const TextLi = styled.p`
  color: white;
  text-shadow: 1px 1px 2px black;
`;

const StyleLi = styled.li`
  font-size: 1.5em;
  padding: 0 5vw 0 5vw;
  text-align: center;
`;

const StyledUl = styled.ul`
  list-style-type: none;
`;

const MapStyle = styled.div`
  border: 6px solid gold;
`;

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

    zoom: 13,
  };

  HabouIcon = L.icon({
    iconUrl: habou,
    iconSize: [60, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76],
  });

  PhilaeIcon = L.icon({
    iconUrl: Philae,
    iconSize: [60, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -86],
  });

  HatchepsoutIcon = L.icon({
    iconUrl: Hatchepsout,
    iconSize: [60, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -86],
  });

  MemnonIcon = L.icon({
    iconUrl: Memnon,
    iconSize: [60, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -86],
  });

  SethiIcon = L.icon({
    iconUrl: Sethi,
    iconSize: [60, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -86],
  });

  SobekIcon = L.icon({
    iconUrl: Sobek,
    iconSize: [60, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -86],
  });

  LouxorIcon = L.icon({
    iconUrl: Louxor,
    iconSize: [60, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -86],
  });

  HorusIcon = L.icon({
    iconUrl: Horus,
    iconSize: [60, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -86],
  });

  SimbelIcon = L.icon({
    iconUrl: Simbel,
    iconSize: [60, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -86],
  });

  KarnakIcon = L.icon({
    iconUrl: Karnak,
    iconSize: [60, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -86],
  });

  DjeserIcon = L.icon({
    iconUrl: Djeser,
    iconSize: [60, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -86],
  });

  SnefrouIcon = L.icon({
    iconUrl: Snefrou,
    iconSize: [60, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -86],
  });

  KheopsIcon = L.icon({
    iconUrl: Kheops,
    iconSize: [60, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -86],
  });

  GizehIcon = L.icon({
    iconUrl: Gizeh,
    iconSize: [60, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -86],
  });

  MykerinosIcon = L.icon({
    iconUrl: Mykerinos,
    iconSize: [60, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -86],
  });

  render() {
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
        <Title style={{ fontFamily: "'Oswald', sans-serif" }}>Our most iconic monuments</Title>
        <Carousel showArrows={true} showThumbs={false}>
          <div>
            <CarouselStyle src="https://c.pxhere.com/photos/d8/54/temple_of_isis_philae_island_egypt_nile_river_temple_ruins_ancient-1041538.jpg!d" />
            <p className="legend">The Temple of Isis at Philae</p>
          </div>
          <div>
            <CarouselStyle src="https://azimutmonde.files.wordpress.com/2014/03/dsc00712.jpg" />
            <p className="legend">Fresco of the temple of luxor</p>
          </div>
          <div>
            <CarouselStyle src="https://image.jimcdn.com/app/cms/image/transf/dimension=4096x4096:format=jpg/path/s9ab19a6bf391d9a3/image/ie351ff75d9ab1396/version/1558250526/image.jpg" />
            <p className="legend">The Colossi of Memnon</p>
          </div>
          <div>
            <CarouselStyle src="https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/a/1/6a19c310d8_118395_temple-abou-simbel-egypte.jpg" />
            <p className="legend">Abu Simbel Temple</p>
          </div>
          <div>
            <CarouselStyle src="https://i.pinimg.com/originals/ba/a7/47/baa747b106ab9b82e62e27e0d3c6af92.jpg" />
            <p className="legend">The Temple of Sobek and Haroëris</p>
          </div>
        </Carousel>
        <Title2>What you should see</Title2>
        <Text>
          Home of the Pharaohs, Egypt is a dazzling destination of temples and tombs that wow all who visit. It's not all historic treasures, though. With vast tracts of desert, and the famed Nile River, there's something for everyone here.
          <br></br>Egypt has so much for travelers to see and do, it's the perfect country for a mix of activities combining culture, adventure, and relaxation. Find the best places to visit with our list of the top monuments in Egypt.
        </Text>
        <StyledUl>
          <StyleLi>
            <TitleP>Temple of Hatshepsut</TitleP>
            <TextLi> It is a colonnaded structure, which was designed and implemented by Senemut, the royal architect of Hatshepsut, to serve for her posthumous worship and to honor the glory of Amun. The temple is built into a cliff face that rises sharply above it and consists of three layered terraces reaching 30 meters (97 ft ) in height. These terraces are connected by long ramps which were once surrounded by gardens.</TextLi>
          </StyleLi>
          <StyleLi>
            <TitleP>Bent Pyramid</TitleP>
            <TextLi>The Bent Pyramid located at Dahshur was the second pyramid built by pharaoh Sneferu. Mysteriously, the pyramid rises from the desert at an angle of 55 degrees and then suddenly changes to a more gradual angle of 43 degrees. One theory holds that due to the steepness of the original angle the weight to be added above the inner chambers and passageways became to large, forcing the builders to adopt a shallower angle. It is the only pyramid in Egypt of which the outer casing of polished limestone is still largely intact.</TextLi>
          </StyleLi>
          <StyleLi>
            <TitleP>Step Pyramid of Djoser</TitleP>
            <TextLi>The Step Pyramid of Djoser at the Saqqara necropolis was the very first pyramid built by the ancient Egyptians. It was constructed during the 27th century BC for the burial of Pharaoh Djoser by his Vizier Imhotep. The ancient monument began as a traditional, flat-roofed mastaba but by the end of Djoser’s reign it had risen to a six stepped layer Pyramid and stood 204 feet (62 meters) high. As in earlier mastaba tombs, the burial chambers of the Step Pyramid are underground, hidden in a maze of tunnels.</TextLi>
          </StyleLi>
          <StyleLi>
            <TitleP>Luxor Temple</TitleP>
            <TextLi>The Luxor temple was dedicated to the three Egyptian gods Amun, Mut, and Chons. The ancient temple was the center of the festival of Opet, Thebes’ most important festival. During the annual festival the statues of the three Gods were escorted to the temple of Luxor along the avenue of sphinxes that connect the 2 temples.</TextLi>
          </StyleLi>
          <StyleLi>
            <TitleP>Red Pyramid</TitleP>
            <TextLi>Built by Pharaoh Sneferu, the Red Pyramid is the world’s first successful attempt at constructing a “true” smooth-sided pyramid. At 104 meters it is the 4th highest pyramid ever built in Egypt. What really makes the Red Pyramid special today is the lack of crowds that plagues the Giza Plateau and the comparatively unregulated interior access.</TextLi>
          </StyleLi>
          <StyleLi>
            <TitleP>Abu Simbel</TitleP>
            <TextLi>The twin temples were originally carved out of the mountainside during the reign of Pharaoh Ramesses The Great in the 13th century BC, as a lasting monument to himself and his queen Nefertari. </TextLi>
          </StyleLi>
          <StyleLi>
            <TitleP>Karnak</TitleP>
            <TextLi>
              The Temple of Karnak actually consists of three main temples, smaller enclosed temples, and several outer temples located about 2.5 kilometers north of Luxor. One of most famous structures of Karnak is the Hypostyle Hall, a hall area of 5,000 m2 (50,000 sq ft) with 134 massive columns arranged in 16 rows. <br></br>Most of the work on Karnak was done by the pharaohs of the New Kingdom
            </TextLi>
          </StyleLi>
          <StyleLi>
            <TitleP>Pyramids of Giza</TitleP>
            <TextLi>The pyramids in Giza were built over the span of three generations – by Khufu, his second reigning son Khafre, and Menkaure. The Great Pyramid of Khufu is the oldest and sole remnant of the Seven Wonders of the Ancient World. Over 2 million blocks of stone were used to construct the pyramid, during a 20 year period concluding around 2560 BC. The pyramid is an awe-inspiring 139 meters (455 feet) high making it the largest pyramid in Egypt, although nearby Khafre’s Pyramid appears to be larger as it is build at a higher elevation.</TextLi>
          </StyleLi>
        </StyledUl>
        <MapStyle>
          <Map className="map" style={{marginLeft:'0vw',marginTop:'0vw', marginBottom:'0vw', height:'1000px', width:'83.5vw'}} center={positionHabouIcon} zoom={this.state.zoom}>
            
              <TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
              <Marker position={positionHabouIcon} icon={this.HabouIcon}>
                <Popup>Médinet Habou</Popup>
              </Marker>
              <Marker position={positionPhilaeIcon} icon={this.PhilaeIcon}>
                <Popup>Le Temple d’Isis à Philae</Popup>
              </Marker>
              <Marker position={positionHatchepsoutIcon} icon={this.HatchepsoutIcon}>
                <Popup>Le temple de Hatchepsout</Popup>
              </Marker>
              <Marker position={positionMemnonIcon} icon={this.MemnonIcon}>
                <Popup>Les Colosses de Memnon</Popup>
              </Marker>
              <Marker position={positionSethiIcon} icon={this.SethiIcon}>
                <Popup>Le Temple funéraire de Séthi Ier</Popup>
              </Marker>
              <Marker position={positionSobekIcon} icon={this.SobekIcon}>
                <Popup>Le Temple de Sobek et Haroëris</Popup>
              </Marker>
              <Marker position={positionLouxorIcon} icon={this.LouxorIcon}>
                <Popup>Le Temple d’Amon à Louxor</Popup>
              </Marker>
              <Marker position={positionHorusIcon} icon={this.HorusIcon}>
                <Popup>Le Temple d’Horus à Edfou</Popup>
              </Marker>
              <Marker position={positionSimbelIcon} icon={this.SimbelIcon}>
                <Popup>Les Temples d’Abou Simbel</Popup>
              </Marker>
              <Marker position={positionKarnakIcon} icon={this.KarnakIcon}>
                <Popup>Le Temple de Karnak</Popup>
              </Marker>
              <Marker position={positionDjeserIcon} icon={this.DjeserIcon}>
                <Popup>La Pyramide à degré de Djéser</Popup>
              </Marker>
              <Marker position={positionSnefrouIcon} icon={this.SnefrouIcon}>
                <Popup>La pyramide rhomboïdale</Popup>
              </Marker>
              <Marker position={positionKheopsIcon} icon={this.KheopsIcon}>
                <Popup>La grande pyramide de Khéops</Popup>
              </Marker>
              <Marker position={positionGizehIcon} icon={this.GizehIcon}>
                <Popup>La pyramide de Khéphren</Popup>
              </Marker>
              <Marker position={positionMykerinosIcon} icon={this.MykerinosIcon}>
                <Popup>La pyramide de Mikérinos</Popup>
              </Marker>
          
          </Map>
        </MapStyle>
      </Main>
    );
  }
}

export default Maps;

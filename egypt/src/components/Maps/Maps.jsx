import React, { Component } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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

const Height = styled.div`
  height: 500px;
`;

const Main = styled.div`
  width: 100%;
  background-color: white;
`;

const CarouselStyle = styled.img`
  height: 92vh;
`

const Title = styled.h1`
  color: white;
  text-shadow: 1px 1px 2px black;
  text-align: center;
  font-size: 2em;
  margin: 0;
  padding: 2vh 0 2vh 0;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  background-image: url("https://wallpaperaccess.com/full/1659875.jpg");
`

const Title2 = styled.h2`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  text-align: center;
  padding: 2vh 0 2vh 0;
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
    const positionPhilaeIcon = [
      this.state.PhilaeIcon.lat,
      this.state.PhilaeIcon.lng,
    ];
    const positionHabouIcon = [
      this.state.habouIcon.lat,
      this.state.habouIcon.lng,
    ];
    const positionHatchepsoutIcon = [
      this.state.HatchepsoutIcon.lat,
      this.state.HatchepsoutIcon.lng,
    ];
    const positionMemnonIcon = [
      this.state.MemnonIcon.lat,
      this.state.MemnonIcon.lng,
    ];
    const positionSethiIcon = [
      this.state.SethiIcon.lat,
      this.state.SethiIcon.lng,
    ];
    const positionSobekIcon = [
      this.state.SobekIcon.lat,
      this.state.SobekIcon.lng,
    ];
    const positionLouxorIcon = [
      this.state.LouxorIcon.lat,
      this.state.LouxorIcon.lng,
    ];
    const positionHorusIcon = [
      this.state.HorusIcon.lat,
      this.state.HorusIcon.lng,
    ];
    const positionSimbelIcon = [
      this.state.SimbelIcon.lat,
      this.state.SimbelIcon.lng,
    ];
    const positionKarnakIcon = [
      this.state.KarnakIcon.lat,
      this.state.KarnakIcon.lng,
    ];
    const positionDjeserIcon = [
      this.state.DjeserIcon.lat,
      this.state.DjeserIcon.lng,
    ];
    const positionSnefrouIcon = [
      this.state.SnefrouIcon.lat,
      this.state.SnefrouIcon.lng,
    ];
    const positionKheopsIcon = [
      this.state.KheopsIcon.lat,
      this.state.KheopsIcon.lng,
    ];
    const positionGizehIcon = [
      this.state.GizehIcon.lat,
      this.state.GizehIcon.lng,
    ];
    const positionMykerinosIcon = [
      this.state.MykerinosIcon.lat,
      this.state.MykerinosIcon.lng,
    ];
    
    return (
      <Main>
        <Title style={{ fontFamily: "'Oswald', sans-serif" }}>Our most iconic monuments</Title>
        <Carousel showArrows={true} showThumbs={true}>
          <div>
            <CarouselStyle src="https://c.pxhere.com/photos/d8/54/temple_of_isis_philae_island_egypt_nile_river_temple_ruins_ancient-1041538.jpg!d" />
            <p className="legend">Le Temple d’Isis à Philae</p>
          </div>
          <div>
            <CarouselStyle src="https://azimutmonde.files.wordpress.com/2014/03/dsc00712.jpg" />
            <p className="legend">Fresque du temple du luxor</p>
          </div>
          <div>
            <CarouselStyle src="https://image.jimcdn.com/app/cms/image/transf/dimension=4096x4096:format=jpg/path/s9ab19a6bf391d9a3/image/ie351ff75d9ab1396/version/1558250526/image.jpg" />
            <p className="legend">Les Colosses de Memnon</p>
          </div>
          <div>
            <CarouselStyle src="https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/a/1/6a19c310d8_118395_temple-abou-simbel-egypte.jpg" />
            <p className="legend">Le Temple d'Abu Simbel</p>
          </div>
          <div>
            <CarouselStyle src="https://i.pinimg.com/originals/ba/a7/47/baa747b106ab9b82e62e27e0d3c6af92.jpg" />
            <p className="legend">Le Temple de Sobek et Haroëris</p>
          </div>
        </Carousel>
        <Title2>You should see</Title2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum distinctio labore id itaque hic, delectus modi illum iure quidem sit adipisci debitis dolorem tenetur necessitatibus recusandae? Necessitatibus officia et laboriosam.
          Aspernatur ex distinctio excepturi magnam! Delectus possimus commodi mollitia, corporis beatae tenetur, saepe eveniet quam nihil dignissimos maxime eligendi molestiae necessitatibus asperiores voluptatem cumque numquam deserunt itaque provident! Nesciunt, quos!
          Illo sequi cumque officiis at, facere, illum dolore quis, fuga sed placeat eum alias debitis! Asperiores ducimus saepe, veniam dicta officiis sint itaque ipsum excepturi voluptatum harum natus in error.
          Vitae corrupti voluptates dicta fugit necessitatibus possimus saepe similique esse quis repellat eius veniam, nam, a dolore qui eos earum iusto recusandae repudiandae rem perferendis incidunt explicabo voluptas aut. Numquam.
          Tenetur labore reiciendis libero ab alias, beatae praesentium neque ipsum veniam quae porro blanditiis fuga illum velit reprehenderit similique. Maiores, cum voluptatibus. Mollitia saepe a dignissimos accusamus praesentium, numquam nisi.
          Sed sunt dolores inventore ab repellendus maiores, numquam natus tempora quo dignissimos temporibus quibusdam voluptate. Adipisci repellendus vero vitae laborum, id error maiores aspernatur quam dolore iste aut consequuntur ipsam.
          Illum porro adipisci, amet totam cum fugiat. Quis, modi quod. Nihil ut temporibus modi corrupti eos voluptatibus corporis? Similique dolor cum saepe est repellat natus, dolorem excepturi fuga? Suscipit, quam?
          Sed, esse veritatis modi facilis reprehenderit quae eum. Quis debitis earum minus labore, qui ea quam dolorem? Cum, dolorum. Inventore minima voluptatem impedit corrupti beatae, ratione facilis magni omnis ea!
          Et, dignissimos dicta nostrum aut nemo obcaecati vero praesentium quasi eos veritatis? Pariatur voluptas error nulla sunt excepturi sit suscipit alias libero, deserunt, architecto possimus! Atque quaerat dolor libero aut?
          Veritatis beatae nostrum excepturi iure praesentium dolorum libero labore eos laudantium ab suscipit inventore, adipisci voluptatem, in sint dicta! Laudantium animi quasi in, atque voluptate officia! Ea laudantium blanditiis repellat!
        </p>
        <MapContainer
          className="map"
          center={positionHabouIcon}
          zoom={this.state.zoom}
        >
          <Height>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={positionHabouIcon} icon={this.HabouIcon}>
              <Popup>Médinet Habou</Popup>
            </Marker>
            <Marker position={positionPhilaeIcon} icon={this.PhilaeIcon}>
              <Popup>Le Temple d’Isis à Philae</Popup>
            </Marker>
            <Marker
              position={positionHatchepsoutIcon}
              icon={this.HatchepsoutIcon}
            >
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
          </Height>
        </MapContainer>
      </Main>
    );
  }
}

export default Maps;

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import L from 'leaflet';


export default function Map(){

  const icon = new L.Icon({
    iconUrl: '/skytrain_icon.png',
    iconSize: [35,35]
  });

    const expoLine = { color: '#00205B'};

    const position1 = [49.28594, -123.11129];
    const position2 = [49.285553, -123.120204];
    const position3 = [49.283276, -123.11612];
    const position4 = [49.279617, -123.109776];
    const position5 = [49.273172, -123.10035];
    const position6 = [49.262623, -123.069237];
    const position7 = [49.248278, -123.055917];
    const position8 = [49.24428, -123.04611];
    const position9 = [49.238373, -123.031758];
    const position10 = [49.229759, -123.012662];
    const position11 = [49.2255, -123.0032];
    const position12 = [49.220074, -122.988474];
    const position13 = [49.212318, -122.959167];
    const position14 = [49.199971, -122.949043];
    const position15 = [49.201242, -122.913037];
    const position16 = [49.204825, -122.90612];
    const position17 = [49.204446, -122.874145];
    const position18 = [49.198966, -122.850675];
    const position19 = [49.189494, -122.847849];
    const position20 = [49.182791, -122.844797];
    const position21 = [49.224699, -122.889418];
    const position22 = [49.233263, -122.882863];
    const position23 = [49.248472, -122.896952];
    const position24 = [49.25344, -122.918135];

    const polyline1 = [
      [49.28594, -123.11129],
      [49.285553, -123.120204],
      [49.283276, -123.11612],
      [49.279617, -123.109776],
      [49.273172, -123.10035],
      [49.262623, -123.069237],
      [49.248278, -123.055917],
      [49.24428, -123.04611],
      [49.238373, -123.031758],
      [49.229759, -123.012662],
      [49.2255, -123.0032],
      [49.220074, -122.988474],
      [49.212318, -122.959167],
      [49.199971, -122.949043],
      [49.201242, -122.913037],
      [49.204825, -122.90612],
      [49.204446, -122.874145],
      [49.198966, -122.850675],
      [49.189494, -122.847849],
      [49.182791, -122.844797],
    ]

    const polyline2 = [
      [49.204825, -122.90612],
      [49.224699, -122.889418],
      [49.233263, -122.882863],
      [49.248472, -122.896952],
      [49.25344, -122.918135]
    ]

    return(
        <MapContainer className={style.map} center={position9} zoom={12} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position1} icon={icon}>
              <Popup>
                 <b>Expo line:</b><br/> 
                 Waterfront Station 
              </Popup>
            </Marker>

            <Marker position={position2} icon={icon}>
              <Popup>
                <b>Expo line:</b><br/> 
                 Burrard Station
              </Popup>
            </Marker>

            <Marker position={position3} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                Granville Station
              </Popup>
            </Marker>

            <Marker position={position4} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                Stadium-Chinatown Station
              </Popup>
            </Marker>

            <Marker position={position5} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                Main Street-Science World Station
              </Popup>
            </Marker>

            <Marker position={position6} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                Commercial-Broadway Station
              </Popup>
            </Marker>

            <Marker position={position7} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                Nanaimo Station
              </Popup>
            </Marker>

            <Marker position={position8} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                29th Avenue Station
              </Popup>
            </Marker>

            <Marker position={position9} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                Joyce-Collingwood Station
              </Popup>
            </Marker>

            <Marker position={position10} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                Patterson Station
              </Popup>
            </Marker>

            <Marker position={position11} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                Metrotown Station
              </Popup>
            </Marker>

            <Marker position={position12} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                Royal Oak Station
              </Popup>
            </Marker>

            <Marker position={position13} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                Edmonds Station
              </Popup>
            </Marker>

            <Marker position={position14} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                22nd Street Station
              </Popup>
            </Marker>

            <Marker position={position15} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                New Westminster Station
              </Popup>
            </Marker>

            <Marker position={position16} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                Columbia Station
              </Popup>
            </Marker>

            <Marker position={position17} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                Scott Road Station
              </Popup>
            </Marker>

            <Marker position={position18} icon={icon}>
              <Popup>
                <b>Expo line:</b><br/> 
                Gateway Station
              </Popup>
            </Marker>

            <Marker position={position19} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                Surrey Central Station
              </Popup>
            </Marker>

            <Marker position={position20} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                King George Station
              </Popup>
            </Marker>

            <Marker position={position21} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                Sapperton Station
              </Popup>
            </Marker>

            <Marker position={position22} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                Braid Station
              </Popup>
            </Marker>

            <Marker position={position23} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                Lougheed Town Centre Station
              </Popup>
            </Marker>

            <Marker position={position24} icon={icon}>
              <Popup>
              <b>Expo line:</b><br/> 
                Production Way-University Station
              </Popup>
            </Marker>
          
            <Polyline pathOptions={expoLine} positions={polyline1}/>
            <Polyline pathOptions={expoLine} positions={polyline2}/>

        </MapContainer>
    )
}